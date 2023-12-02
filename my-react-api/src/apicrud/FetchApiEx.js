//sử dụng Fetch Api để :

import { useState, useEffect } from "react";

//PUT, POST, GET, DELETE Api

function FetchEx() {
  const [data, setData] = useState(null);
  //dùng cho việc Fetch api
  useEffect(() => {
    fetch("https://656ae3dfdac3630cf72765c1.mockapi.io/Product")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loanding..."}
    </div>
  );
}

export default FetchEx;
