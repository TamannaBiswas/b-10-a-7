import delet from "../../assets/assets/delete.png";
import AvailablePlayers from "../availablePlayers/AvailablePlayers";

export default function Selected({
  selectedPlayers,
  handelDelet,
  handelAddMorePlyer,
  isMorePlyer,
  handelSelectedPlayers,
}) {
  return (
    <div>
      <div className="">
        <h1 className="text-black font-black">({selectedPlayers.length} /6)</h1>
        <div className="py-5">
          {selectedPlayers.map((player, inx) => (
            <div
              className="shadow-md p-6 rounded-lg flex md:justify-between justify-center flex-col md:flex-row"
              key={inx}
            >
              <div className="space-y-5 flex items-center gap-5">
                <img className="w-10 h-10" src={player.img} alt="" />
                <div className="">
                  <h3 className="font-black">{player.name}</h3>
                  <p className="text-gray-400">{player.type}</p>
                  <p className="text-gray-400">{player.price}</p>
                </div>
              </div>
              <img
                onClick={() => handelDelet(player.id)}
                className="w-10 h-10"
                src={delet}
                alt=""
              />
            </div>
          ))}
        </div>
        <button
          onClick={handelAddMorePlyer}
          className="border-2  border-solid border-gray-400 rounded-lg py-2 px-4 bg-yellow-300 text-black font-black"
        >
          Abb More Plyer
        </button>
      </div>
    </div>
  );
}
