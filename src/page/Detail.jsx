import { useParams } from "react-router-dom"

function DetailPage() {
  const params = useParams()
  return (
    <>
      <h1>Detail</h1>
      <p>{params.Id}</p>
    </>
  );
}

export default DetailPage