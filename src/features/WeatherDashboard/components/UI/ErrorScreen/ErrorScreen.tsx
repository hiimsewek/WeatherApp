import { Typography } from "@mui/material";
import { ErrorContainer, RetryButton } from "./ErrorScreen.styled";

type ErrorScreenProps = {
  message: string;
  onRetry?: () => void;
};

const ErrorScreen = ({ message, onRetry }: ErrorScreenProps) => {
  return (
    <ErrorContainer>
      <Typography component="span" variant="body1">
        {message}
      </Typography>
      {onRetry && <RetryButton onClick={onRetry}>Try again</RetryButton>}
    </ErrorContainer>
  );
};

export default ErrorScreen;
