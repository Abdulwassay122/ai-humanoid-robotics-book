# Data Model: AI-Humanoid-Robotics Book Content

**Feature Branch**: `001-humanoid-robotics-book`
**Created**: 2025-12-06
**Status**: Draft

## Key Entities

### 1. Chapter
-   **Description**: A distinct section of the book, covering a specific topic.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "ros2-nodes-topics")
    -   `title`: Chapter title (e.g., "Nodes, Topics, and Services")
    -   `module_id`: Reference to the parent module.
    -   `content`: Markdown content of the chapter.
    -   `learning_outcomes`: List of measurable learning objectives.
    -   `mini_project_id`: Optional, reference to a mini-project associated with the chapter.
    -   `diagrams`: List of associated diagrams.
    -   `code_examples`: List of associated code examples.
    -   `citations`: List of academic/technical citations.

### 2. Module
-   **Description**: A logical collection of related chapters, often including a mini-project and forming a major part of the course.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "module-ros2")
    -   `title`: Module title (e.g., "The Robotic Nervous System (ROS 2)")
    -   `chapters`: List of chapter IDs belonging to this module.
    -   `mini_project_id`: Optional, reference to a comprehensive mini-project for the module.

### 3. Capstone Project
-   **Description**: A comprehensive, multi-module project integrating all learned concepts, demonstrating an autonomous humanoid robot.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "autonomous-humanoid")
    -   `title`: Project title (e.g., "The Autonomous Humanoid")
    -   `description`: Overview of the project goals and functionality.
    -   `modules_integrated`: List of modules whose concepts are integrated.
    -   `steps`: Detailed, step-by-step implementation guide.
    -   `hardware_spec_id`: Reference to associated hardware specifications.
    -   `deployment_environments`: List of target environments (Isaac Sim, Jetson edge).

### 4. Code Example
-   **Description**: Illustrative Python/ROS 2/Isaac SDK code snippets embedded within chapters or linked.
-   **Attributes**:
    -   `id`: Unique identifier for the code snippet.
    -   `filename`: Suggested filename (e.g., "first_controller.py").
    -   `language`: Programming language (e.g., "python", "yaml").
    -   `content`: The actual code snippet.
    -   `description`: Explanation of what the code does.
    -   `chapter_id`: Reference to the chapter where it's used.

### 5. Diagram
-   **Description**: Visual representations of concepts, architectures, or system flows.
-   **Attributes**:
    -   `id`: Unique identifier for the diagram.
    -   `title`: Diagram title.
    -   `type`: Diagram type (e.g., "Mermaid", "PNG", "UML").
    -   `source_path`: Path to the diagram source file (e.g., `.static/diagrams/ros2-architecture.mmd`).
    -   `description`: Explanation of the diagram.
    -   `chapter_id`: Reference to the chapter where it's used.

### 6. Citation
-   **Description**: A reference to a reputable robotics/AI research source, following APA style.
-   **Attributes**:
    -   `id`: Unique identifier for the citation.
    -   `full_citation`: Full APA-formatted citation text.
    -   `url`: Optional URL to the source.
    -   `chapter_id`: Reference to the chapter where it's used.

### 7. Robot
-   **Description**: A humanoid robot, either simulated or physical, used in examples or projects.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "unitree-go2").
    -   `name`: Robot name (e.g., "Unitree Go2").
    -   `type`: Type of robot (e.g., "bipedal humanoid", "quadrupedal proxy").
    -   `description`: Brief description and key features.
    -   `simulation_models`: List of available simulation models (URDF/SDF).
    -   `sdk_support`: Details on SDKs and integration.

### 8. Simulation Environment
-   **Description**: Software platforms (Gazebo, Unity, Isaac Sim) used for virtual robot testing and development.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "gazebo-fortress").
    -   `name`: Environment name (e.g., "Gazebo Fortress").
    -   `capabilities`: Key features (physics simulation, sensor models, visualization).
    -   `ros2_integration`: Details on ROS 2 compatibility.

### 9. VLA Pipeline
-   **Description**: A system connecting vision, language, and robot actions to enable natural language control.
-   **Attributes**:
    -   `id`: Unique identifier (e.g., "voice-to-action-pipeline").
    -   `components`: List of integrated components (e.g., Whisper, LLM, ROS 2 Action Server).
    -   `input_modalities`: Input types (e.g., "voice", "text", "image").
    -   `output_actions`: Types of robot actions generated.
    -   `cognitive_planning_logic`: Description of how high-level commands are translated.