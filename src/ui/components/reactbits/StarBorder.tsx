"use client";

import type { ReactNode, CSSProperties } from "react";

type StarBorderProps = {
  as?: "button" | "a" | "div" | "span";
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: ReactNode;
  style?: CSSProperties;
  onClick?: () => void;
  href?: string;
};

export default function StarBorder({
  as = "button",
  className = "",
  color = "cyan",
  speed = "6s",
  thickness = 1,
  children,
  style,
  onClick,
  href,
}: StarBorderProps) {
  const Tag = as;
  const tagProps: Record<string, unknown> = {
    className: `star-border-container ${className}`,
    style: { padding: `${thickness}px 0`, ...style },
    ...(onClick ? { onClick } : {}),
    ...(href ? { href } : {}),
  };

  return (
    <Tag {...tagProps}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Tag>
  );
}
