import * as React from "react"

// import { cn } from "@/lib/utils/general.util";
import { cn } from "@/lib/utils"

const H1 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1">
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      className
    )}
    {...props}
  />
))

const H2 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2">
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "mt-8 scroll-m-20 text-3xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))

const H3 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))

const H4 = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h4">
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn(
      "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
))

const P = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
))

const BlockQuote = React.forwardRef<
  HTMLQuoteElement,
  React.ComponentPropsWithoutRef<"blockquote">
>(({ className, ...props }, ref) => (
  <blockquote
    ref={ref}
    className={cn(
      "mt-6 border-l-2 border-light-300 pl-6 italic text-light-800 dark:border-dark-600 dark:text-dark-200",
      className
    )}
    {...props}
  />
))

const UL = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
    {...props}
  />
))

const LI = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))

const InlineCode = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"code">
>(({ className, ...props }, ref) => (
  <code
    ref={ref}
    className={cn(
      "relative rounded bg-light-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-light-900 dark:bg-dark-800 dark:text-dark-400",
      className
    )}
    {...props}
  />
))

const Lead = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xl text-light-700 dark:text-dark-400", className)}
    {...props}
  />
))

const Large = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-lg font-semibold text-light-900 dark:text-dark-50",
      className
    )}
    {...props}
  />
))

const Small = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"small">
>(({ className, ...props }, ref) => (
  <small
    ref={ref}
    className={cn("text-sm font-medium leading-none", className)}
    {...props}
  />
))

const Subtle = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-light-500 dark:text-dark-400", className)}
    {...props}
  />
))

export {
  H1,
  H2,
  H3,
  H4,
  P,
  BlockQuote,
  UL,
  LI,
  InlineCode,
  Lead,
  Large,
  Small,
  Subtle,
}
