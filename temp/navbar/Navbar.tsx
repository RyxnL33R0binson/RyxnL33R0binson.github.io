import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm pl-5 pr-5">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Faith in Action
          </Link>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <Link href="/" className="bg-base-100 rounded-t-none p-2">
              Home
            </Link>
            <Link
              href="/about/what-we-do"
              className="bg-base-100 rounded-t-none p-2"
            >
              About us
            </Link>
            <Link href="/contact" className="bg-base-100 rounded-t-none p-2">
              Contact us
            </Link>
            <Link href="/news" className="bg-base-100 rounded-t-none p-2">
              News
            </Link>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
