import { useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Banner from "./component/banner/Banner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvailSelecContaner from "./component/availableSelectedContaner/AvailSelecContaner.jsx";
import AvailablePlayers from "./component/availablePlayers/AvailablePlayers.jsx";
import Newsletter from "./component/newsletter/Newsletter.jsx";
import Selected from "./component/selected/Selected.jsx";

export default function App() {
  const [claimFreeCredit, setClaimFreeCredit] = useState(0);
  const [isActive, setIsActive] = useState({
    available: true,
  });

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handelDelet = (id) => {
    console.log(id);
    const newPlayers = selectedPlayers.filter((p) => p.id !== id);
    setSelectedPlayers(newPlayers);
  };

  const handelClaimFreeCredit = () => {
    toast.success("Credit Added to your Accoint", {
      position: "top-left",
      autoClose: 4000,
    });
    setClaimFreeCredit(claimFreeCredit + 600000);
  };

  const handelIsActive = (starus) => {
    if (starus == "available") {
      setIsActive({
        available: true,
      });
    } else {
      setIsActive({
        available: false,
      });
    }
  };

  const handelClaimFreeCreditDelet = (price) => {
    if (price < claimFreeCredit) {
      setClaimFreeCredit(claimFreeCredit - price);
    } else if (price === 0) {
      toast.success("not avabte 1", {
        position: "top-left",
        autoClose: 4000,
      });
    }
  };

  const handelSelectedPlayers = (player) => {
    const isexist = selectedPlayers.find((p) => p.id === player.id);

    if (player.price > claimFreeCredit) {
      toast.error("Not enough money to duy this plyer Claim some Credit", {
        position: "top-right",
        autoClose: 4000,
      });
    } else if (selectedPlayers.length >= 6) {
      toast.error(" Player Not avable", {
        position: "top-right",
        autoClose: 4000,
      });
    } else {
      if (isexist) {
        toast.success("Player already selected", {
          position: "top-left",
          autoClose: 4000,
        });
        return;
      } else {
        toast.success("Congrates !! Mamus Labuschgne is now in your squad", {
          position: "top-center",
          autoClose: 4000,
        });
        handelClaimFreeCreditDelet(player.price);
        const newPlayers = [...selectedPlayers, player];
        setSelectedPlayers(newPlayers);
      }
    }
  };
  const [isMorePlyer, setIsMorePlyer] = useState(false);
  const handelAddMorePlyer = () => {
    // setIsMorePlyer(!isMorePlyer);
    handelIsActive("available");
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <hader>
          <Navbar claimFreeCredit={claimFreeCredit}></Navbar>
          <Banner handelClaimFreeCredit={handelClaimFreeCredit}></Banner>
          <ToastContainer />
        </hader>
        <main>
          <div className="flex justify-end">
            <AvailSelecContaner
              handelIsActive={handelIsActive}
              isActive={isActive}
              selectedPlayers={selectedPlayers}
            ></AvailSelecContaner>
          </div>

          {isActive.available ? (
            <AvailablePlayers
              handelSelectedPlayers={handelSelectedPlayers}
            ></AvailablePlayers>
          ) : (
            <Selected
              selectedPlayers={selectedPlayers}
              handelDelet={handelDelet}
              handelAddMorePlyer={handelAddMorePlyer}
              isMorePlyer={isMorePlyer}
              handelSelectedPlayers={handelSelectedPlayers}
            ></Selected>
          )}

          {/* section ends Available Selacted*/}

          {/* Subscribe to our Newsletter */}
          <div>
            <Newsletter></Newsletter>
          </div>
        </main>
      </div>
    </>
  );
}
