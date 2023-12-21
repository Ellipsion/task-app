import {
  RiHomeFill,
  RiCheckFill,
  RiListCheck3,
  RiLoader4Line,
} from "react-icons/ri";

export const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: RiHomeFill,
    path: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: RiListCheck3,
    path: "/important",
  },
  {
    id: 3,
    title: "Completed",
    icon: RiCheckFill,
    path: "/complete",
  },
  {
    id: 4,
    title: "Do It Now",
    icon: RiLoader4Line,
    path: "/incomplete",
  },
];
