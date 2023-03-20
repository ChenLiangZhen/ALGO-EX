"use client"

import './globals.css'
import React from "react";
import {Header} from "@/components/server-components/Header";
import {SortButton} from "@/components/server-components/SortButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="w-full h-full flex justify-center">

      <body className="max-w-[1200px] w-full h-full flex flex-col">

      <Header/>

      <div className="max-w-full mx-[10%] space-x-8 flex flex-1 flex-row">

         <div className="w-[25%] min-w-[150px] max-h-full flex flex-col items-start">

            <SortButton title="bubble sort" onClick={()=> {

            }}/>

            <SortButton title="selection sort" onClick={()=> {

            }}/>

            <SortButton title="insertion sort" onClick={()=> {

            }}/>

            <SortButton title="merge sort" onClick={()=> {

            }}/>

            <SortButton title="quick sort" onClick={()=> {

            }}/>

            <SortButton title="heap sort" onClick={()=> {

            }}/>

            <SortButton title="shell sort" onClick={()=> {

            }}/>

            <SortButton title="radix sort" onClick={()=> {

            }}/>
         </div>

         <div className="w-full h-full flex flex-col items-start">

            {children}

         </div>

      </div>
      </body>

    </html>
  )
}
