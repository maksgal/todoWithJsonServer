import { Button } from "@material-ui/core";
export const ButtonComponent = ({ buttonIcon, clickHandler, color, type }) => {
  return (
    <Button
      type={type}
      onClick={clickHandler}
      size="small"
      color={color}
      children={buttonIcon}
    />
  );
};
