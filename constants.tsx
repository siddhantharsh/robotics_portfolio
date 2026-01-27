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
    date: "2024 Semester",
    inference: `The video demonstrates an intelligent automated waste segregation system designed to revolutionize urban sanitation. By leveraging specialized sensors and mechanical actuators, the system autonomously identifies and categorizes various types of refuse into dedicated compartments.

Automation in waste management drastically minimizes human exposure to hazardous materials, reduces cross-contamination during recycling, and significantly optimizes the speed of sorting. The integration of infrared and ultrasonic sensors ensures high precision in positioning and identifying objects.

Such systems represent the future of smart infrastructure, where automation is utilized to improve environmental sustainability, enhance operational throughput, and maintain higher standards of public hygiene.`
  },
  {
    id: "2",
    title: "Assignment 2: Industrial Workflow Simulation",
    shortDescription: "Modeling of sequential automation in manufacturing environments.",
    date: "2024 Semester",
    inference: "This assignment explores the simulation of fixed-sequence automation in heavy industry. It focuses on the synchronization between robotic arms and conveyor systems to maintain consistent quality across large-scale production batches."
  }
];