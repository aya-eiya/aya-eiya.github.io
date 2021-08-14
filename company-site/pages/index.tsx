import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="m-auto">
      <Head>
        <title>AY合同会社</title>
        <meta name="description" content="AY合同会社 公式サイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-full md:max-w-7xl m-auto flex flex-col">
        <h1 className="text-xl flex-auto">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing <code className="">pages/index.js</code>
        </p>

        <div className="grid grid-cols-2 gap-2">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </main>

      <footer className="mt-4 bg-gray-300 p-3">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="w-9 h-9">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
