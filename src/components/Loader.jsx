import { Typography } from "@mui/material";

const Loader = () => {
  return (
    <div className="grid place-content-center gap-3 h-screen">
      <span className="loader mx-auto"></span>
      <Typography variant="body2" className="">
        Loading...
      </Typography>
    </div>
  );
};
export default Loader;
