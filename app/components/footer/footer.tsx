import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-gradient-to-bl from-transparent to-violet-800 backdrop-filter backdrop-opacity-80 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">

              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex " type="button">
                <FaTwitter />
              </button>

              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex" type="button">
                <FaFacebook />
              </button>

              <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex" type="button">
                <FaInstagram />
              </button>

              <button className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 flex" type="button">
                <FaGithub />
              </button>

            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Blog</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Github</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free Products</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="cursor-pointer block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">MIT License</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Terms &amp; Conditions</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Privacy Policy</span>
                  </li>
                  <li>
                    <span className="cursor-pointer text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 flex justify-center items-center gap-2">
              <span className="text-blueGray-500 hover:text-gray-800">DRAMATIC</span>
              <span>2021</span>
              <span>Copyright ©</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer };