"use client";
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
import Pill from "@/components/ui/pill";

export default function ColdEmailGenerator() {
  const [tone, setTone] = useState("professional");
  const [context, setContext] = useState("");
  const [email, setEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate(tone: String, context: String) {
    setIsGenerating(true);
    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
    );
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });
    const prompt = `Goal: Generate a compelling cold email for a job application.
Target Audience:
Recruiters
Hiring Managers
Startup Founders 
Software Engineers
Tone:${tone}
Content:${context}
Based on the content craft a solid, convincing and genuine cold email inspired from fusion of Steve Jobs and Jordan Belfort with sweet words. Do not include subject for the email.
Email should be short and consise
Output in text only do not give markdown code.
`;
    const result = (await model.generateContent(prompt)).response.text();
    setEmail(result);
    setIsGenerating(false);
  }

  return (
    <div className="flex max-w-5xl mx-auto flex-col justify-center min-h-screen py-2">
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 mt-4">
      <Pill text={"732 cold emails generated so far"} />
        <h1 className="sm:text-6xl text-4xl max-w-[608px] font-bold text-center m-4">
          AI Cold Email Generator
        </h1>
        <p className="m-4 font-medium">
          Craft the perfect job specific cold email with the power of AI ✨
        </p>
        <div className="mt-7"></div>

        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-3">
            <p className="text-left font-medium">1. What is the context?</p>
          </div>
          <textarea
            className="w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-black focus:ring-black my-5 p-4"
            placeholder={"Provide the context for your email here..."}
            onChange={(e) => {
              setContext(e.target.value);
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
            onClick={() => handleGenerate(tone, context)}
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>

          {email && (
            <div className="space-y-10 my-10 max-w-lg">
              <pre className="text-left text-wrap font-sans">{email}</pre>
              <Button
                onClick={(e) => {
                  navigator.clipboard.writeText(email);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 1500);
                }}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          )}
        </div>

        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      </main>
    </div>
  );
}
