// Icon Types
import { IconType } from "react-icons";
// Icon Types

// Icons
import { AiOutlineHtml5 } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
// Icons

export const myServices: {
  id: string;
  name: string;
  ImageData: IconType;
  content: string;
}[] = [
  {
    id: "service-1",
    name: "FrontEnd Web Development",
    ImageData: AiOutlineHtml5,
    content:
      "Modern and mobile-ready website with newest Technology such as React.js .",
  },
  {
    id: "service-2",
    name: "Backend Web Development",
    ImageData: FaNodeJs,
    content:
      "Developing Large-Scale Backend With Javascript Ecosystem Such As : Node.js & Express.Js .",
  },
  {
    id: "service-3",
    name: "build your dream PC",
    ImageData: MdComputer,
    content:
      "I can help you to build Your Dream PC & help you to buy best hardware on your money .",
  },
  {
    id: "service-4",
    name: "system repair",
    ImageData: GiAutoRepair,
    content:
      "Repairing old systems are so mad , I can help you to repair it and make it fresh .",
  },
];
