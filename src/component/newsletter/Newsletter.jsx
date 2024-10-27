import formbg from "../../assets/assets/bg-shadow.png";
import logo from "../../assets/assets/logo-footer.png";

export default function Newsletter() {
  return (
    <>
      <div className="relative pt-56">
        <div className="w-10/12 mx-auto pt-20 absolute lg:bottom-[600px] bottom-[900px] start-0 inset-x-0">
          <div className="border-2 p-4 rounded-2xl">
            <div
              className="rounded-2xl"
              style={{
                backgroundImage: `url(${formbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex justify-center flex-col items-center p-12 gap-5">
                <h3 className="text-3xl font-bold">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-gray-400">
                  Get the latest updates and news right in your inbox!
                </p>
                <div className="flex justify-center gap-2 flex-col md:flex-row">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <button
                    style={{
                      backgroundImage: `linear-gradient(
                  60deg,
                  hsl(338deg 69% 74%) 1%,
                  hsl(344deg 78% 75%) 7%,
                  hsl(349deg 86% 76%) 14%,
                  hsl(355deg 94% 77%) 21%,
                  hsl(1deg 99% 78%) 28%,
                  hsl(6deg 100% 77%) 36%,
                  hsl(12deg 100% 75%) 44%,
                  hsl(16deg 100% 74%) 53%,
                  hsl(21deg 100% 72%) 61%,
                  hsl(25deg 96% 70%) 71%,
                  hsl(30deg 91% 68%) 80%,
                  hsl(35deg 85% 66%) 90%,
                  hsl(39deg 78% 64%) 100%
                )`,
                    }}
                    className="px-3 rounded-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-neutral text-neutral-content p-10 pt-72 ">
          <div className="flex justify-center items-center pb-10">
            <img src={logo} alt="" />
          </div>
          <div className="flex lg:justify-around justify-center items-center flex-col lg:flex-row space-y-5 md:space-y-0 pb-8">
            <nav className="flex flex-col">
              <h6 className="text-white">About Us</h6>
              <a className="link link-hover text-gray-400">
                We are a passionate team dedicated to
              </a>
              <a className="link link-hover text-gray-400">
                providing the best services to
              </a>
              <a className="link link-hover text-gray-400"> our customers.</a>
            </nav>

            <nav className="flex flex-col">
              <h6 className="text-white">Quick Links</h6>
              <li>
                <a className="link link-hover text-gray-400"> Home</a>
              </li>
              <li>
                <a className="link link-hover text-gray-400">Services</a>
              </li>
              <li>
                <a className="link link-hover text-gray-400">About</a>
              </li>
              <li>
                <a className="link link-hover text-gray-400">Contact</a>
              </li>
            </nav>
            <nav className="flex flex-col">
              <h6 className="text-white">Subscribe</h6>
              <a className="link link-hover text-gray-400">
                Subscribe to our newsletter for the
              </a>
              <a className="link link-hover text-gray-400">latest updates.</a>
              <div className="flex justify-center flex-col md:flex-row py-3 gap-y-3 lg:py-0  lg:gap-y-0">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered w-full max-w-xs rounded-t-lg "
                />
                <button
                  style={{
                    backgroundImage: `linear-gradient(
                  60deg,
                  hsl(338deg 69% 74%) 1%,
                  hsl(344deg 78% 75%) 7%,
                  hsl(349deg 86% 76%) 14%,
                  hsl(355deg 94% 77%) 21%,
                  hsl(1deg 99% 78%) 28%,
                  hsl(6deg 100% 77%) 36%,
                  hsl(12deg 100% 75%) 44%,
                  hsl(16deg 100% 74%) 53%,
                  hsl(21deg 100% 72%) 61%,
                  hsl(25deg 96% 70%) 71%,
                  hsl(30deg 91% 68%) 80%,
                  hsl(35deg 85% 66%) 90%,
                  hsl(39deg 78% 64%) 100%
                )`,
                  }}
                  className="px-3 rounded-r-lg"
                >
                  Subscribe
                </button>
              </div>
            </nav>
          </div>
          <div className="py-6 border-t-2 border-gray-700 flex justify-center items-center">
            <p className="text-gray-400">
              @2024 Your Company All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
