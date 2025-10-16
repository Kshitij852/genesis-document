"use client";

import { Button } from "@atomos_tech/genesis";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-flow"></div>

        {/* Pulsing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-300/30 rounded-full animate-pulse-orb"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200/25 to-pink-300/25 rounded-full animate-pulse-orb animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full animate-pulse-orb animation-delay-4000"></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-blue-300/30 rounded-lg animate-float-3d animation-delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-purple-300/40 rounded-full animate-float-3d animation-delay-3000"></div>
        <div className="absolute top-40 left-40 w-20 h-20 border-2 border-indigo-300/25 rotate-45 animate-float-3d animation-delay-5000"></div>
        <div className="absolute bottom-20 right-40 w-14 h-14 border-2 border-pink-300/35 rotate-12 animate-float-3d animation-delay-7000"></div>

        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-scan-line"></div>
        <div className="absolute top-1/3 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-vertical-scan animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-1 h-24 bg-gradient-to-t from-transparent via-indigo-400/15 to-transparent animate-vertical-scan animation-delay-4000"></div>

        {/* Floating Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white/40 rounded-full animate-particle-${i % 5}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        {/* Wavy Gradient Lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-10 animate-wave-lines"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mt-16 text-center">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-md animate-fade-in">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Now live in v1.0 – Start building effortlessly
        </div> */}

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight animate-slide-up">
          Craft stunning interfaces with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Genesis
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto mb-10 leading-relaxed animate-slide-up animation-delay-200">
          A modern component library for React and Next.js, built for speed,
          accessibility, and elegance. Import, customize, and ship beautiful
          interfaces in no time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-slide-up animation-delay-400">
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Link href="/components/overview">Get Started</Link>
              <svg
                className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Button>

          <Button
            variant="outlined"
            size="lg"
            className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            <Link
              href="https://github.com/Kshitij852/genesis-document"
              target="_blank"
            >
              Explore on GitHub
            </Link>
          </Button>
        </div>

        {/* Quick Start */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-white/20 mb-20 animate-fade-in animation-delay-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quick Start
          </h2>
          <p className="text-gray-600 mb-4">
            Get Genesis running in your React or Next.js project instantly:
          </p>
          <pre className="bg-gray-900 text-green-400 text-sm md:text-base p-4 rounded-lg text-left overflow-x-auto font-mono shadow-inner">
            <code>npm i @atomos_tech/genesis</code>
          </pre>
          <p className="text-gray-600 mt-4">
            Or with Yarn:
            <br />
            <code className="bg-gray-100 px-2 py-1 rounded-md text-sm text-gray-800">
              yarn add @atomos_tech/genesis
            </code>
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes grid-flow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        @keyframes pulse-orb {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
        }

        @keyframes float-3d {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-20px) rotate(90deg) scale(1.1);
          }
          50% {
            transform: translateY(-40px) rotate(180deg) scale(1.2);
          }
          75% {
            transform: translateY(-20px) rotate(270deg) scale(1.1);
          }
        }

        @keyframes scan-line {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes vertical-scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes particle-0 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes particle-1 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(-20px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes particle-2 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-25px) translateX(15px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes particle-3 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes particle-4 {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-35px) translateX(25px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }

        @keyframes wave-lines {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
        }
        .animate-pulse-orb {
          animation: pulse-orb 8s ease-in-out infinite;
        }
        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }
        .animate-scan-line {
          animation: scan-line 4s linear infinite;
        }
        .animate-vertical-scan {
          animation: vertical-scan 6s linear infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-wave-lines {
          animation: wave-lines 20s linear infinite;
        }
        .animate-particle-0 {
          animation: particle-0 infinite ease-in-out;
        }
        .animate-particle-1 {
          animation: particle-1 infinite ease-in-out;
        }
        .animate-particle-2 {
          animation: particle-2 infinite ease-in-out;
        }
        .animate-particle-3 {
          animation: particle-3 infinite ease-in-out;
        }
        .animate-particle-4 {
          animation: particle-4 infinite ease-in-out;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
        .animation-delay-7000 {
          animation-delay: 7s;
        }
      `}</style>
    </div>
  );
};

export default Home;
