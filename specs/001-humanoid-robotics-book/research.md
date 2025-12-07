# Research Findings: AI-Humanoid-Robotics Book

**Feature Branch**: `001-humanoid-robotics-book`
**Created**: 2025-12-06
**Status**: Initial Draft

## Key Decisions and Rationales

### Decision: Simulation engine
-   **Options Considered**: Gazebo, Unity
-   **Rationale**: Gazebo offers higher physics accuracy, crucial for robotics research and control algorithm development. Unity provides photorealistic visualization, enhancing the learning experience. The plan incorporates both to leverage their respective strengths, with Gazebo for core physics and Unity for visual appeal where appropriate.
-   **Alternatives Rejected Because**: Relying solely on one would compromise either physics fidelity or visual quality, both important for the target audience.

### Decision: Isaac integration
-   **Options Considered**: Perception-only, Full Nav2
-   **Rationale**: Full Nav2 integration is essential for achieving the autonomous humanoid capabilities outlined in the Capstone Project, encompassing comprehensive navigation and planning. Perception-only would limit the robot's autonomy.
-   **Alternatives Rejected Because**: Perception-only integration would not meet the full requirements of autonomous navigation and planning for a humanoid.

### Decision: VLA pipeline
-   **Options Considered**: Whisper + LLM + ROS 2, custom NLP
-   **Rationale**: Using pretrained models like OpenAI Whisper and existing LLMs integrated with ROS 2 significantly reduces development complexity and leverages state-of-the-art natural language processing capabilities without requiring extensive custom NLP development.
-   **Alternatives Rejected Because**: Custom NLP development would introduce substantial complexity, time, and resource investment, deviating from the goal of a book focused on applied humanoid robotics.

### Decision: Robot hardware
-   **Options Considered**: G1, OP3, Go2, Hiwonder
-   **Rationale**: The choice of robot hardware balances cost, realism, and SDK support. The plan recommends a range of options (Unitree Go2/G1, Robotis OP3, Hiwonder) to accommodate different budgets and learning objectives while providing guidance on their respective SDKs and integration patterns. The specific choice will depend on the reader's resources.
-   **Alternatives Rejected Because**: Limiting to a single option would restrict accessibility for a diverse audience with varying hardware access and budget constraints.

### Decision: Code languages
-   **Options Considered**: Python + ROS 2 only, include C++ examples
-   **Rationale**: Focusing on Python + ROS 2 (rclpy) simplifies the learning curve for the target audience (students, educators, AI engineers, hobbyists) and aligns with the prevalent use of Python in AI and high-level robotics control. While C++ is common in performance-critical ROS nodes, for an introductory/intermediate book, Python provides a more accessible entry point.
-   **Alternatives Rejected Because**: Including C++ examples would add significant complexity and potentially deter learners without prior C++ experience, diverging from the clarity and accessibility principles.

### Decision: Math depth
-   **Options Considered**: Intuitive, deep math
-   **Rationale**: The constitution and target audience emphasize clarity for learners. Therefore, an intuitive approach to robotics math with clear explanations and practical applications is preferred over deep mathematical proofs, making the content more accessible.
-   **Alternatives Rejected Because**: Deep mathematical proofs could overwhelm the target audience and detract from the practical application focus of the book.

### Decision: Deployment
-   **Options Considered**: Local GPU, cloud Ether Lab
-   **Rationale**: Offering both local GPU and cloud-based "Ether Lab" options maximizes accessibility. Local GPU provides direct hands-on experience, while cloud options reduce hardware barriers for students and hobbyists.
-   **Alternatives Rejected Because**: Limiting to only local GPU would exclude users without powerful hardware, and limiting to only cloud would remove the benefit of local, direct development experience.
