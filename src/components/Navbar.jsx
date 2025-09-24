import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">
          Khelmithra
        </Link>
        <div className="flex gap-3">
          <Link
            to="/"
            className="px-3 py-1 rounded hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            to="/results"
            className="px-3 py-1 rounded hover:bg-slate-100"
          >
            Results
          </Link>
        </div>
      </div>
    </nav>
  );
}
