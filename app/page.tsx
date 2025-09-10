"use client";
import Link from "next/link";
import "./globals.css";

export default function HomePage() {
  return (
    <main>
      <div className="box">
        <h1>Rick and Morty App</h1>
        <p>Pick something to check:</p>

        <div className="btns">
          <Link href="/characters">
            <button>Characters</button>
          </Link>
          <Link href="/manage/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
      </div>
    </main>
  );
}
