import { useParams, Link } from "react-router-dom"

function DetailPage() {
  const params = useParams()
  return (
    <>
      <h1>Detail</h1>
      <p>{params.Id}</p>
      <p><Link to=".." relative="path">back</Link></p>
    </>
  );
}

export default DetailPage