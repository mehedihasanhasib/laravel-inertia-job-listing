import React from "react";
import { RiMenuFill } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";

const BrowseCategory = () => {
    const x = [
        1, 2, 3, 4, 45, 6, 7, 7, 8, 8, 7, 66, 56, 5, 5, 5, 66, 5, 5, 6, 6, 55,
        4,3
    ];
    return (
        <div className="p-4 w-[60vw] m-auto bg-blue-50 rounded-sm shadow-lg mt-4">
            <div className="flex items-center gap-1">
                <RiMenuFill style={{ color: "#b73232" }} />
                <h1 className="text-[#b73232] text-xl">Browse Category</h1>
            </div>
            <div className="grid grid-cols-4">
                {x.map((e) => {
                    return (
                        <>
                            <div className="py-2 flex items-center cursor-pointer hover:scale-105 transition">
                                <RiArrowDropRightLine
                                    style={{ fontSize: "20px" }}
                                />
                                <p className="text">Category (00)</p>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default BrowseCategory;
