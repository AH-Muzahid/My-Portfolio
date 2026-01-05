"use client";

import React from "react";
import { cva } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
    "supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 mx-auto mt-8 flex gap-2 rounded-2xl border p-2 backdrop-blur-md",
    {
        variants: {
            direction: {
                horizontal: "h-[58px] w-max flex-row items-end",
                vertical: "w-[58px] h-max flex-col items-center",
            },
        },
        defaultVariants: {
            direction: "horizontal",
        },
    }
);

const Dock = React.forwardRef(
    (
        {
            className,
            children,
            magnification = DEFAULT_MAGNIFICATION,
            distance = DEFAULT_DISTANCE,
            direction = "horizontal",
            ...props
        },
        ref,
    ) => {
        const mouseValue = useMotionValue(Infinity);

        const renderChildren = () => {
            return React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        mouseValue,
                        magnification,
                        distance,
                        direction,
                    });
                }
                return child;
            });
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={(e) => mouseValue.set(direction === "vertical" ? e.pageY : e.pageX)}
                onMouseLeave={() => mouseValue.set(Infinity)}
                {...props}
                className={cn(dockVariants({ direction, className }), className)}
            >
                {renderChildren()}
            </motion.div>
        );
    },
);

Dock.displayName = "Dock";

const DockIcon = ({
    size,
    magnification = DEFAULT_MAGNIFICATION,
    distance = DEFAULT_DISTANCE,
    mouseValue,
    direction,
    className,
    children,
    ...props
}) => {
    const ref = React.useRef(null);

    const distanceCalc = useTransform(mouseValue, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0, y: 0, height: 0 };

        if (direction === "vertical") {
            return val - bounds.y - bounds.height / 2;
        }
        return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(
        distanceCalc,
        [-distance, 0, distance],
        [40, magnification, 40],
    );

    let width = useSpring(widthSync, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    return (
        <motion.div
            ref={ref}
            style={{ width, height: width }}
            className={cn(
                "flex aspect-square cursor-pointer items-center justify-center rounded-full",
                className,
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export { Dock, DockIcon, dockVariants };
