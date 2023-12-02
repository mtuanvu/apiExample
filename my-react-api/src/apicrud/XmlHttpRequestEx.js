//call api XMLHttpRequest
//sử dụng XMLHttpRequest dùng khi muốn read apo
import React, { useState } from "react";

function XmlHttpRequestEx() {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    // GET read
    xhr.open("GET", "https://656ae3dfdac3630cf72765c1.mockapi.io/Product");
    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }
  return (
    <div>
      <button onClick={handleClick}>Get API Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading Data...</div>}
    </div>
  );
}

export default XmlHttpRequestEx;
