"use client";

import { useState } from "react";

const FAQListItem = ({ qa }) => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <li key={qa.qustion}>
      {/* FAQ Question */}
      <button
        className={`${
          isOpen ? "mb-1 text-primary" : ""
        } hover:text-primary flex justify-between items-center my-3 font-semibold border-b border-current w-full text-left`}
        onClick={() => SetIsOpen(!isOpen)}
      >
        <p>{qa.qustion}</p>
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 font-extrabold"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* FAQ Answer */}
      {
        <div
          className={`${isOpen ? "block text-primary" : "hidden"} text-left`}
        >
          <p className="text-sm">{qa.answer}</p>
        </div>
      }
    </li>
  );
};

export default FAQListItem;
