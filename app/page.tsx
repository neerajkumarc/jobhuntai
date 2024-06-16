"use client"

import Pill from "@/components/ui/pill";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useRouter } from "next/navigation";
import { Tabs } from "@/components/ui/tabs";
export default function Home() {
  const router = useRouter()
  return (
    <>
      <MaxWidthWrapper className='mb-12 mt-24 sm:mt-36 flex flex-col items-center justify-center text-center'>
        <section>
          <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
            <Pill text={"Boost Your Job Hunt with AI Tools ✨"} />
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r dark:from-neutral-400 dark:via-neutral-200 dark:to-neutral-400 from-neutral-950 via-neutral-800 to-neutral-950"> AI-Powered Job Hunting Tools</h1>
            <p className="dark:text-neutral-400 text-neutral-500 md:text-lg text-sm text-wrap max-w-[80%]">Supercharge your job search with our AI tools. Create perfect cold emails, cover letters, and prepare for interviews effortlessly.</p>
          </div>
        </section>
      </MaxWidthWrapper>

      <section>
        <div>
          <div className='relative isolate'>
            <div>
              <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                <div className='flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <Image
                      src='/job-tools-preview.png'
                      alt='product preview'
                      width={1451}
                      height={817}
                      quality={100}
                      className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature section */}
      <section className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl dark:text-neutral-200 text-neutral-950 sm:text-5xl'>
              Your Job Search, Simplified
            </h2>
            <p className='mt-4 text-lg dark:text-neutral-400 text-neutral-500'>
              Use our AI tools to enhance every step of your job hunting process.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 p-6 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium underline underline-offset-2'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Start Your Job Search
              </span>
              <span className='mt-2 dark:text-neutral-400 text-neutral-500'>
                Explore job listings and find opportunities that match your skills and interests.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium underline underline-offset-2'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Utilize AI Tools
              </span>
              <span className='mt-2 dark:text-neutral-400 text-neutral-500'>
                Generate personalized cold emails, cover letters, and interview questions.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium underline underline-offset-2'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Land Your Dream Job
              </span>
              <span className='mt-2 dark:text-neutral-400 text-neutral-500'>
                Apply with confidence and secure your desired position.
              </span>
            </div>
          </li>
        </ol>


        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/ai-tools-preview.png'
                alt='AI tools preview'
                width={1523}
                height={793}
                quality={100}
                className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl dark:text-neutral-200 text-neutral-950 sm:text-5xl'>
              Boost Your Job Hunt with AI
            </h2>
            <p className='mt-4 text-lg dark:text-neutral-400 text-neutral-500'>
              Leverage the power of AI to streamline your job search and stand out from the crowd.
            </p>
          </div>
          <div className="md:flex justify-between gap-8 mt-6">
            <div className="w-full dark:bg-zinc-800 dark:text-white bg-zinc-200 p-6 rounded-2xl text-center my-4">
              <div className="text-2xl sm:text-5xl font-bold flex gap-2"><div className="h-12 w-12 bg-green-500 rounded-full text-xl flex items-center justify-center">📈</div>85%</div>
              <p className="p-2">increase in response rates with AI-generated cold emails</p>
            </div>
            <div className="w-full dark:bg-zinc-800 dark:text-white bg-zinc-200 p-6 rounded-2xl text-center my-4">
              <div className="text-2xl sm:text-5xl font-bold flex gap-2"><div className="h-12 w-12 bg-green-500 rounded-full text-xl flex items-center justify-center">📈</div>70%</div>
              <p className="p-2">of users land interviews faster using our cover letter generator</p>
            </div>
            <div className="w-full dark:bg-zinc-800 dark:text-white bg-zinc-200 p-6 rounded-2xl text-center my-4">
              <div className="text-2xl sm:text-5xl font-bold flex gap-2"><div className="h-12 w-12 bg-green-500 rounded-full text-xl flex items-center justify-center">📈</div>50%</div>
              <p className="p-2">more likely to secure a job with AI-driven interview preparation</p>
            </div>
          </div>

          <div className="w-full dark:bg-zinc-800 dark:text-white bg-zinc-200 p-6 rounded-2xl text-center my-4">
            <div className="text-2xl sm:text-5xl font-bold justify-center gap-2"><div className="h-12 w-12 bg-green-500 rounded-full text-xl flex items-center justify-center">📈</div>60%</div>
            <p className="p-2">more job offers received using AI-enhanced applications</p>
          </div>
        </div>
      </section>
    </>
  );
}
