import { useEffect, useState } from "react";
import Available from "../available/Available";
export default function AvailablePlayers({ handelSelectedPlayers }) {
  const [allplayers, setAllplayers] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setAllplayers(data));
  }, []);
  return (
    <>
      <div>
        <h1 className="text-xl font-black">Available Players</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
        {allplayers.map((player, inx) => (
          <Available
            key={inx}
            player={player}
            handelSelectedPlayers={handelSelectedPlayers}
          ></Available>
        ))}
      </div>
    </>
  );
}
