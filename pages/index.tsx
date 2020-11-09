import Head from "next/head"
import "twin.macro"

export default function Home() {
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>

      <h1 tw="text-gray-900 text-2xl">Welcome to the show</h1>
    </main>
  )
}
