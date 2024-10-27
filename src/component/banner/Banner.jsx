import Background from "../../assets/assets/banner-main.png";

export default function Banner({ handelClaimFreeCredit }) {
  return (
    <div className="py-6">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `linear-gradient(
              40deg,
              hsl(215deg 56% 66%) 0%,
              hsl(215deg 43% 61%) 1%,
              hsl(215deg 34% 55%) 3%,
              hsl(216deg 27% 50%) 4%,
              hsl(216deg 25% 45%) 6%,
              hsl(216deg 24% 40%) 9%,
              hsl(216deg 23% 35%) 12%,
              hsl(217deg 22% 30%) 16%,
              hsl(217deg 20% 25%) 21%,
              hsl(218deg 17% 21%) 29%,
              hsl(218deg 14% 16%) 42%,
              hsl(219deg 9% 12%) 57%,
              hsl(0deg 0% 7%) 68%,
              hsl(9deg 5% 12%) 75%,
              hsl(9deg 8% 16%) 80%,
              hsl(9deg 9% 21%) 84%,
              hsl(9deg 11% 26%) 87%,
              hsl(9deg 11% 31%) 90%,
              hsl(9deg 12% 36%) 92%,
              hsl(9deg 12% 41%) 94%,
              hsl(9deg 13% 46%) 95%,
              hsl(9deg 14% 52%) 97%,
              hsl(9deg 18% 57%) 98%,
              hsl(9deg 23% 63%) 99%,
              hsl(9deg 30% 69%) 100%
            )`,

          borderRadius: "15px",
        }}
      >
        <div className="hero-content text-neutral-content text-center">
          <div className=" space-y-6">
            <div className="flex justify-center items-center">
              <img src={Background} alt="" />
            </div>

            <h1 className="mb-5 text-4xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-gray-400">
              Beyond Boundaries Beyond Limits
            </p>
            <button
              onClick={handelClaimFreeCredit}
              style={{ backgroundColor: "#E7FE29", borderRadius: "15px" }}
              className="outline outline-offset-1 outline-[#E7FE29] py-2 px-3 text-black font-black border-4  border-solid border-black"
            >
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
