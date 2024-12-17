"use client";

import CardWidget from "./components/CardWidget/CardWidget";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Subheader from "./components/Subheader/Subheader";
import Footer from "./components/Footer/Footer";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const DATA_URL =
        process.env.NEXT_PUBLIC_DATA_URL ||
        "https://raw.githubusercontent.com/computerclubkec/ai-leaderboard/refs/heads/main/fb-scraper/data.json";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(DATA_URL);
                if (response.ok) {
                    const data = await response.json();
                    const sortedPosts = data.posts.sort(
                        (a, b) => b.Points - a.Points
                    );
                    setPosts(sortedPosts);
                } else {
                    console.error("Failed to fetch data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    // const sortedPosts = posts.sort((a, b) => b.Points - a.Points);
    return (
        <div className="relative flex flex-col justify-between items-center w-full min-h-screen font-[family-name:var(--font-geist-sans)]">
            {/* Title Section */}
            <div className="relative w-full h-auto text-center sm:mb-12 top-0 left-0 m-4 flex flex-wrap flex-col justify-center items-center">
                <Header />
                <Subheader />
            </div>

            {/* Cards Section */}
            <div className="w-full sm:w-[95%] md:w-[90%] lg:w-[90%] flex flex-wrap justify-center">
                {posts.length > 0
                    ? posts.map((post, index) => (
                          <CardWidget key={index} {...post} rank={index + 1} />
                      ))
                    : [1, 2, 3, 4, 5, 6].map((_, index) => (
                          <div
                              key={index}
                              className="w-full m-8 sm:w-[300px] md:w-[350px] lg:w-[400px] bg-slate-200 rounded-lg h-[480px] animate-pulse"
                          >
                              <div className="w-full bg-slate-300 h-[60px] rounded-t-lg mb-4"></div>
                              <div className="w-full h-[320px] bg-slate-300 rounded-md mb-4"></div>
                              <div className="flex justify-between px-4 py-2">
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                                  <div className="w-[70px] h-[30px] bg-slate-300 rounded"></div>
                              </div>
                          </div>
                      ))}
            </div>

            {/* Footer section */}
            <div className="w-full text-center mt-8">
                <Footer />
            </div>
        </div>
    );
}
