import Logo from "../assets/skig1.png";
function Navbar() {
  return (
    <nav className="w-full h-20 p-2 bg-[#0177BC] block ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="mr-2">
              <img src={Logo} alt="Logo" className="w-80" />
            </div>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Gas Cylinders
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Current Job
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
