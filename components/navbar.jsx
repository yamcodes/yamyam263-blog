import Link from 'next/link';
import { Switch } from '@headlessui/react';
import Button from './Button/button';

export default function Navbar({ className, toggleDarkmode, isDark }) {
  return (
    <header
      className={` shadow-sm
      h-14 sticky top-0 z-40 w-full flex-none backdrop-blur border-b grid grid-cols-5 xl:grid-cols-12 border-slate-200 dark:border-slate-800 ${className}`}
    >
      <div className="col-span-5 px-8 xl:px-0 xl:col-start-2 xl:col-span-10 flex items-center justify-between">

        <h1 className="text-black font-bold dark:text-white"><Link href="/">@yamyam263</Link></h1>
        <div className="flex">
          <Switch
            checked={isDark}
            onChange={toggleDarkmode}
            className="bg-sky-400 hover:bg-sky-500 hover:dark:bg-blue-800 dark:bg-blue-900 select-none relative inline-flex h-6 w-11 items-center shadow-inner rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
          >
            <div
              className="text-yellow-100 text--300 translate-x-1 dark:translate-x-6 inline-block h-4 w-4 transform rounded-full transition-transform "
            >
              {isDark ? (
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>

                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              )}

            </div>
          </Switch>
        </div>
      </div>
    </header>
  );
}
