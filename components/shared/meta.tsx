import React from "react"
import Head from "next/head"

import { SITE_DESCRIPTION, SITE_NAME } from "@/config/meta-settings"

interface MetaInterface {
  title: string
  description?: string
}

const Meta = ({ title, description = SITE_DESCRIPTION }: MetaInterface) => {
  return (
    <Head>
      <title>{`${SITE_NAME} | ${title}`}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta itemProp="image" content={image} /> */}
      {/* <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vercel" />
      <meta name="twitter:creator" content="@jkay_dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Head>
  )
}

export default Meta
