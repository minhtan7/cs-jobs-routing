import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const JobModal = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [open, setOpen] = useState(true);
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fecthJobs = async () => {
      const res = await fetch(
        `https://my-json-server.typicode.com/minhtan7/CS-job-routing-json-server/jobs/${id}`
      );
      const data = await res.json();
      setJob(data);
    };
    fecthJobs();
  }, [id]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate(from, { replace: true });
  };
  let from = location.state?.from?.pathname || "/";

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            {job?.title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            paragraph={true}
          >
            {job?.description}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Skills:{" "}
            <List>
              {job?.skills.map((s) => (
                <ListItem sx={{ paddingTop: 0, paddingBottom: 0 }}>
                  <ListItemText primary={s} />
                </ListItem>
              ))}
            </List>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            City: {job?.city}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
export default JobModal;
