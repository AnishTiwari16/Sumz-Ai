import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
                <div>logo</div>
                <div className="text-xl font-bold">Sumz</div>
            </div>
            <Button asChild>
                <a
                    href="https://github.com/AnishTiwari16/sumz-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Github
                </a>
            </Button>
        </div>
    );
};

export default Navbar;
