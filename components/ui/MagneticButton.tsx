'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    strength?: number; // How far it moves (default: 0.5)
}

export const MagneticButton = ({
    children,
    className = '',
    strength = 0.5,
    ...props
}: MagneticButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const button = buttonRef.current;
        const text = textRef.current;
        if (!button || !text) return;

        const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        // Optional: Move text slightly more for parallax effect
        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = button.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            // Only move if close enough (optional optimization, but GSAP handles it well)
            xTo(x * strength);
            yTo(y * strength);

            textXTo(x * (strength * 0.2)); // Text moves slightly less/more
            textYTo(y * (strength * 0.2));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        button.addEventListener("mousemove", handleMouseMove);
        button.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            button.removeEventListener("mousemove", handleMouseMove);
            button.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: buttonRef });

    return (
        <button
            ref={buttonRef}
            className={`relative inline-block ${className}`}
            {...props}
        >
            <span ref={textRef} className="relative block pointer-events-none">
                {children}
            </span>
        </button>
    );
};

// Also create a Link version since we use next/link often
import Link, { LinkProps } from 'next/link';

interface MagneticLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    [key: string]: any; // Allow other props
}

export const MagneticLink = ({
    children,
    className = '',
    strength = 0.5,
    ...props
}: MagneticLinkProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const link = linkRef.current;
        const text = textRef.current;
        if (!link || !text) return;

        const xTo = gsap.quickTo(link, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(link, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = link.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * strength);
            yTo(y * strength);

            textXTo(x * (strength * 0.1));
            textYTo(y * (strength * 0.1));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        link.addEventListener("mousemove", handleMouseMove);
        link.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            link.removeEventListener("mousemove", handleMouseMove);
            link.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: linkRef });

    return (
        <Link
            ref={linkRef}
            className={`relative inline-block ${className}`}
            {...props}
        >
            <span ref={textRef} className="relative block pointer-events-none">
                {children}
            </span>
        </Link>
    );
};

interface MagneticAnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export const MagneticAnchor = ({
    children,
    className = '',
    strength = 0.5,
    ...props
}: MagneticAnchorProps) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        const link = linkRef.current;
        const text = textRef.current;
        if (!link || !text) return;

        const xTo = gsap.quickTo(link, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(link, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const textXTo = gsap.quickTo(text, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const textYTo = gsap.quickTo(text, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { left, top, width, height } = link.getBoundingClientRect();

            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            xTo(x * strength);
            yTo(y * strength);

            textXTo(x * (strength * 0.1));
            textYTo(y * (strength * 0.1));
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
            textXTo(0);
            textYTo(0);
        };

        link.addEventListener("mousemove", handleMouseMove);
        link.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            link.removeEventListener("mousemove", handleMouseMove);
            link.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, { scope: linkRef });

    return (
        <a
            ref={linkRef}
            className={`relative inline-block ${className}`}
            {...props}
        >
            <span ref={textRef} className="relative block pointer-events-none">
                {children}
            </span>
        </a>
    );
};
