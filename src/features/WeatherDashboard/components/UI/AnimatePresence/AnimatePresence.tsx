import React from "react";
import { AnimatedView } from "./AnimatePresence.styled";

type AnimatePresenceProps = {
  children: React.ReactNode;
};

const AnimatePresence = ({ children }: AnimatePresenceProps) => {
  return <AnimatedView>{children}</AnimatedView>;
};

export default AnimatePresence;
