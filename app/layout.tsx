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
          "min-h-screen bg-light-50 container  text-light-900 antialiased dark:bg-dark-900 dark:text-dark-50",
          fontSans.className
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
