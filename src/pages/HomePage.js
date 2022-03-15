import { useEffect, useState } from "react";
import JobList from "../components/JobList";

const HomePage = () => {
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    const fecthJobs = async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/minhtan7/CS-job-routing-json-server/jobs"
      );
      const data = await res.json();
      setJobs(data);
    };
    fecthJobs();
  }, []);
  console.log("here", jobs);
  return jobs && <JobList jobs={jobs} />;
};

export default HomePage;
