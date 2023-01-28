import React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { H1 } from "@/components/ui/typography"

const HomePage = () => {
  return (
    <div>
      <H1>Go TO BROWSE</H1>
      <Link
        href="/browse"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        BROWSE
      </Link>
    </div>
  )
}

export default HomePage
