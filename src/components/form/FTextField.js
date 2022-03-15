import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const FTextField = ({ name, ...other }) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} {...other} fullWidth error={!!error} />
      )}
    />
  );
};

export default FTextField;
