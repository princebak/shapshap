"use client";

import { useCallback, useEffect, useState } from "react";
const initialState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}; 
// ==============================================================


// ==============================================================
export default function useCountDown({
  expireDate
}) {
  const [timeLeft, setTimeLeft] = useState(initialState);
  const calculateTimeLeft = useCallback(() => {
    const distance = expireDate - new Date().getTime(); 
// if date expire

    if (distance < 0) return initialState;
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
      seconds: Math.floor(distance % (1000 * 60) / 1000)
    };
  }, [expireDate]);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);
  return {
    timeLeft
  };
}