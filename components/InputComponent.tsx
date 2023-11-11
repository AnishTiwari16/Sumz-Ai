import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';
import { useAppDispatch } from '@/redux/hooks';
import { storeData } from '@/redux/slice';
import toast, { Toaster } from 'react-hot-toast';
const InputComponent = ({ fetchSummaries }: { fetchSummaries: any }) => {
    const [searchedUrl, setSearchUrl] = useState('');
    const dispatch = useAppDispatch();
    const handleOnSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchedUrl) {
            return;
        }
        try {
            const data = await fetchSummaries({
                articleUrl: searchedUrl,
            }).unwrap();
            if (data?.summary) {
                dispatch(storeData(data.summary));
            }
        } catch (error) {
            toast.error('Invalid URL!!!');
        }
    };
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <form
                className="pt-12 w-full md:w-[65%] lg:w-[40%] relative"
                onSubmit={handleOnSubmit}
            >
                <Input
                    placeholder="Enter a URL"
                    className="bg-[#FFFFFF]"
                    onChange={(e) => setSearchUrl(e.target.value)}
                />
                <Button
                    className="absolute top-[50px] right-0"
                    variant="outline"
                    size={'sm'}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                            clipRule="evenodd"
                        />
                    </svg>
                </Button>
            </form>
        </>
    );
};

export default InputComponent;
