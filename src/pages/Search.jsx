import React, { useState } from "react";
import { datas } from "../UserList";

export default function Search() {
  const [data, setdata] = useState(datas);

  const deleteItem = (idx) => {
    let newData = [...datas];
    let data2 = newData.filter((item) => item.id !== idx);
    setdata(data2);
  };

  const searchFriend = (name) => {
    console.log(name);
    let newData = [...datas];
    let data2 = newData.filter((item) => item.name === name);
    setdata(data2);
  };

  return (
    <div>
      <form>
        <input type={"text"} onChange={(e) => searchFriend(e.target.value)} />
      </form>
      {data.map((item, idx) => {
        return (
          <div key={idx} onClick={() => deleteItem(item.id)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
