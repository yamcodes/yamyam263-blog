import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './layout.module.scss';

const name = 'Yam Borodetsky';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className="flex flex-col items-center">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="container">
        <Image
          priority
          src="/images/profile.png"
          height={144}
          width={144}
          className="w-14"
          alt={name}
        />
        <h6>{name}</h6>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.goBackHome}>
          <Link href="/">
            <a>← Go back home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
