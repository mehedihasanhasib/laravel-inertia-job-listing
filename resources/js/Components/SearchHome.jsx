import React from "react";

export default function SearchHome() {
    return (
        <div className="pt-6 flex justify-center items-center">
            <div className="flex gap-1">
                <div>
                    <input
                        type="text"
                        name="keyword"
                        id="keyword"
                        className="rounded w-[21vw] focus:border-0"
                        placeholder="Search by Keyword"
                    />
                </div>
                <div>
                    <button className="px-5 py-2 rounded-md text-white bg-blue-400">Search</button>
                </div>
            </div>
        </div>
    );
}
