import React from 'react'
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const DashboardHome = () => {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <div>Dashboard home</div>
  )
}

export default DashboardHome