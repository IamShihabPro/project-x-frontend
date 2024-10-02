"use client";

import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import './TextEditor.css'; // Import the custom CSS

const TextEditor = () => {
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike"],
        ["link", "image"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"], // Remove formatting button
      ],
    },
    placeholder: "What's happening?",
  });

  const [content, setContent] = useState("");
  const [submittedContent, setSubmittedContent] = useState("");

  // Sync Quill content with state
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setContent(quill.root.innerHTML); // Get the editor content as HTML
      });
    }
  }, [quill]);

  // Submit handler
  const handleSubmit = () => {
    console.log("Post submitted:", content);
    setSubmittedContent(removeHtmlTags(content)); // Store plain text content
    clearEditor();
  };

  // Function to remove HTML tags
  const removeHtmlTags = (html: string) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.innerText; // Return plain text
  };

  // Clear editor content
  const clearEditor = () => {
    if (quill) {
      quill.setText(""); // Clear the text in the editor
      setContent(""); // Clear the state content
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg p-4">
      {/* The Quill Editor */}
      <div ref={quillRef} className="text-white mt-2 rounded-md h-40" />
      
      {/* Buttons for submitting and clearing */}
      <div className="flex justify-between mt-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post
        </button>
        <button
          onClick={clearEditor}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>

      {/* Display the submitted content without HTML tags */}
      {submittedContent && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <h3 className="font-bold">Post Preview:</h3>
          <p>{submittedContent}</p>
        </div>
      )}
    </div>
  );
};

export default TextEditor;
