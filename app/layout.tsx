import React from 'react'
import Meta from './partials/meta'
import Topbar from './partials/topbar'
import Header from './partials/header'
import Hero from './partials/hero'
import Footer from './partials/footer'
import ArrowTop from './partials/arrowTop'
import Scripts from './partials/scripts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <Meta />
      <body>
        <Topbar />
        <Header />
        {/* <Hero /> */}

        <main id="main">
          {children}
        </main>

        <Footer />
        <ArrowTop />
        <Scripts />
      </body>
    </html>
  )
}
