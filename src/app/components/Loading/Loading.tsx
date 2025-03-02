import { CircularProgress } from "@mui/material";
import "./Loading.styles.css";

const Loading = () => (
  <div className="loader-container flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <CircularProgress />
  </div>
);

export default Loading;
