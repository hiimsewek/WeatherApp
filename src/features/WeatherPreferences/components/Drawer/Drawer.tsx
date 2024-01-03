import React from "react";
import { DrawerProps as MuiDrawerProps } from "@mui/material";
import { StyledCloseBtn, StyledDrawer } from "./Drawer.styled";
import { Close } from "@mui/icons-material";

type DrawerProps = MuiDrawerProps & {
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer = ({ onClose, children, ...props }: DrawerProps) => {
  return (
    <StyledDrawer
      {...props}
      ModalProps={{
        ...props.ModalProps,
        onClose,
      }}
      anchor="right"
    >
      <StyledCloseBtn icon={Close} onClick={onClose} />
      {children}
    </StyledDrawer>
  );
};

export default Drawer;
