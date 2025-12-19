import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = ({ pageUrl }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [isVisible, setIsVisible] = useState(() => {
    // Initialize from localStorage or default to true (open)
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem('chatbotVisibility');
      return savedState ? JSON.parse(savedState) : true;
    }
    return true;
  });
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  // Function to get selected text
  useEffect(() => {
    const handleSelection = () => {
      const text = window.getSelection().toString().trim();
      setSelectedText(text);
    };

    document.addEventListener('selectionchange', handleSelection);
    document.addEventListener('mouseup', handleSelection);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
      document.removeEventListener('mouseup', handleSelection);
    };
  }, []);

  // Effect to save visibility state to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('chatbotVisibility', JSON.stringify(isVisible));
    }
  }, [isVisible]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Functions to handle toggle
  const openChatbot = () => setIsVisible(true);
  const closeChatbot = () => setIsVisible(false);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Add user message to chat
    const userMessage = { type: 'user', content: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    try {
      // Prepare the request body
      const requestBody = {
        query: currentInput,
        selected_text: selectedText || null
      };

      // Call the backend API
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add bot response to chat
      const botMessage = {
        type: 'bot',
        content: data.answer,
        sources: data.source_urls,
        passages: data.supporting_passages,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = {
        type: 'bot',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const askAboutSelection = () => {
    if (!selectedText) return;

    setInputValue(`Ask about selection: ${selectedText.substring(0, 100)}...`);
    textareaRef.current?.focus();
  };

  return (
    <>
      {isVisible ? (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>AI Assistant</h3>
            <button
              onClick={closeChatbot}
              className="close-button"
              aria-label="Close chatbot"
              title="Close chatbot"
            >
              ×
            </button>
            {selectedText && (
              <div className="selected-text-preview">
                <p><strong>Selected text:</strong> "{selectedText.substring(0, 80)}{selectedText.length > 80 ? '...' : ''}"</p>
                <button onClick={askAboutSelection} className="ask-about-selection-btn">
                  Ask about selection
                </button>
              </div>
            )}
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 ? (
              <div className="welcome-message">
                <p>Hello! I'm your AI assistant for the AI-Humanoid-Robotics book. Ask me anything about the content!</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className={`message ${message.type}`}>
                  <div className="message-content">
                    {message.type === 'bot' && message.passages && message.passages.length > 0 && (
                      <details className="supporting-passages">
                        <summary>Supporting passages ({message.passages.length})</summary>
                        <ul>
                          {message.passages.map((passage, idx) => (
                            <li key={idx} className="passage-item">
                              "{passage.substring(0, 200)}{passage.length > 200 ? '...' : ''}"
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
                    <p>{message.content}</p>
                    {message.type === 'bot' && message.sources && message.sources.length > 0 && (
                      <div className="sources">
                        <strong>Sources:</strong>
                        <ul>
                          {message.sources.map((url, idx) => {
                            // Extract a more readable title from the URL
                            const path = new URL(url).pathname.replace('/docs/', '').replace('/', ' > ');
                            const title = path || 'Home';
                            // Convert kebab-case or snake_case to readable text
                            const readableTitle = title
                              .replace(/-/g, ' ')
                              .replace(/_/g, ' ')
                              .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letter of each word
                            return (
                              <li key={idx}>
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                  {readableTitle}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="message bot">
                <div className="message-content">
                  <p>Thinking...</p>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-area">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask a question about this book..."
              rows="3"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={!inputValue.trim() || isLoading}
              className="send-button"
            >
              {isLoading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={openChatbot}
          className="open-button"
          aria-label="Open chatbot"
          title="Open chatbot"
        >
          💬
        </button>
      )}
    </>
  );
};

export default Chatbot;