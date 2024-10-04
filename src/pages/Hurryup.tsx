'use client'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const targetDate = new Date('2024-10-17T00:00:00').getTime();

export default function HurryUp() {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component only renders after mounting on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-[url('/audience.svg')] bg-cover bg-center bg-no-repeat backdrop:blur-md h-screen w-full">
      <div className="relative flex flex-col items-center justify-center h-screen">
      <h1 className="  w-[1127px] h-[105px] text-[48px] leading-[58.09px]  font-bold  text-center text-white mb-2 -mt-10 ">
  Hurry Up!
</h1>

        {isMounted ? (
          <Countdown
            date={targetDate}
            renderer={({ days, hours, minutes, seconds }) => {
              // Calculate weeks and remaining days
              const weeks = Math.floor(days / 7);

              return (
                <div className="grid grid-cols-5 gap-14 text-center bg-transparent">
                  <div className="flex flex-col items-center" aria-label="Weeks left">
                    <div className="mb-2 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-amber-500 p-2 shadow-lg">
                      <span className=" text-[76px] w-[170px] h-[105px] font-bold text-white leading-[91.98px] ">{weeks}</span>
                    </div>
                    <span className="text-sm font-semibold uppercase text-white drop-shadow-md">weeks</span>
                  </div>
                  <div className="flex flex-col items-center" aria-label="Days left">
                  <div className="mb-2 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-amber-500 p-2 shadow-lg">
                      <span className=" text-[76px] w-[170px] h-[105px] font-bold text-white leading-[91.98px]">{days}</span>
                    </div>
                    <span className="text-sm font-semibold uppercase text-white drop-shadow-md">days</span>
                  </div>
                  <div className="flex flex-col items-center" aria-label="Hours left">
                  <div className="mb-2 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-amber-500 p-2 shadow-lg">
                      <span className=" text-[76px] w-[170px] h-[105px] font-bold text-white leading-[91.98px]">{hours}</span>
                    </div>
                    <span className="text-sm font-semibold uppercase text-white drop-shadow-md">Hours</span>
                  </div>
                  <div className="flex flex-col items-center" aria-label="Minutes left">
                  <div className="mb-2 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-amber-500 p-2 shadow-lg">
                      <span className=" text-[76px] w-[170px] h-[105px] font-bold text-white leading-[91.98px]">{minutes}</span>
                    </div>
                    <span className="text-sm font-semibold uppercase text-white drop-shadow-md">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center" aria-label="Seconds left">
                  <div className="mb-2 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-lg bg-amber-500 p-2 shadow-lg">
                      <span className=" text-[76px] w-[170px] h-[105px] font-bold text-white leading-[91.98px]">{seconds}</span>
                    </div>
                    <span className="text-sm font-semibold uppercase text-white drop-shadow-md">Seconds</span>
                  </div>
                </div>
              );
            }}
          />
        ) : (
          <div>Loading...</div> // Placeholder to avoid hydration errors
        )}
      </div>
    </div>
  );
}
