import { useState } from "react";
import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`function sum() {
  return a + b;
}`);
  const [review, setReview] = useState("");

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
      setReview(response.data?.review || "No review available.");
    } catch (error) {
      setReview("Failed to fetch review.");
    }
  }

  return (
    <div className="container">
      {/* Logo Header */}
      <header className="logo-header">
        <h1 className="logo-text">
          <span className="highlight">CodeX</span>Review
        </h1>
      </header>

      {/* Main Content */}
      <main className="content">
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) => Prism.highlight(code, Prism.languages.jsx, "jsx")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 14,
                borderRadius: "8px",
                minHeight: "150px",
                color: "#fff",
              }}
            />
          </div>

          <button className="review-btn" onClick={reviewCode}>Review</button>
        </div>

        <div className="right">
          <h2>Code Review</h2>
          <div className="review-box">
            <pre>{review}</pre>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
