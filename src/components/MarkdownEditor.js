
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Hello, Markdown!");
  const [preview, setPreview] = useState("");

  // Update preview when markdown changes
  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  return (
    <div className="editor-container">
      {/* Markdown Input */}
      <div className="editor">
        <h2 className="section-title">Editor</h2>
        <textarea
          className="markdown-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
      </div>

      {/* Live Preview */}
      <div className="preview">
        <h2 className="section-title">Preview</h2>
        <div className="markdown-preview">
          <ReactMarkdown>{preview}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default MarkdownEditor;
