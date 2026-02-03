import { Assignment } from './types';

export const USER_INFO = {
  name: "Siddhant Harsh",
  id: "RA2311003011353",
  institution: "SRMIST",
  role: "Robotics & Automation Portfolio",
  email: "shars@srmist.edu.in",
  about: "I am a B.Tech 3rd year student at SRMIST with a deep-seated interest in Robotics and Automation. This portfolio serves as a comprehensive digital record of my academic journey, documenting various assignments, simulations, and technical implementations. It showcases my ability to integrate hardware and software solutions to solve real-world automation challenges."
};

export const ASSIGNMENTS: Assignment[] = [
  {
    id: "1",
    title: "Assignment 1: Automatic Sorting Dustbin",
    shortDescription: "A smart waste management system using automated material recognition.",
    videoUrl: "https://www.youtube.com/embed/33T43l-gu78",
    date: "Academic Submission",
    inference: `The video demonstrates an intelligent automated waste segregation system designed to revolutionize urban sanitation. By leveraging specialized sensors and mechanical actuators, the system autonomously identifies and categorizes various types of refuse into dedicated compartments.

Automation in waste management drastically minimizes human exposure to hazardous materials, reduces cross-contamination during recycling, and significantly optimizes the speed of sorting. The integration of infrared and ultrasonic sensors ensures high precision in positioning and identifying objects.

Such systems represent the future of smart infrastructure, where automation is utilized to improve environmental sustainability, enhance operational throughput, and maintain higher standards of public hygiene.`
  },
  {
    id: "2",
    title: "Assignment 2: Industrial Workflow Simulation",
    shortDescription: "Modeling of sequential automation in manufacturing environments.",
    date: "Academic Submission",
    inference: "This assignment explores the simulation of fixed-sequence automation in heavy industry. It focuses on the synchronization between robotic arms and conveyor systems to maintain consistent quality across large-scale production batches."
  },
  {
    id: "3",
    title: "Assignment 3: Application-Oriented Deployment of Robots Using Non-Conventional Grippers",
    shortDescription: "Analysis of robotic suturing using specialized surgical needle drivers.",
    videoUrl: "https://www.youtube.com/embed/Xvqs2mdWobU",
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