export default function Available({ player, handelSelectedPlayers }) {
  const { name, img, tim, type, batting_style, bowling_style, price } = player;
  return (
    <div>
      <div className="card card-compact w-full border-2 p-4">
        <figure>
          <img src={img} alt="plyer" />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <samp>
              <i className="fa-solid fa-user text-xl pr-3"></i>
            </samp>
            <h2 className="card-title font-bold text-xl">{name}</h2>
          </div>

          <div className="flex justify-between">
            <div className="">
              <i className="fa-solid fa-flag pr-4 mt-4"></i>
              <span className="mt-5">{tim}</span>
            </div>
            <button className="btn mb-6">{type}</button>
          </div>
          <div className="border-b-2"></div>
          <p className="font-bold">Rating</p>
          <div className="flex justify-between">
            <span>{batting_style}</span>
            <span>{bowling_style}</span>
          </div>
          <div className="flex justify-between pt-2">
            <span className="mt-5">Price :$ {price}</span>
            <button
              onClick={() => handelSelectedPlayers(player)}
              className="btn bg-[#E7FE29]"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
