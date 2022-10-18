import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

// import { Button } from '@monorepo/ui/Button'
import { CoolInterface } from 'server/src/types/CoolInterface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coolKid: CoolInterface = {
  isCool: false,
}

const Home: NextPage = () => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(0)

  const add = () => {
    setResult(num1 + num2)
  }

  const subtract = () => {
    setResult(num1 - num2)
  }

  const multiply = () => {
    setResult(num1 * num2)
  }

  const divide = () => {
    setResult(num1 / num2)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-2">
      <Head>
        <title>Create Next App with Turborepo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center text-white">
        <div className="mb-4 text-[4rem] font-bold" data-testid="result">
          {result}
        </div>
        <input
          type="number"
          className="my-2 w-52 rounded-lg border border-slate-500 bg-slate-900 p-2 text-lg text-white"
          data-testid="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.valueAsNumber)}
        />
        <input
          type="number"
          className="my-2 w-52 rounded-lg border border-slate-500 bg-slate-900 p-2 text-lg text-white"
          data-testid="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.valueAsNumber)}
        />
        <button
          type="button"
          onClick={add}
          className="my-2 w-52 rounded-lg border border-black bg-black p-2 text-lg text-white"
          data-testid="add"
        >
          Add
        </button>
        <button
          type="button"
          onClick={subtract}
          className="my-2 w-52 rounded-lg border border-black bg-black p-2 text-lg text-white"
          data-testid="subtract"
        >
          Subtract
        </button>
        <button
          type="button"
          onClick={multiply}
          className="my-2 w-52 rounded-lg border border-black bg-black p-2 text-lg text-white"
          data-testid="multiply"
        >
          Multiply
        </button>
        <button
          type="button"
          onClick={divide}
          className="my-2 w-52 rounded-lg border border-black bg-black p-2 text-lg text-white"
          data-testid="divide"
        >
          Divide
        </button>
      </main>
    </div>
  )
}

export default Home
