# Data Model: Chatbox Toggle Functionality

## Entities

### Chatbox Visibility State
- **Type**: Boolean
- **Default**: true (open)
- **Persistence**: localStorage with key 'chatbotVisibility'
- **Validation**: Must be boolean value
- **Description**: Represents whether the chatbox is currently open (true) or closed (false)

### Toggle Button State
- **Type**: Object
- **Properties**:
  - isVisible: Boolean (current visibility state)
  - ariaLabel: String (accessibility label)
  - title: String (tooltip text)
- **Validation**: All properties required
- **Description**: Represents the UI state of the toggle buttons

## State Transitions

### Open to Closed
- **Trigger**: User clicks close button
- **Action**: Set visibility state to false
- **Effect**: Chatbox UI hidden, open button becomes visible

### Closed to Open
- **Trigger**: User clicks open button
- **Action**: Set visibility state to true
- **Effect**: Chatbox UI becomes visible, close button appears in header

## Constraints
- State must be persisted to localStorage on every change
- State must be initialized from localStorage on component mount
- Default state is open if no localStorage value exists