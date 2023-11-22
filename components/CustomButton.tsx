"use client";
import React from "react";

import Image from "next/image";
import { CustomButton } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButton) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative h-6 w-6">
          <Image src={rightIcon} alt="arrow" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
