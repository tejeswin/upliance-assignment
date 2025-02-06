import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichTextEditor = () => {
  // Load saved content or create empty editor
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem("richTextContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  // Handle text changes and save to localStorage
  const handleEditorChange = (state) => {
    setEditorState(state);
    const content = convertToRaw(state.getCurrentContent());
    localStorage.setItem("richTextContent", JSON.stringify(content));
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(96, 11, 69, 0.74)",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Rich Text Editor</h2>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        toolbar={{
          options: ["inline", "blockType", "list", "textAlign", "history"],
        }}
      />
    </div>
  );
};

export default RichTextEditor;
