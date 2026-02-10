import { Assignment } from './types';

export const USER_INFO = {
  name: "Siddhant Harsh",
  id: "RA2311003011353",
  institution: "SRMIST",
  role: "Robotics & Automation Portfolio",
  email: "sh6234@srmist.edu.in",
  about: "I am a B.Tech 3rd year student at SRMIST with a deep-seated interest in Robotics and Automation. This portfolio serves as a comprehensive digital record of my academic journey, documenting various assignments, simulations, and technical implementations. It showcases my ability to integrate hardware and software solutions to solve real-world automation challenges."
};

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "1",
    title: "Assignment 1: Autonomous Robotic Arm for Vision-Based Object Manipulation",
    shortDescription: "Analysis of an autonomous robotic manipulation system integrating computer vision and motion planning.",
    videoUrl: "https://youtu.be/dIFN3OBSGqg?si=CAoMFYOggQRn7hiW",
    date: "Academic Submission",
    inference: `The video demonstrates an autonomous robotic manipulation system that integrates computer vision, motion planning, and precise actuation. Unlike basic automated mechanisms, this system relies on real-time perception and adaptive control to interact with objects whose positions are not predefined.

The robotic arm uses a camera-based vision system to detect objects within its workspace. By processing visual input, the system identifies object location and orientation and converts this information into spatial coordinates. This perception layer enables the robot to operate in dynamic and unstructured environments.

Based on the detected object position, the robotic controller computes an appropriate motion trajectory for the arm. Inverse kinematics and path planning algorithms are used to ensure smooth, collision-free movement while maintaining accuracy and stability.

The end effector performs controlled grasping and placement operations. Throughout execution, feedback from sensors is continuously used to refine motion and ensure precise manipulation. The robot adapts its actions in real time, demonstrating autonomous decision-making rather than fixed mechanical behavior.

Such robotic systems are widely deployed in modern manufacturing, logistics automation, and smart factories. They improve consistency, reduce human workload, and enable flexible operation in environments where manual programming of every action is impractical.

Why this is clearly a robotics application:
• The system combines vision, computation, and mechanical actuation
• Motion is planned dynamically, not pre-scripted
• The robot adapts to changing object positions
• Multiple robotic subsystems operate together in real time

This confirms that the application relies on robotics rather than simple automation.

Conclusion:
The vision-based robotic arm illustrates the application-oriented deployment of robotics in intelligent automation. By integrating perception with motion control, the system performs complex manipulation tasks autonomously.

Such deployments represent a significant advancement over traditional automated systems and demonstrate how robotics enables flexible, adaptive, and scalable solutions in real-world applications.`
  },
  {
    id: "2",
    title: "Assignment 2: Operations Performed by Robot",
    shortDescription: "Analysis of Boston Dynamics' Atlas robot performing parkour and dynamic locomotion.",
    videoUrl: "https://www.youtube.com/watch?v=fn3KWM1kuAw",
    date: "Academic Submission",
    inference: `This video shows Boston Dynamics’ Atlas robot performing parkour and dynamic locomotion.
It is widely accepted in robotics courses, always available, and clearly demonstrates multiple robot operations.

Operations Performed:

In the video, the robot first initializes its system and prepares for movement by stabilizing its posture. It uses onboard sensors to maintain balance and ensure correct body alignment before starting any motion.

The robot then performs dynamic locomotion. It walks, runs, and jumps while continuously adjusting its center of mass. During these movements, it coordinates multiple joints in its legs and torso to maintain stability.

The robot demonstrates obstacle navigation by identifying platforms and gaps in its path. It plans its movements in advance and executes precise jumps to move from one surface to another without losing balance.

The robot also performs mid-air posture correction. While jumping, it adjusts its body orientation to ensure safe landing. This requires real-time motion planning and fast sensor feedback.

Throughout the video, the robot continuously collects sensor data, evaluates its environment, makes real-time decisions, and executes coordinated motor actions. These operations allow the robot to move efficiently and safely in a dynamic and unstructured environment.`
  },
  {
    id: "3",
    title: "Assignment 3: Application-Oriented Deployment of Robots Using Non-Conventional Grippers",
    shortDescription: "Analysis of robotic suturing using specialized surgical needle drivers.",
    videoUrl: "https://www.youtube.com/watch?v=cpPofyZbvDw",
    date: "Academic Submission",
    inference: `1. Introduction
Robotic automation has traditionally relied on rigid grippers designed for repetitive and structured tasks such as pick-and-place operations. However, many real-world applications involve deformable materials, continuous contact, and strict force constraints, making conventional grippers unsuitable. Medical robotics is one such domain where safe interaction with soft biological tissue is essential.

To address these challenges, non-conventional grippers and end-effectors have been developed that provide compliance, precision, and force control. These grippers enable robots to perform complex surgical tasks that require dexterous manipulation rather than simple object transfer.

2. Application Description
The selected application is robot-assisted minimally invasive surgery, specifically surgical suturing. Suturing is a critical procedure that involves inserting a curved needle through soft tissue, managing thread tension, and forming secure knots. These actions must be performed with high precision and minimal applied force to avoid tissue damage.

The robotic system assists surgeons by providing motion scaling, tremor reduction, and stable manipulation in confined anatomical spaces. This application demonstrates how non-conventional grippers enable robotic execution of tasks that are impractical with rigid industrial grippers.

3. Robot System Overview
The system consists of a multi-degree-of-freedom surgical robotic manipulator equipped with a specialized suturing end-effector. The robot operates under surgeon supervision and provides fine-grained motion control.

The manipulator maintains continuous interaction with tissue throughout the task. Vision and force feedback guide needle insertion, rotation, and extraction, ensuring safe and accurate suturing. Unlike industrial robots operating in free space, this system performs controlled interaction in a deformable and sensitive environment.

4. Gripper Description and Justification
4.1 Type of Gripper Used
The gripper used is a non-conventional surgical needle driver. It is designed to securely hold a curved surgical needle while allowing precise rotational motion and controlled force application.
The end-effector incorporates compliance and force-limiting features to prevent excessive stress on tissue. Its compact design enables operation in minimally invasive surgical settings.

4.2 Justification for Non-Conventional Gripper
A conventional two-finger gripper is unsuitable for surgical suturing because it cannot provide the required rotational control, force sensitivity, or safety. Surgical tasks demand continuous manipulation rather than discrete grasp-and-release actions.
The non-conventional gripper enables safe needle handling, precise orientation, and controlled interaction with soft tissue, making it essential for this application.

5. Task Analysis
The task demonstrated in the video is robot-assisted suturing, which is fundamentally different from pick-and-place operations.
The task involves:
• Orienting the needle relative to tissue geometry.
• Inserting the needle using controlled force.
• Rotating and pulling the needle through tissue.
• Maintaining thread tension.
• Repositioning the needle for successive stitches.
At no point is the task reduced to lifting an object and placing it elsewhere. The robot performs continuous force-controlled manipulation, confirming that this is not a pick-and-place application.

6. Video Demonstration
(Refer to the video player above)
The demonstration validates the role of compliant, force-controlled grippers in enabling robotic execution of complex medical procedures.

7. Observations and Learning Outcomes
• Non-conventional grippers are essential for safe medical manipulation.
• Continuous force control is critical when interacting with deformable materials.
• Surgical robotics requires skill-based manipulation rather than object transfer.
• Gripper design directly influences task feasibility and safety.

8. Challenges and Limitations
• High system cost and complexity.
• Requirement for skilled human supervision.
• Strict safety constraints limit full autonomy.
• Dependence on accurate force and visual feedback.

9. Conclusion
This assignment demonstrates that non-conventional grippers are crucial for deploying robots in medical applications. The surgical suturing task clearly illustrates manipulation that goes beyond pick-and-place operations, requiring continuous contact, force regulation, and precision.

The use of specialized surgical grippers enables robots to perform tasks that are otherwise infeasible with conventional gripper designs, highlighting their importance in advanced robotic systems.`
  }
];