/* eslint-disable react/prop-types */
import "./AvailSelecContaner.css";
// eslint-disable-next-line no-unused-vars
import Available from "../available/Available";
// eslint-disable-next-line no-unused-vars
import Selected from "../selected/Selected";

export default function AvailSelecContaner({
  handelIsActive,
  isActive,
  selectedPlayers,
}) {
  return (
    <div className="">
      <div className="">
        <button
          onClick={() => handelIsActive("available")}
          className={`${
            isActive.available
              ? "border-2  border-solid border-gray-400 rounded-l-lg py-2 px-4 active"
              : "border-2  border-solid border-gray-400 rounded-l-lg py-2 px-4"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handelIsActive("selected")}
          className={`${
            isActive.available
              ? "border-2  border-solid border-gray-400 rounded-r-lg py-2 px-4"
              : "border-2  border-solid border-gray-400 rounded-r-lg py-2 px-4 active"
          }`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>

     
    </div>
  );
}
