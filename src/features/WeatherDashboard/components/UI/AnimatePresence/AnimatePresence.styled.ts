import { keyframes, Box, BoxProps, styled } from "@mui/material";

const animate = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`;

export const AnimatedView = styled(Box)<BoxProps>(() => ({
  animation: `${animate} 1s ease-in-out forwards`,
}));
