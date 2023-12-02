import { useEffect, useState } from "react";
import axios from "axios";

//dùng axios de crud
//axios sẽ thương kết hợp với map collection(cấu trúc dữ liệu kiểu map)
function AxiosEx() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://656ae3dfdac3630cf72765c1.mockapi.io/Product")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {data.map((dt) => (
        <li key={dt.id}>{dt.name}</li>
      ))}
    </ul>
  );
}

export default AxiosEx;
