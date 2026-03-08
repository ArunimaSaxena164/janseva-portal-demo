import { FaGlobe, FaUserCircle } from "react-icons/fa"

function Navbar() {

  return (

    <div className="bg-blue-900 text-white shadow-md">

      <div className="flex justify-between items-center px-10 py-5">

        {/* Left Side */}

        <div className="flex items-center gap-3">

          <FaGlobe size={22}/>

          <h1 className="text-xl font-semibold tracking-wide">
            JanSeva Portal
          </h1>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-8 text-xl">

          <button className="hover:text-gray-200">
            Home
          </button>

          <button className="hover:text-gray-200">
            Services
          </button>

          <button className="hover:text-gray-200">
            Help
          </button>

          <div className="flex items-center gap-2 cursor-pointer">

            <FaGlobe/>

            <span>English</span>

          </div>

          <FaUserCircle size={22}/>

        </div>

      </div>

    </div>

  )
}

export default Navbar