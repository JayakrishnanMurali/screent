import "@/styles/globals.css"
import { Inter as FontSans } from "@next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-theme-50  2xl:m-auto   text-theme-900 antialiased dark:bg-theme-900 dark:text-theme-50",
          fontSans.className
        )}
      >
        <ThemeProvider>
          <div className="container">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
