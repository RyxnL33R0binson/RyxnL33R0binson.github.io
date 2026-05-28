import React from "react";

export default function TourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="py w-1/2 bg-slate-500 rounded mb-4">
        <h1 className="text-3xl font-bold mb-4">Nested Layout</h1>
      </header>
      {children}
    </div>
  );
}
