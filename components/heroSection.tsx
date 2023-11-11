'use client';
import React from 'react';
import TypeWriter from 'typewriter-effect';
import InputComponent from './InputComponent';
import { useAppSelector } from '@/redux/hooks';
import { useLazyFetchSummariesQuery } from '@/redux/api';

const HeroSection = () => {
    const [fetchSummaries, { isFetching, isSuccess }] =
        useLazyFetchSummariesQuery();
    const summaryData = useAppSelector((state) => state.summaryData);
    const handleSpeak = (text: string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };
    return (
        <div className="flex items-center justify-center pt-16 flex-col">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-center leading-tight">
                Summarise Articles with <br />
                <div className="orange-gradient">
                    <TypeWriter
                        options={{
                            strings: ['OpenAI GPT-4', 'Fast', 'Reliable'],
                            autoStart: true,
                            loop: true,
                            delay: 100,
                        }}
                    />
                </div>
            </h1>
            <p className="w-full md:w-3/6 lg:w-2/6 text-center pt-4 text-sm text-[#4e5d78]">
                Simplify your reading with Summize, an open-source article
                summarizer that transform lengthy articles into clear and
                concise summaries
            </p>
            <InputComponent fetchSummaries={fetchSummaries} />
            {isFetching ? (
                <>
                    <div role="status" className="flex items-center gap-3 pt-6">
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="orange-gradient font-semibold">
                            Fetching...
                        </span>
                    </div>
                </>
            ) : (
                isSuccess && (
                    <div className="pt-10 w-full md:w-[65%] lg:w-[40%]">
                        <div className="font-semibold text-lg flex items-center gap-2">
                            Article{' '}
                            <span className="text-blue-600">Summary</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 cursor-pointer"
                                onClick={() => handleSpeak(summaryData)}
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                                />
                            </svg>
                        </div>
                        <p className="pt-2 text-md">{summaryData}</p>
                    </div>
                )
            )}
        </div>
    );
};

export default HeroSection;
