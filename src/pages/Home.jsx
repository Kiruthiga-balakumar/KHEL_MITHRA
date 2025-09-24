import React from "react";
import VideoUploader from "../components/VideoUploader";

export default function Home() {
  return (
    <div className="space-y-6">
      <header className="bg-white rounded-2xl shadow-sm p-6">
        <h1 className="text-2xl font-semibold">Khelmithra - Athlete Test</h1>
        <p className="text-slate-500 mt-1">
          Upload athlete videos to analyze pose & get results.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-medium mb-4">Upload Video</h2>
          <VideoUploader />
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-medium mb-4">How it works</h2>
          <ol className="list-decimal ml-5 text-slate-600">
            <li>Record a video of the athlete performing the move.</li>
            <li>Upload video from this page.</li>
            <li>Backend analyzes frames (MediaPipe / OpenCV).</li>
            <li>Results appear on the results page.</li>
          </ol>
        </div>
      </section>
    </div>
  );
}
