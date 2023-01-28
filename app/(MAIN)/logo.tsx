import React from "react"
import Link from "next/link"

import { SITE_NAME } from "@/config/meta-settings"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

interface LogoInterface {
  disableThemeSwitcher?: boolean
}

const Logo = ({ disableThemeSwitcher }: LogoInterface) => {
  return (
    <div className="flex items-center">
      <Link href="/browse" className="flex-1">
        <div className="flex space-x-2 items-center">
          <Icons.logo className="h-5 w-5" />
          <span className="font-bold text-lg sm:inline-block">{SITE_NAME}</span>
        </div>
      </Link>

      {!disableThemeSwitcher && <ThemeToggle />}
    </div>
  )
}

export default Logo
