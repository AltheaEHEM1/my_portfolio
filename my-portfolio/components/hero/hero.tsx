import React from "react";

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
}

const HeroSection = ({
    title = "HeroSection",
    subtitle = "----// 001 - GET TO KNOW ME",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
}: HeroSectionProps) => {
    return (
        <div className="w-full text-center py-8 bg-gradient-to-r from-hero-start to-hero-end">
            <div className="flex flex-col items-center justify-center">
                <p className="text-[12px] text-teal font-rajdhani mb-3">{subtitle}</p>
                <h1 className="text-2xl font-semibold font-valorant">{title}</h1>
                <p className="text-[13px] font-poppins text-muted-foreground -mt-2 max-w-xl">{description}</p>
            </div>
        </div>
    );
};

export default HeroSection;