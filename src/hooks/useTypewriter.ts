"use client";

import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, speed: number = 30, startDelay: number = 0) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayed("");
    setIsComplete(false);
    setIsStarted(false);
    indexRef.current = 0;

    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [text, startDelay]);

  useEffect(() => {
    if (!isStarted || isComplete) return;

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current >= text.length) {
        setDisplayed(text);
        setIsComplete(true);
        clearInterval(interval);
      } else {
        setDisplayed(text.slice(0, indexRef.current));
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isStarted, isComplete]);

  return { displayed, isComplete, isStarted };
}
