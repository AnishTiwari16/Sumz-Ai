'use client';
import React from 'react';
import TypeWriter from 'typewriter-effect';
const HeroSection = () => {
    return (
        <div className="flex items-center justify-center pt-10 flex-col">
            <h1 className="text-[32px] md:text-[40px] font-extrabold text-center leading-tight">
                Summarise Articles with <br />
                <div className="orange-gradient">
                    <TypeWriter
                        options={{
                            strings: ['OpenAI GPT-4', 'Fast, Reliable'],
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
        </div>
    );
};

export default HeroSection;
