"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypeWriterComp({ list }: { list: string[] }) {
  return <Typewriter words={list} typeSpeed={5} />;
}
