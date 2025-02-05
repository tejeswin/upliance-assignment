import React from "react";
import Counter from "./components/Counter";
import UserDataForm from "./components/UserDataForm";
import RichTextEditor from "./components/RichTextEditor";
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="top-section">
        <Counter />
        <RichTextEditor />
      </div>
      <div className="bottom-section">
        <UserDataForm />
      </div>
    </div>
  );
}


export default App;
