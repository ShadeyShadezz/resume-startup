import { useState } from "react";
import "./AICareerAdvisor.css";

export default function AICareerAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

  const getMessage = async () => {
    if (!input.trim()) return;
    if (!API_KEY) {
      setError("API key not configured. Add VITE_OPENAI_API_KEY to .env");
      return;
    }

    setIsLoading(true);
    setError("");

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-nano",
        messages: [
          {
            role: "user",
            content: input + " Within 30-70 words",
          },
        ],
      }),
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        options
      );
      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
        setOutput("");
      } else {
        const content = data.choices[0].message.content;
        setOutput(content);

        // Add to history
        setHistory([
          ...history,
          {
            id: Date.now(),
            question: input,
            answer: content,
          },
        ]);
        setInput("");
      }
    } catch (e) {
      setError("Failed to fetch response: " + e.message);
      setOutput("");
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setOutput("");
    setInput("");
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading) {
      getMessage();
    }
  };

  return (
    <div className="ai-advisor-container">
      <button
        className="ai-advisor-toggle"
        onClick={() => setIsOpen(!isOpen)}
        title="AI Career Advisor"
      >
        🤖 Career Advisor
      </button>

      {isOpen && (
        <div className="ai-advisor-submenu">
          <div className="ai-advisor-header">
            <h3>AI Career Advisor</h3>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div className="ai-advisor-content">
            {/* Chat Display Area - Fixed */}
            <div className="chat-display-area">
              {/* Error Display */}
              {error && <div className="error-message">{error}</div>}

              {/* History Section - Main Content */}
              {history.length > 0 ? (
                <div className="history-section">
                  <div className="history-list">
                    {history.map((item) => (
                      <div key={item.id} className="history-item">
                        <p className="history-q">Q: {item.question}</p>
                        <p className="history-a">A: {item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="empty-state">
                  <p>No conversation yet. Ask a career question to get started!</p>
                </div>
              )}

              {/* Current Output Display */}
              {output && !history.some(h => h.answer === output) && (
                <div className="output-section">
                  <strong>Latest Response:</strong>
                  <p>{output}</p>
                </div>
              )}
            </div>

            {/* Input Section - Fixed at Bottom */}
            <div className="input-section">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about career paths, skills, or job advice..."
                disabled={isLoading}
                className="advisor-input"
              />
              <button
                onClick={getMessage}
                disabled={isLoading || !input.trim()}
                className="submit-btn"
              >
                {isLoading ? "Thinking..." : "Ask"}
              </button>
            </div>

            {/* Clear Button */}
            {(output || history.length > 0) && (
              <button onClick={clearAll} className="clear-btn">
                Clear All
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}