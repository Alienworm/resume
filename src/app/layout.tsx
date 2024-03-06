"use client"

import React from "react";

import '../../styles/global.css';
import '../../styles/fontawesome/all.css';
import '../../styles/fontawesome/fontawesome.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ch">
      <body className="bg-text w-screen min-h-screen flex justify-center overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
