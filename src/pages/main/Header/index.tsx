import React from "react";
export type HeaderProps = {
  onClick?: (e: any) => void;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="flex justify-end items-center p-5 mb-2">
      <button
        className=" px-2 py-1 bg-gray-400 rounded-lg"
        onClick={props.onClick}
      >
        Refresh
      </button>
    </div>
  );
};

export default Header;
