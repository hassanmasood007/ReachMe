import { TextField } from "@mui/material";
import { FunctionComponent } from "react";

interface IProps {
  type: string;
  label: string;
  color:
    | "error"
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | undefined;
}

const Input: FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      <TextField
        required
        id="outlined-password-input"
        label={props.label}
        type={props.type}
        color={props.color}
        autoComplete="current-password"
        style={{ width: "34vw" }}
      />
    </>
  );
};

export default Input;
