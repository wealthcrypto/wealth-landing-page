"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Percent } from "lucide-react";

export type ButtonProps = {
  label?: string;
  icon?: React.ReactNode;
  primaryColor?: string; // main pill color (hex or css color)
  secondaryColor?: string; // circle background color
  onClick?: () => void;
  href?: string;
  target?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
};

const sizeMap = {
  sm: {
    paddingY: "py-2",
    paddingX: "px-2",
    text: "text-md",
    circle: "w-8 h-8",
    icon: "w-4 h-4",
  },
  md: {
    paddingY: "py-3",
    paddingX: "px-6",
    text: "text-base",
    circle: "w-10 h-10",
    icon: "w-5 h-5",
  },
  lg: {
    paddingY: "py-2",
    paddingX: "px-2",
    text: "text-xl",
    circle: "w-16 h-16",
    icon: "w-8 h-8",
  },
};

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  icon,
  primaryColor = "#11e281",
  secondaryColor = "#ffffff",
  onClick,
  href,
  target,
  className = "",
  size = "md",
  ariaLabel,
  type = "button",
}) => {
  const sz = sizeMap[size];

  // wrapper styles use inline background to allow arbitrary colors
  const wrapperStyle: React.CSSProperties = {
    background: primaryColor,
  };

  const circleStyle: React.CSSProperties = {
    background: secondaryColor,
    // icon should use primaryColor for contrast when secondary is light
    color: primaryColor,
  };

  const buttonStyle: React.CSSProperties = {
    color: secondaryColor,
  };

  // default icon (Percent) if none provided
  const renderedIcon = icon ?? <Percent className={`${sz.icon} stroke-current`} />;

  const inner = (
    <>
      {/* Label */}
      <span className={`flex-1 text-left ${sz.text} font-medium pl-2 md:pl-2`} style={buttonStyle}>
        {label}
      </span>

      {/* Icon circle */}
      <span
        className={`flex items-center justify-center rounded-full ${sz.circle}`}
        style={circleStyle}
      >
        <span className="flex items-center justify-center text-current">
          {React.isValidElement(renderedIcon)
            ? React.cloneElement(renderedIcon as React.ReactElement, {
                className: (renderedIcon as any).props.className
                  ? (renderedIcon as any).props.className + " stroke-current text-current"
                  : "stroke-current text-current",
              })
            : renderedIcon}
        </span>
      </span>
    </>
  );

  const baseClass = `flex items-center gap-4 justify-between rounded-full overflow-hidden transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-30 shadow-sm ${sz.paddingY} ${sz.paddingX} ${className}`;

  const motionProps = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3, ease: "easeOut" },
  };

  // If href is provided, render as link (internal or external)
  if (href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (isInternal) {
      return (
        <motion.div {...motionProps}>
          <Link
            href={href}
            aria-label={ariaLabel ?? label}
            style={wrapperStyle}
            className={baseClass}
            onClick={onClick}
          >
            {inner}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.div {...motionProps}>
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          aria-label={ariaLabel ?? label}
          style={wrapperStyle}
          className={baseClass}
          onClick={onClick}
        >
          {inner}
        </a>
      </motion.div>
    );
  }

  // Default: render button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel ?? label}
      style={wrapperStyle}
      className={baseClass}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {inner}
    </motion.button>
  );
};

export default Button;
