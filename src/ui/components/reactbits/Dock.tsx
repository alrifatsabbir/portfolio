"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type SpringOptions,
} from "framer-motion";
import { Children, cloneElement, useEffect, useMemo, useRef, useState, type ReactElement, type ReactNode } from "react";

/* ── sub-components ── */

function DockItem({
  children,
  className = "",
  onClick,
  mousePos,
  spring,
  distance,
  magnification,
  baseItemSize,
  vertical,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  mousePos: ReturnType<typeof useMotionValue<number>>;
  spring: SpringOptions;
  distance: number;
  magnification: number;
  baseItemSize: number;
  vertical: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mousePos, (val) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return distance;
    if (vertical) {
      return val - rect.y - rect.height / 2;
    }
    return val - rect.x - rect.width / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`dock-item ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<{ isHovered?: ReturnType<typeof useMotionValue<number>>; vertical?: boolean }>, { isHovered, vertical })
      )}
    </motion.div>
  );
}

function DockLabel({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  isHovered?: ReturnType<typeof useMotionValue<number>>;
  vertical?: boolean;
}) {
  const { isHovered, vertical } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: vertical ? -5 : 0, y: vertical ? 0 : -5 }}
          animate={{ opacity: 1, x: vertical ? 10 : 0, y: vertical ? 0 : -10 }}
          exit={{ opacity: 0, x: vertical ? -5 : 0, y: vertical ? 0 : -5 }}
          transition={{ duration: 0.2 }}
          className={`dock-label ${vertical ? "dock-label-vertical" : ""} ${className}`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }: { children: ReactNode; className?: string; vertical?: boolean }) {
  return <div className={`dock-icon ${className}`}>{children}</div>;
}

/* ── main Dock ── */

export type DockItemData = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
};

type DockProps = {
  items: DockItemData[];
  className?: string;
  spring?: SpringOptions;
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
  vertical?: boolean;
};

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 68,
  dockHeight = 256,
  baseItemSize = 50,
  vertical = false,
}: DockProps) {
  const mousePos = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxDim = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const dimRow = useTransform(isHovered, [0, 1], [panelHeight, maxDim]);
  const dim = useSpring(dimRow, spring);

  const outerStyle = vertical
    ? { width: dim, scrollbarWidth: "none" as const }
    : { height: dim, scrollbarWidth: "none" as const };

  return (
    <motion.div style={outerStyle} className={`dock-outer ${vertical ? "dock-outer-vertical" : ""}`}>
      <motion.div
        onMouseMove={(e) => {
          isHovered.set(1);
          mousePos.set(vertical ? e.pageY : e.pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mousePos.set(Infinity);
        }}
        className={`dock-panel ${vertical ? "dock-panel-vertical" : ""} ${className}`}
        style={vertical ? { width: panelHeight } : { height: panelHeight }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mousePos={mousePos}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
            vertical={vertical}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
