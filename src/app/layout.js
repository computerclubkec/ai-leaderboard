import localFont from "next/font/local";
import Head from "next/head"; // Importing Head component
import { Khand } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const khand = Khand({
    subsets: ["latin"],
    variable: "--font-khand",
    weight: ["400"],
});

export const metadata = {
    title: "Leaderboard",
    description: "AI Photography Post Engagement Tracker",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="icon"
                    href="https://raw.githubusercontent.com/SamratAdhikari/Post-Leaderboard/refs/heads/main/public/favicon.ico"
                    type="image/x-icon"
                />
            </Head>

            <body
                className={`${geistSans.variable} ${geistMono.variable} ${khand.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
