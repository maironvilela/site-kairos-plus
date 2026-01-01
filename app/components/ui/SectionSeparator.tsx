import React from 'react';

type SeparatorVariant = 'wave' | 'curve' | 'slant-right' | 'slant-left';

interface SectionSeparatorProps {
    variant?: SeparatorVariant;
    fillColor?: string; // Should match the BG of the NEXT section
    className?: string;
    flip?: boolean;
}

export default function SectionSeparator({
    variant = 'wave',
    fillColor = '#fff8e7', // Default sand tone start
    className = '',
    flip = false,
}: SectionSeparatorProps) {
    const shadowFilter = "drop-shadow(0px -5px 10px rgba(0,0,0,0.08))";
    const transform = flip ? 'scaleX(-1)' : undefined;

    return (
        <div className={`relative w-full overflow-hidden leading-[0] z-20 -mt-1 ${className}`} style={{ transform }}>
            <svg
                className="relative block w-[calc(100%+1.3px)] h-[80px] md:h-[150px]"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{ filter: shadowFilter }}
            >
                {variant === 'wave' && (
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        fill={fillColor}
                        transform="scale(1, -1) translate(0, -120)" // Invert to come from top down if needed, or used as bottom separator. Logic depends on placement.
                    // Actually, to sit ON TOP of next section, it needs to be "bottom" shape of PREV section or "top" shape of NEXT.
                    // Let's assume this component is placed BEFORE the next section, overlapping it.
                    ></path>
                )}

                {/* Simplified Wave Logic for specific 'top' transition */}
                {variant === 'wave' && (
                    // Standard wave
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill={fillColor}></path>
                )}

                {variant === 'curve' && (
                    <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V120H0Z" fill={fillColor}></path>
                )}

                {variant === 'slant-right' && (
                    <path d="M1200 120L0 120 0 0 1200 120z" fill={fillColor}></path>
                )}
                {variant === 'slant-left' && (
                    <path d="M0 120L1200 120 1200 0 0 1200z" fill={fillColor}></path>
                )}
            </svg>
        </div>
    );
}
