"use client"; 
// GLOBAL CUSTOM COMPONENT

import FlexBetween from "components/flex-box/flex-between"; 
// Local CUSTOM COMPONENT

import CountBox from "./count-box";
import useCountDown from "./useCountDown"; 
// ==============================================================


// ==============================================================
export default function Countdown({
  expireDate
}) {
  const {
    timeLeft
  } = useCountDown({
    expireDate
  });
  return <FlexBetween width="90%" height="auto">
      <CountBox digit={timeLeft.days} title="DAYS" />
      <CountBox digit={timeLeft.hours} title="HOURS" />
      <CountBox digit={timeLeft.minutes} title="MINS" />
      <CountBox digit={timeLeft.seconds} title="SECS" />
    </FlexBetween>;
}