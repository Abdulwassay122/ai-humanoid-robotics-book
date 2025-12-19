# Test script for RAG chatbot API
import requests
import json

# Test the chat endpoint
def test_chat():
    url = "http://localhost:8000/chat"

    # Test data
    payload = {
        "query": "What is physical AI?",
        "selected_text": None
    }

    try:
        response = requests.post(url, json=payload)
        print(f"Status Code: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"Response: {json.dumps(data, indent=2)}")
        else:
            print(f"Error: {response.text}")
    except Exception as e:
        print(f"Exception occurred: {e}")
        print("Make sure the FastAPI server is running on http://localhost:8000")

# Test the health endpoint
def test_health():
    url = "http://localhost:8000/health"

    try:
        response = requests.get(url)
        print(f"Health Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"Health Response: {data}")
    except Exception as e:
        print(f"Health check failed: {e}")

if __name__ == "__main__":
    print("Testing RAG Chatbot API...")
    print("\n--- Health Check ---")
    test_health()
    print("\n--- Chat Test ---")
    test_chat()