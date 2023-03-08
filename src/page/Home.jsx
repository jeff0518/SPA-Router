import { Link } from "react-router-dom"
const HomePage = () => {
  return (
    <>
      <h1>This is HomePage</h1>
      <Link to="/reserve">reserve</Link>
    </>
  );
}

export default HomePage