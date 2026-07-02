import type { Metadata } from "next";
import {
    Geist,
    Geist_Mono,
    Orbitron,
    Rajdhani,
    Space_Mono,
} from "next/font/google";
import { Toaster } from "sonner"; // Added import
import "./globals.css";

import MatrixBackground from "../components/background/hero-background";
import Footer from "../components/footer/footer";
import NavHeader from "../components/navbar/header";
import ScrollToTop from "../components/scroll-to-top/scroll-to-top";
import PageAnimateProvider from "./page-animate-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const orbitron = Orbitron({
    variable: "--font-orbitron",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
    variable: "--font-rajdhani",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Althea | Portfolio",
    description:
        "Welcome to my space. A simple archive showcasing my work, projects, and ideas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${rajdhani.variable} ${spaceMono.variable} h-full antialiased`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var savedTheme = localStorage.getItem('theme');
                                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (e) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className="min-h-full flex flex-col relative bg-background text-foreground">
                <Toaster richColors position="top-right" />
                
                {/* Background Design */}
                <MatrixBackground />

                {/* Navbar - Fixed and Sticky */}
                <div id="global-nav-header" className="sticky top-0 z-50">
                    <NavHeader />
                </div>

                {/* Main Content */}
                <main className="relative z-10 mb-10 flex-grow">
                    <PageAnimateProvider>
                        <div className="w-full">{children}</div>
                    </PageAnimateProvider>
                </main>

                {/* Scroll to Top */}
                <div 
					id="global-scroll-to-top" 
					className="flex pt-10 justify-center"
					>
						<ScrollToTop />
				</div>

                {/* Footer */}
                <footer id="global-footer" className="mt-auto relative z-10">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}