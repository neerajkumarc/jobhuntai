"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [tone, setTone] = useState("professional");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate(tone: String, subject: String) {
    setIsGenerating(true);
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const prompt = `Goal: Generate a compelling cold email for a job application.
Target Audience:
Recruiters
Hiring Managers
Startup Founders 
Software Engineers
Tone:${tone}
Content:${subject}
Based on the content Generate a cold email (it should be easy to read with multiple lines break), about the content. Do not include subject.
Email should be short and consise
Output in text only do not give markdown code.
`;
    const result = (await model.generateContent(prompt)).response.text();
    setEmail(result);
    setIsGenerating(false);
  }

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out">
          <b>237</b> cold emails generated so far
        </p>
        <h1 className="sm:text-6xl text-4xl max-w-[608px] font-bold text-slate-900 text-center">
          AI Cold Email Generator
        </h1>
        <p className="m-4 font-medium">Craft the perfect job specific cold email with the power of AI ✨</p>
        <div className="mt-7"></div>

        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-3">
            <p className="text-left font-medium">
              1. What is the subject?
            </p>
          </div>
          <textarea
            className="w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-black focus:ring-black my-5 p-4"
            placeholder={'I am reaching out to express my interest in...'}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <div className="flex mb-5 items-center space-x-3">
            <p className="text-left font-medium">2. Select your tone.</p>
            <Select
              defaultValue={"professional"}
              onValueChange={(value) => {
                setTone(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Professional" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full"
            disabled={isGenerating}
            onClick={() => handleGenerate(tone, subject)}
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>

          {email && (
            <div className="space-y-10 my-10 max-w-lg">
              <pre className="text-left text-wrap font-sans">{email}</pre>
              <Button
                onClick={(e) => {
                  navigator.clipboard.writeText(email);
                  setCopied(true)
                  setTimeout(()=>{setCopied(false)}, 1500);
                }}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          )}
        </div>

        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      </main>
      <Footer />
    </div>
  );
}