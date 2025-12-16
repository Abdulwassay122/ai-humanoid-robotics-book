// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Manual sidebar structure for the AI-Humanoid-Robotics Book
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part I: Physical AI Foundations',
      items: [
        'part-i-foundations/embodied-intelligence',
        'part-i-foundations/digital-to-physical-ai',
        'part-i-foundations/physics-constraints',
        'part-i-foundations/humanoid-landscape'
      ],
      link: {
        type: 'generated-index',
        title: 'Part I: Physical AI Foundations',
        description: 'Understanding the theoretical foundations of Physical AI and humanoid robotics',
        slug: '/part-i-foundations'
      }
    },
    {
      type: 'category',
      label: 'Part II: Mastering ROS 2 for Humanoids',
      items: [
        'part-ii-ros2/ros2-architecture',
        'part-ii-ros2/rclpy-humanoid-control',
        'part-ii-ros2/urdf-humanoid-structure',
        'part-ii-ros2/ros2-launch-parameters',
        'part-ii-ros2/mini-project-controller'
      ],
      link: {
        type: 'generated-index',
        title: 'Part II: Mastering ROS 2 for Humanoids',
        description: 'Building ROS 2 packages and controlling humanoid robots using rclpy',
        slug: '/part-ii-ros2'
      }
    },
    {
      type: 'category',
      label: 'Part III: Digital Twin Simulation',
      items: [
        'part-iii-simulation/gazebo-ros2-integration',
        'part-iii-simulation/physics-simulation',
        'part-iii-simulation/urdf-sdf-pipelines',
        'part-iii-simulation/gazebo-sensors',
        'part-iii-simulation/unity-visualization',
        'part-iii-simulation/mini-project-walking-humanoid'
      ],
      link: {
        type: 'generated-index',
        title: 'Part III: Digital Twin Simulation',
        description: 'Setting up and utilizing digital twin simulation environments for humanoids',
        slug: '/part-iii-simulation'
      }
    },
    {
      type: 'category',
      label: 'Part IV: AI-Robot Brain with NVIDIA Isaac',
      items: [
        'part-iv-isaac/isaac-sim-fundamentals',
        'part-iv-isaac/omniverse-tools',
        'part-iv-isaac/synthetic-data-generation',
        'part-iv-isaac/isaac-ros-navigation',
        'part-iv-isaac/nav2-humanoid-planning',
        'part-iv-isaac/rl-biped-locomotion',
        'part-iv-isaac/mini-project-perception'
      ],
      link: {
        type: 'generated-index',
        title: 'Part IV: AI-Robot Brain with NVIDIA Isaac',
        description: 'Integration and usage of NVIDIA Isaac Sim and Isaac ROS for advanced AI-robot capabilities',
        slug: '/part-iv-isaac'
      }
    },
    {
      type: 'category',
      label: 'Part V: Vision-Language-Action (VLA) Robotics',
      items: [
        'part-v-vla/whisper-voice-commands',
        'part-v-vla/llm-ros-action-pipeline',
        'part-v-vla/cognitive-planning',
        'part-v-vla/multi-modal-perception',
        'part-v-vla/mini-project-voice-control'
      ],
      link: {
        type: 'generated-index',
        title: 'Part V: Vision-Language-Action (VLA) Robotics',
        description: 'Implementation of Vision-Language-Action (VLA) pipelines for natural language robot control',
        slug: '/part-v-vla'
      }
    },
    {
      type: 'category',
      label: 'Part VI: Humanoid Robotics Engineering',
      items: [
        'part-vi-engineering/kinematics-dynamics',
        'part-vi-engineering/biped-locomotion',
        'part-vi-engineering/humanoid-manipulation',
        'part-vi-engineering/human-robot-interaction',
        'part-vi-engineering/mini-project-balance-controller'
      ],
      link: {
        type: 'generated-index',
        title: 'Part VI: Humanoid Robotics Engineering',
        description: 'Humanoid robotics engineering principles, including kinematics, dynamics, and bipedal locomotion',
        slug: '/part-vi-engineering'
      }
    },
    {
      type: 'category',
      label: 'Part VII: Capstone Project - The Autonomous Humanoid',
      items: [
        'part-vii-capstone/autonomous-humanoid-spec',
        'part-vii-capstone/project-steps',
        'part-vii-capstone/isaac-sim-deployment',
        'part-vii-capstone/jetson-deployment'
      ],
      link: {
        type: 'generated-index',
        title: 'Part VII: Capstone Project - The Autonomous Humanoid',
        description: 'Integrating all learned concepts to build an autonomous humanoid robot',
        slug: '/part-vii-capstone'
      }
    },
    {
      type: 'category',
      label: 'Reference Materials',
      items: [
        'authoring-guide',
        'citation-guide'
      ]
    },
    {
      type: 'category',
      label: 'Part VIII: Hardware & Lab Specifications',
      items: [
        'part-viii-hardware/workstation-requirements',
        'part-viii-hardware/jetson-setup',
        'part-viii-hardware/realsense-config',
        'part-viii-hardware/imu-mic-setup',
        'part-viii-hardware/robot-lab-options',
        'part-viii-hardware/ether-lab-option'
      ],
      link: {
        type: 'generated-index',
        title: 'Part VIII: Hardware & Lab Specifications',
        description: 'Comprehensive hardware and lab specifications to support practical learning',
        slug: '/part-viii-hardware'
      }
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendix-glossary',
        'appendix-reference-architectures'
      ]
    }
  ],
};

export default sidebars;
