---
description: "Task list for RAG-powered chatbot implementation"
---

# Tasks: RAG-Powered Chatbot for Docusaurus Book

**Input**: Design documents from `/specs/002-rag-chatbot/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Backend**: `RAG/` directory with FastAPI implementation
- **Frontend**: `Docusauras-Book/src/components/Chatbot/` for React components
- **Models**: `RAG/models/` for Pydantic models
- **API**: `RAG/api/` for API endpoints

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Create RAG directory structure with models, api, and requirements.txt
- [X] T002 Initialize Python project with FastAPI, Cohere, Qdrant dependencies
- [X] T003 [P] Configure environment variables and .env.example file
- [X] T004 Set up Docusauras-Book/src/components/Chatbot directory for React components

---
## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T005 Create core Pydantic models for chat requests/responses in RAG/models/chat.py
- [X] T006 [P] Create document models in RAG/models/document.py
- [X] T007 Set up FastAPI application with CORS in RAG/main.py
- [X] T008 Configure Cohere client and Qdrant connection in RAG/main.py
- [X] T009 Implement embedding function and retrieval tool in RAG/main.py
- [X] T010 Create AI agent with RAG instructions in RAG/main.py
- [X] T011 [P] Set up Docusaurus Layout wrapper in Docusauras-Book/src/theme/Layout/index.js

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---
## Phase 3: User Story 1 - Ask Questions About Book Content (Priority: P1) 🎯 MVP

**Goal**: Enable users to ask questions about book content and receive grounded responses with citations

**Independent Test**: Can be fully tested by asking various questions about the book content and verifying that responses are accurate, relevant to the book material, and include proper citations to source pages.

### Implementation for User Story 1

- [X] T012 [P] [US1] Implement chat endpoint in RAG/main.py with query handling
- [X] T013 [P] [US1] Create React Chatbot component in Docusauras-Book/src/components/Chatbot/Chatbot.jsx
- [X] T014 [US1] Add chat interface UI with message history in Chatbot.jsx
- [X] T015 [US1] Implement API call functionality in Chatbot.jsx to connect to backend
- [X] T016 [US1] Add proper error handling for chat responses in Chatbot.jsx
- [X] T017 [US1] Implement citation display for source URLs in Chatbot.jsx
- [X] T018 [US1] Add "This information is not available in the book" response handling
- [X] T019 [US1] Add supporting passages display in Chatbot.jsx

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---
## Phase 4: User Story 2 - Ask Questions About Selected Text (Priority: P2)

**Goal**: Enable users to select text on a book page and ask questions specifically about that selection to get focused answers

**Independent Test**: Can be fully tested by selecting text on book pages, asking questions about the selection, and verifying that responses are restricted to information related to the selected text.

### Implementation for User Story 2

- [X] T020 [P] [US2] Implement selected text detection in Chatbot.jsx
- [X] T021 [US2] Add "Ask about selection" button functionality in Chatbot.jsx
- [X] T022 [US2] Modify chat endpoint to handle selected_text parameter in RAG/main.py
- [X] T023 [US2] Update AI agent to prioritize selected text context in RAG/main.py
- [X] T024 [US2] Add selected text preview display in Chatbot.jsx
- [X] T025 [US2] Implement context restriction to selected text in retrieval logic

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---
## Phase 5: User Story 3 - View Source Citations (Priority: P3)

**Goal**: Enable users to see citations for information provided by the chatbot to verify sources and navigate to relevant book pages

**Independent Test**: Can be fully tested by asking various questions and verifying that each response includes proper citations with links to the source pages.

### Implementation for User Story 3

- [X] T026 [P] [US3] Enhance citation display with better formatting in Chatbot.jsx
- [X] T027 [US3] Add clickable source links in Chatbot.jsx that open in new tab
- [X] T028 [US3] Implement supporting passages details/expand functionality in Chatbot.jsx
- [X] T029 [US3] Add source page title extraction and display in Chatbot.jsx
- [X] T030 [US3] Ensure all responses include proper citations from retrieved data

**Checkpoint**: All user stories should now be independently functional

---
## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T031 [P] Add rate limiting to chat endpoint in RAG/main.py
- [X] T032 [P] Implement input sanitization for user queries in RAG/main.py
- [X] T033 Add ingestion endpoint to trigger sitemap indexing in RAG/main.py
- [X] T034 Implement proper logging throughout the application
- [X] T035 [P] Add CSS styling for chatbot component in Docusauras-Book/src/components/Chatbot/Chatbot.css
- [X] T036 Add README documentation with setup instructions
- [X] T037 Create test script for API validation in RAG/test_api.py
- [X] T038 Performance optimization to ensure <3s response time

---
## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- Different user stories can be worked on in parallel by different team members

---
## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Implement chat endpoint in RAG/main.py with query handling"
Task: "Create React Chatbot component in Docusauras-Book/src/components/Chatbot/Chatbot.jsx"
```

---
## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---
## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence