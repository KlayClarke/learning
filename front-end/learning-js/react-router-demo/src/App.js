import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Link to={"/profile"}>Profile</Link>
      <h1>Hello from App</h1>
    </div>
  );
};
