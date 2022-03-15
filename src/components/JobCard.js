import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <Card sx={{ textAlign: "left", marginBottom: "1rem", marginTop: "1rem" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          as={Link}
          to={`/jobs/${job.id}`}
          sx={{ textDecoration: "none", color: "#1976d2" }}
        >
          {job.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description: {job.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          as={Link}
          to={`/jobs/${job.id}`}
          sx={{ textDecoration: "none", color: "black" }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
export default JobCard;
