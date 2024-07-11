import { CornerDownLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-semibold">
          <span className="font-bold text-info">404</span> Page not found
        </h1>
        <Link to="/" replace className="flex items-center gap-2 link link-info">
          <span>Get back to home</span>
          <span>
            <CornerDownLeft />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Missing;
