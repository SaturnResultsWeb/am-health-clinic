import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] font-medium tracking-tight transition-[transform,background-color,color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-lift/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ground active:translate-y-0 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-40 cursor-pointer",
  {
    variants: {
      variant: {
        // primary on dark grounds — ivory, high-contrast, luxe
        primary:
          "bg-cream text-ground shadow-[0_1px_2px_rgba(20,22,15,0.25)] hover:bg-[#f7f6f0] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-18px_rgba(20,22,15,0.65)]",
        // primary on bone/light sections
        primaryLight:
          "bg-sage text-cream hover:bg-[#6b6f49] hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-18px_rgba(20,36,26,0.45)]",
        // secondary — sand hairline
        outline:
          "border border-sand/70 bg-transparent text-sand hover:bg-sand/10 hover:border-sand hover:-translate-y-0.5",
        // quiet inline link
        link: "text-sand underline-offset-4 hover:underline px-0",
      },
      size: {
        default: "h-11 px-6 text-[0.95rem]",
        lg: "h-12 px-7 text-base",
        sm: "h-9 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
