"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Logout from "./Logout";



export default function Header() {
  const pathname = usePathname()
  const links = [
    { text: "MY DASHBOARD", href: "/dashboard" },
    { text: "AI COVER LETTER", href: "/dashboard/cover-letter-generator" },
    { text: "AI COLD EMAIL", href: "/dashboard/cold-email-generator" },
    { text: "AI INTERVIEW", href: "/dashboard/create-resume" },
  ];
  return (
    <nav className="sticky left-0 top-0 h-screen lg:w-[20vw] flex flex-col p-5 gap-4 border border-black">
      <span className="text-3xl font-bold">ResuMate</span>
      <Link href="/create-resume">
        <Button className="w-full py-2">CREATE NEW RESUME</Button>
      </Link>
      <ul className="w-full flex flex-col items-start justify-start gap-4 py-2">
        {links.map((link) => (
          <li className={`w-full px-2 py-1 hover:bg-gray-300 p-2 rounded-md ${pathname==link.href && "bg-gray-300"}`} key={link.text}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
        
      </ul>
      <Logout />
    </nav>
  );
}
