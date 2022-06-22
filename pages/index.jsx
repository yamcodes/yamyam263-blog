import Link from 'next/link';
import Head from 'next/head';
import Button from '../components/Button/fancyButton';

export default function Home({ toggleDarkmode, isDark }) {
  return (
    <>
      <Head>
        <title>@yamyam263 - hire experienced CS-grad software engineer today</title>
      </Head>
      <header className="border rounded-xl border-slate-100 dark:border-slate-800 p-4 mb-4 flex bg-white dark:bg-slate-700 shadow-sm">
        <img src="/images/linkedin.jpg" className="rounded-full object-cover w-12 h-12 mr-3" alt="Profile" />
        <section>
          <h2 className="font-bold text-sky-600 dark:text-sky-400">Yam Borodetsky</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Hi, I'm Yam!
          </p>
        </section>
      </header>
      <p>
        Yam Borodetsky is a software engineer. Click
        {' '}
        <Link href="/posts/first-post">here</Link>
        {' '}
        to go to his post.
      </p>
      <section className="flex items-center flex-col py-8">
        <Button className="transition-shadow hover:shadow-md active:shadow-lg font-semibold bg-gradient-to-tl from-purple-500 to-orange-500">Download Me!</Button>
        <div className="py-1" />
        <p className="max-w-xs text-sm text-center text-gray-400">(Disclaimer: nothing will happen by clicking the above button.)</p>
      </section>
    </>
  );
}
