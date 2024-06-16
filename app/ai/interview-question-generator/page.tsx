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
import ReactMarkdown from 'react-markdown';

export default function InterviewQuestionGenerator() {
  const [difficulty, setDifficulty] = useState("medium");
  const [jobDescription, setJobDescription] = useState("");
  const [questions, setQuestions] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate(difficulty: string, jobDescription: string) {
    setIsGenerating(true);
    const genAI = new GoogleGenerativeAI(
      process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
    );
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });
    const prompt = `Goal: Generate interview questions for a job role based on the job description.
Job Description: ${jobDescription}
If job description is not valid return "⚠️ Please provide a vaild job description"
Difficulty: ${difficulty}
Generate a set of questions and answers(that a skilled candidate would answer) that cover technical, behavioral, and situational aspects relevant to the role described. Ensure the questions are varied and appropriate for the specified difficulty level.
strictly follow following markdown template, and provide output (do not add any extra markdown keywords rest all should be plain text only use the provided format), question number can be as many as you can genarate :
# Interview Questions for [Job Title]
---
## Technical Questions

**Question1:**

**Answer:**
---
**Question2:**

**Answer:**

---

## Behavioral Questions

**Question1:**

**Answer:**
---
**Question2:**

**Answer:**

---

## Situational Questions

**Question1:**

**Answer:**
---
**Question2:**

**Answer:**

---  
`;
    const result = (await model.generateContent(prompt)).response.text();
    setQuestions(result);
    console.log(result)
    setIsGenerating(false);
  }

  return (
    <div className="flex max-w-5xl mx-auto flex-col justify-center min-h-screen py-2">
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 pb-12 mt-4">
        <Pill text={"732 interview question generated so far"} />
        <h1 className="sm:text-6xl text-4xl max-w-[608px] font-bold text-center m-4">
          🪄 AI Interview Question Generator
        </h1>
        <p className="m-4 font-medium">
          Generate the perfect interview questions for any role with the power of AI ✨
        </p>
        <div className="mt-7"></div>

        <div className="max-w-xl w-full">
          <div className="flex items-center space-x-3">
            <p className="text-left font-medium">
              1. What's the Job Description?
            </p>
          </div>
          <textarea
            className="w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-black focus:ring-black my-5 p-4"
            placeholder={"Provide the job description here..."}
            onChange={(e) => {
              setJobDescription(e.target.value);
            }}
          />
          <div className="flex mb-5 items-center space-x-3">
            <p className="text-left font-medium">2. Select difficulty level.</p>
            <Select
              defaultValue={"medium"}
              onValueChange={(value) => {
                setDifficulty(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Medium" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full"
            disabled={isGenerating}
            onClick={() => handleGenerate(difficulty, jobDescription)}
          >
            {isGenerating ? "Generating..." : "Generate"}
          </Button>

          {questions && (
            <div className="space-y-10 my-10 max-w-lg">
              <div className="text-left">
                <ReactMarkdown className={"markdown"}>{questions}</ReactMarkdown>
              </div>            
            </div>
          )}
        </div>

        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
      </main>
    </div>
  );
}
