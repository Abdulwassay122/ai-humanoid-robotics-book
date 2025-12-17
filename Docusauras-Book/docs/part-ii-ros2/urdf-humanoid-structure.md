---
id: urdf-humanoid-structure
title: URDF for Humanoid Structure
module_id: module-ros2
short_description: Using Unified Robot Description Format for humanoid robot models
created_date: 2025-12-15
last_updated_date: 2025-12-15
learning_outcomes:
  - Create URDF models for humanoid robots
  - Understand kinematic chains and joint constraints
  - Integrate URDF with ROS 2 simulation and control
---

# URDF for Humanoid Structure

This chapter covers the Unified Robot Description Format (URDF) and its application to modeling humanoid robot structures for simulation and control.

## Introduction to URDF

URDF (Unified Robot Description Format) is an XML format used to describe robot models in ROS. It defines the physical and visual properties of robots, including links, joints, and their relationships.

## URDF Structure Components

### Links
- Physical properties (mass, inertia, visual, collision)
- Link naming conventions
- Coordinate frame definitions
- Visual and collision models

### Joints
- Joint types (revolute, continuous, prismatic, fixed, etc.)
- Joint limits and dynamics
- Joint axes and transformations
- Transmission definitions

### Materials and Colors
- Material definitions for visualization
- Color assignments for different components
- Texture mapping considerations

## Humanoid-Specific Considerations

### Kinematic Chains
- Leg kinematic chains for bipedal locomotion
- Arm kinematic chains for manipulation
- Torso and head structures
- Kinematic tree design principles

### Joint Constraints
- Human-like joint angle limitations
- Torque and velocity limits
- Safety considerations in joint definitions
- Compliance and soft limits

### Mass Distribution
- Center of mass considerations
- Inertial tensor calculations
- Balance and stability implications
- Realistic mass properties

## URDF Best Practices

### Organization and Structure
- Hierarchical design principles
- Modular URDF components
- File inclusion and reusability
- Naming conventions

### Validation and Debugging
- URDF validation tools
- TF tree visualization
- Collision detection verification
- Inverse kinematics testing

## Integration with ROS 2

### Robot State Publisher
- Publishing joint states to TF
- Real-time state updates
- Configuration and parameters

### Simulation Integration
- Gazebo model integration
- SDF conversion and compatibility
- Sensor placement in URDF
- Actuator definitions

## Advanced URDF Features

### Transmission Elements
- Motor and actuator modeling
- Gear ratio and efficiency modeling
- Control interface definitions

### Gazebo-Specific Elements
- Gazebo plugins in URDF
- Sensor integration
- Material properties for simulation

## Summary

URDF is fundamental to representing humanoid robot structures in ROS 2. Proper URDF design is crucial for successful simulation, visualization, and control of humanoid robots.