"use client"

import * as React from "react"
import * as TabsPrimivite from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimivite.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.List>
>(({ className, ...props }, ref) => (
  <TabsPrimivite.List
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-md bg-theme-100 p-1 dark:bg-theme-800",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimivite.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimivite.Trigger
    className={cn(
      "inline-flex min-w-[100px] items-center justify-center rounded-[0.185rem] px-3 py-1.5  text-sm font-medium text-theme-700 transition-all  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-theme-900 data-[state=active]:shadow-sm dark:text-theme-200 dark:data-[state=active]:bg-theme-900",
      className
    )}
    {...props}
    ref={ref}
  />
))
TabsTrigger.displayName = TabsPrimivite.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimivite.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimivite.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimivite.Content
    className={cn(
      "mt-2 rounded-md border border-theme-200 p-6 dark:border-theme-700",
      className
    )}
    {...props}
    ref={ref}
  />
))
TabsContent.displayName = TabsPrimivite.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
