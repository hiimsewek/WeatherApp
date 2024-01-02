import { Grid, Icon } from "@mui/material";
import { IconButton, InputProps } from "@components";
import { StyledSearchbar } from "./Searchbar.styled";
import { Search } from "@mui/icons-material";

type SearchbarProps = InputProps & {
  expand: boolean;
  onExpand: () => void;
};
const Searchbar = ({ expand, onExpand, ...props }: SearchbarProps) => {
  return (
    <Grid display="flex" alignItems="center">
      {!expand && <IconButton icon={Search} onClick={onExpand} />}

      <StyledSearchbar
        {...props}
        expand={+expand}
        startAdornment={<Icon component={Search} />}
      />
    </Grid>
  );
};

export default Searchbar;
