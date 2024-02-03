"use client";
import { useParams } from "next/navigation";
import React from "react";

export default function PostPage() {
  const params = useParams();
  // console.log(params);

  return <main className="container">PostPage {params.postId}</main>;
}
