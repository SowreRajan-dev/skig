import { BsSearch } from "react-icons/bs";
function Header() {
  return (
    <div className="w-full h-10 p-2 bg-[#DBDDDE] flex items-center justify-between">
      <div className="flex-1">
        <p>
          <b className="font-Helvetica">Call us on:</b> 9444065847
        </p>
      </div>
      <div className="">
        <span className="flex items-center">
          <p className="font-Helvetica mr-5 hover:underline cursor-pointer">
            Send your enquiry
          </p>
          <p className="mr-5">| </p>
          <BsSearch />
        </span>
      </div>
    </div>
  );
}

export default Header;
