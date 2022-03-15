import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Modal,
  TextField,
  Typography
} from "@mui/material";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormProvider, FTextField } from "./form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/BasicContext";
const style = {
  form: {
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    padding: "2rem",
    gap: "1rem"
  },
  text: {
    width: "100%",
    marginBottom: "1rem"
  }
};

const LoginModal = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useContext(AuthContext);
  const defaultValues = {
    username: "tan",
    password: 123
  };
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;
  const [open, setOpen] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };
  const onSubmit = (data) => {
    console.log("data", data);
    // setError("aferSubmit", { message: "Server response Error" });
    auth.signin(data.username, data.password, () => {
      navigate(from, { replace: true });
    });
  };

  let from = location.state?.from?.pathname || "/";

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={style.form}>
        <Typography variant="h3" mb={3}>
          Sign in
        </Typography>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <FTextField
            name="username"
            label="User name"
            style={{ marginBottom: "1rem" }}
          />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            style={{ marginBottom: "1rem" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button type="submit" variant="outlined">
            Sign in
          </Button>
        </FormProvider>
      </div>
    </Modal>
  );
};

export default LoginModal;
