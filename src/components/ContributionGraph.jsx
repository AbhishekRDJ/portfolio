import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const YearButton = ({ year, currentYear, onClick }) => {
    const isActive = year === currentYear;
    return (
        <button
            onClick={() => onClick(year)}
            className={`px-4 py-2 rounded-md text-lg font-semibold transition-colors w-20
        ${isActive
                    ? "bg-green-500 text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
        >
            {year}
        </button>
    );
};

export default function ContributionGraph() {
    const [calendarYear, setCalendarYear] = useState(undefined);

    const username = "AbhishekRDJ"; // your GitHub username
    const joinYear = 2024; // when you joined GitHub
    const today = new Date().getFullYear();
    const years = Array.from({ length: today - joinYear + 1 }, (_, i) => today - i);

    // GitHub green color theme
    const githubTheme = {
        dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
        light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
    };

    return (
        <div className="flex xl:flex-row flex-col items-start gap-8 bg-[#141414] shadow-lg p-6 rounded-xl overflow-x-scroll hide-scrollbar">
            {/* Calendar */}
            <div className="bg-[#141414] p-4 border border-[#484747] rounded-lg min-w-max">
                <h2 className="mb-4 font-bold text-white text-2xl">Contribution Graph</h2>
                <GitHubCalendar
                    username={username}
                    year={calendarYear}
                    blockSize={13}
                    blockMargin={4}
                    theme={githubTheme}
                    colorScheme="dark"
                />
            </div>


            {/* Year buttons */}
            <div className="flex xl:flex-col gap-3">
                {years.map((year) => (
                    <YearButton
                        key={year}
                        year={year}
                        currentYear={calendarYear ?? today}
                        onClick={(y) => setCalendarYear(y === calendarYear ? undefined : y)}
                    />
                ))}
            </div>
        </div>
    );
}
