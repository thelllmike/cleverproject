"use client";


import '../styles/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Zeyada&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
