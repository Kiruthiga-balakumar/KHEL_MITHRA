const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function VideoUploader() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSelect = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
  };

  const upload = async () => {
    if (!file) return alert("Choose a video first.");
    const fd = new FormData();
    fd.append("file", file);

    try {
      setLoading(true);
      setProgress(0);

      const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
      const res = await axios.post(`${API}/upload-video/`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt) => {
          if (evt.total) {
            const p = Math.round((evt.loaded * 100) / evt.total);
            setProgress(p);
          }
        },
        timeout: 120000
      });

      navigate("/results", { state: { result: res.data } });
    } catch (err) {
      console.error(err);
      alert("Upload failed. Check backend or try smaller video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        accept="video/*"
        ref={inputRef}
        onChange={onSelect}
        style={{ display: "none" }}
      />
      <div className="flex gap-3 items-center">
        <button
          className="px-4 py-2 bg-accent text-white rounded-md shadow"
          onClick={() => inputRef.current && inputRef.current.click()}
        >
          Choose Video
        </button>
        <button
          className="px-4 py-2 bg-primary text-white rounded-md shadow disabled:opacity-60"
          onClick={upload}
          disabled={!file || loading}
        >
          {loading ? "Uploading..." : "Upload & Analyze"}
        </button>
      </div>

      {previewUrl && (
        <div className="bg-slate-50 border rounded p-2">
          <video className="w-full max-h-64 rounded" src={previewUrl} controls />
        </div>
      )}

      {loading && (
        <div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-accent h-2 rounded-full" style={{ width: `${progress}%` }} />
          </div>
          <div className="text-sm text-slate-600 mt-1">{progress}%</div>
        </div>
      )}
    </div>
  );
}
