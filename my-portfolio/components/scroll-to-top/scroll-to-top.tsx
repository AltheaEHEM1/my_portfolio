"use client";

import React from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop(): React.JSX.Element {
    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className="flex flex-col items-center mb-5 group cursor-pointer transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
        >
            <div className="flex flex-col items-center">
                {/* Chevron Icon */}
                <ChevronUp
                    size={18}
                    className="mb-[-4px] transition-transform group-hover:scale-110"
                    style={{ color: "var(--text-title)" }}
                />

                {/* Decorative Lines */}
                <div
                    className="w-[1.5px] h-6 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                    style={{ backgroundColor: "rgba(var(--glow-color), 0.6)" }}
                />
                <div
                    className="w-[1.5px] h-4 mt-1"
                    style={{ backgroundColor: "rgba(var(--glow-color), 0.2)" }}
                />
            </div>

            {/* Label */}
            <span
                className="mt-4 text-[10px] tracking-[0.3em] font-valorant transition-colors"
            >
                SCROLL UP
            </span>
        </button>
    );
}