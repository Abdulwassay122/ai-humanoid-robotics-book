---
id: urdf-sdf-pipelines
title: URDF + SDF Pipelines
module_id: module-simulation
short_description: Understanding the pipeline between URDF and SDF for simulation
created_date: 2025-12-15
last_updated_date: 2025-12-15
learning_outcomes:
  - Convert URDF models to SDF for simulation
  - Understand differences between URDF and SDF
  - Optimize models for simulation performance
---

# URDF + SDF Pipelines

This chapter covers the conversion and optimization of URDF (Unified Robot Description Format) models to SDF (Simulation Description Format) for use in physics simulation environments like Gazebo.

## Introduction to URDF and SDF

URDF and SDF are both XML-based formats used to describe robot models, but they serve different purposes. URDF is primarily for ROS-based robot description, while SDF is designed for simulation environments. Understanding the conversion pipeline is crucial for effective simulation.

## URDF vs. SDF Comparison

### URDF Characteristics
- ROS-centric design
- Limited simulation features
- Simple joint and link definitions
- Extensible through XACRO

### SDF Characteristics
- Simulation-focused design
- Rich physics properties
- Advanced sensor definitions
- Multi-robot support

### Key Differences
- Joint and transmission handling
- Material and visual properties
- Physics parameters
- Plugin support

## Conversion Process

### Automatic Conversion
- Using gazebo_ros_pkgs for conversion
- ros2_control integration
- Limitations of automatic conversion
- Common conversion issues

### Manual Conversion Considerations
- Physics properties addition
- Simulation-specific plugins
- Performance optimization
- Accuracy requirements

## Gazebo-Specific Extensions

### Gazebo Tags in URDF
- Adding Gazebo-specific elements
- Sensor integration
- Plugin definitions
- Material properties

### XACRO for Complex Models
- Parameterization of robot models
- Macro definitions
- Inclusion mechanisms
- Conditional statements

## Optimization for Simulation

### Collision Mesh Optimization
- Simplified collision geometries
- Convex decomposition
- Level of detail (LOD) strategies
- Performance vs. accuracy trade-offs

### Visual Mesh Considerations
- Separate visual and collision models
- Texture and material optimization
- Rendering performance
- Realism vs. computation

## Simulation-Specific Features

### Gazebo Plugins
- Joint control plugins
- Sensor plugins
- Actuator models
- Custom plugin integration

### Physics Properties
- Inertial tensor accuracy
- Friction and damping parameters
- Contact properties
- Material characteristics

## Humanoid-Specific Considerations

### Balance and Stability
- Accurate inertial properties
- Center of mass positioning
- Joint limit validation
- Mass distribution effects

### Locomotion Simulation
- Foot-ground interaction modeling
- Multi-contact dynamics
- Balance controller integration
- Walking pattern validation

## Troubleshooting Conversion Issues

### Common Problems
- Joint and transmission issues
- Inertial property errors
- Collision detection problems
- Plugin loading failures

### Debugging Strategies
- Model validation tools
- Visualization techniques
- Step-by-step conversion
- Iterative refinement

## Advanced Topics

### Multi-Resolution Models
- Different models for different purposes
- Switching between detail levels
- Performance optimization
- Accuracy maintenance

### Model Validation
- Kinematic validation
- Dynamic validation
- Simulation vs. real-world comparison
- Performance metrics

## Best Practices

### Model Organization
- Directory structure for model files
- Naming conventions
- Version control strategies
- Documentation practices

### Performance Optimization
- Efficient mesh representation
- Minimal but sufficient detail
- Plugin optimization
- Resource management

## Summary

The URDF to SDF pipeline is crucial for effective humanoid robot simulation. Proper conversion and optimization ensure both realistic simulation behavior and acceptable performance.