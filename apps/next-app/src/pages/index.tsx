import React from 'react'
import type { NextPage } from 'next'

// import { Button } from 'ui/Button'
import { CoolInterface } from 'server/src/types/CoolInterface'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coolKid: CoolInterface = {
  isCool: false,
}

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Create Next App with Turborepo</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {/* <Button /> */}
      <div className="bg-yellow-200 h-12 w-12" />
    </main>
  </div>
)

export default Home
