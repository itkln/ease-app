import React, { useEffect, useRef, useState } from 'react'

interface SelectProps {
  id: string;
  name: string;
  labelName: string;
  title: string;
  handleCategory?: any;
  options: Array<string>;
}

export default function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    
    if (props.id === "category") {
      props.handleCategory(option);
    }

    setIsOpen(false);
  };

  useEffect(() => {
    // Add a click event listener to close the dropdown when clicking outside
    document.addEventListener('mousedown', handleOutsideClick);
    
    // Unbind the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="w-full z-0 flex justify-between px-5 py-3 rounded-lg border-[1.5px] border-[#EDEEF1] bg-white outline-none focus:border-[#3B7EDD] transition-all ease-in-out duration-500"
            onClick={toggleDropdown}
          >
            {selectedOption || props.title}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#1A242D"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="z-10 absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {props.options.map((option) => (
              <button
                key={option}
                onClick={() => selectOption(option)}
                className="block px-4 w-full text-left py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-blue-800"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
