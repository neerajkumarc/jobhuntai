"use client"
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Footer = () => {
  return (
    <footer className='flex-grow-0 bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200'>
          <div className='pb-8'>
            <div className='flex justify-center'>
              {/* Todo: add icon */}
            </div>
          </div>

          <div>
            <div className='relative flex items-center p-6 sm:py-8 lg:mt-0'>
              <div className='text-center relative mx-auto max-w-sm'>
                <h3 className='font-semibold dark:text-neutral-200'>
                  Boost Your Job Hunt with Jobhunt.ai
                </h3>
                <p className='mt-2 text-sm text-muted-foreground'>
                  Utilize AI-powered tools for cold emails, cover letters, and interview questions to streamline your job hunting process.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='py-8 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            {/* <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground dark:hover:text-neutral-200 hover:text-neutral-950'>
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground dark:hover:text-neutral-200 hover:text-neutral-950'>
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground dark:hover:text-neutral-200 hover:text-neutral-950'>
                Cookie Policy
              </Link>
            </div> */}
            <div className='m-2'><ThemeToggle/></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;