import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-amber-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 AkaMateus. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> build with
        React & Next.js (App Router & Server Actions).
      </p>
    </footer>
  );
}
