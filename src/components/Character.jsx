import React from "react";

export default function Character({ item }) {
  return (
    <div className="w-[200px] text-center bg-sky-900 rounded-xl overflow-hidden flex flex-col justify-between p-3 max-[550px]:w-[150px]">
      <div>
        <h3 className="text-[17px] font-bold">{item.name}</h3>
        <h5 className="text-[15px]">Especie: {item.species}</h5>
      </div>
      <img className="rounded-full mt-3" src={item.image} />
    </div>
  );
}
