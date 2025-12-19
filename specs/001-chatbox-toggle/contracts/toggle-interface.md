# Interface Contract: Chatbox Toggle

## Component Interface

### Chatbot Component Props
```javascript
{
  pageUrl: string  // Current page URL passed from layout
}
```

### State Interface
```javascript
{
  isVisible: boolean,      // Current visibility state of chatbox
  messages: array,         // Chat messages array
  inputValue: string,      // Current input value
  isLoading: boolean,      // Loading state
  selectedText: string     // Currently selected text
}
```

### Function Interface
```javascript
openChatbot(): void        // Set isVisible to true
closeChatbot(): void       // Set isVisible to false
sendMessage(): Promise     // Send message to backend API
```

## Event Interface

### Toggle Events
- `onVisibilityChange`: Emitted when visibility state changes
  - Payload: `{ isVisible: boolean }`

### Storage Events
- `onStatePersisted`: Emitted when state is saved to localStorage
  - Payload: `{ key: 'chatbotVisibility', value: boolean }`

## Accessibility Interface
- `aria-expanded`: Indicates expanded/collapsed state of chatbox
- `aria-label`: Descriptive labels for toggle buttons
- Keyboard support: Enter/Space to activate toggle buttons

## CSS Interface
- `.chatbot-container`: Main container (visible when open)
- `.open-button`: Circular button (visible when closed)
- `.close-button`: Header button (visible when open)