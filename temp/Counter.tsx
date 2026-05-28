"use client";
import React, { useState } from "react";

/****Client Component
 * This is the client component for the counter page. The client componet allows us to
 * use state and other React features that are not available in server components.
 *
 * We must remember to use "use client" at the top of the file to indicate that this is a client component.
 */

export default function CounterPage() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <main>
        <div className="aspect-3/2">
          <h1>{count}</h1>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 1)}
          />
          <button
            className="btn"
            onClick={() => setCount((current) => current - 1)}
          />
        </div>
      </main>
    </>
  );
}
