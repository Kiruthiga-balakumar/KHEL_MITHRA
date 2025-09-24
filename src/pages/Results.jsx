import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Results() {
  const { state } = useLocation();
  const data = state?.result || null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold">Analysis Results</h2>
        {!data && (
          <div className="mt-4 text-slate-600">
            No results yet. Upload a video from the{" "}
            <Link to="/" className="text-accent underline">
              home page
            </Link>
            .
          </div>
        )}

        {data && (
          <pre className="mt-4 bg-slate-100 p-4 rounded break-words text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
