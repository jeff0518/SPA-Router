import { Link } from "react-router-dom";

const RESERVE = [
  { id: 1, title: "Jeff" },
  { id: 2, title: "Tom" },
  { id: 3, title: "Joe" },
];

const ReservePage = () => {
  return (
    <>
      <h1>The Reserve Page</h1>
      <ul>
        {RESERVE.map((rese) => (
          <li key={rese.id}>
            <Link to={`/reserve/${rese.id}`}>{rese.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReservePage;
