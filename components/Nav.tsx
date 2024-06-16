import React from 'react'
import { Tabs } from './ui/tabs'

const Nav = () => {
    
    const tabs = [
        {
          title: "Home",
          value: "/",
          href: "/"
        },
        {
          title: "AI Cold Email",
          value: "/ai/cold-email-generator",
          href: "/ai/cold-email-generator"
        },
        {
          title: "AI Cover Letter",
          value: "/ai/cover-letter-generator",
          href: "/ai/cover-letter-generator"
        },
        {
          title: "AI Interview Questions",
          value: "/ai/interview-question-generator",
          href: "/ai/interview-question-generator"
        },
              
      ];
     
      return (
        <div className="sticky top-2 z-50 flex items-center justify-center m-2">
          <div className='dark:bg-black/80 bg-white/80 p-2 rounded-full'>
          <Tabs tabs={tabs} />
          </div>
        </div>
      );
    }
export default Nav