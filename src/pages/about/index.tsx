import Head from 'next/head'
import { Test } from '@/components/Test'

export default function Home() {
  return (
    <>
      <Head>
        <title>About page</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
				<h1>About page</h1>
				<Test/>
			</main>
        
    </>
  )
}
