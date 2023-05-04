import React, { useState, useEffect } from "react";

const FadingList = ({ items }: { items: Array<string> }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex(
                (visibleIndex) => (visibleIndex + 1) % items.length
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <ul className="flex justify-center text-base">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`${
                        index === visibleIndex ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-1000 ease-in-out mx-2`}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default FadingList;
