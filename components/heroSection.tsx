'use client';
import React from 'react';
import TypeWriter from 'typewriter-effect';
import InputComponent from './InputComponent';
import { useAppSelector } from '@/redux/hooks';

const HeroSection = () => {
    const summaryData = useAppSelector((state) => state.summaryData);
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
            <InputComponent />
            {summaryData && (
                <div className="pt-10 w-full md:w-[65%] lg:w-[40%]">
                    <div className="font-semibold text-lg">
                        Article <span className="text-blue-600">Summary</span>
                    </div>
                    <p className="pt-2 text-md">{summaryData}</p>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
