import GoogleMaps from "../medium/GoogleMaps";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div>
      <div className="mt-[50px] bg-[#202020] text-white md:p-12 p-4">
        <div className="flex md:flex-row flex-col md:justify-between lg:justify-center md:gap-20 lg:gap-0">
          <div className="md:max-w-[50%] flex md:gap-20 gap-10">
            <div className="flex flex-col gap-5">
              <img src={Logo} alt="BimbelOne" className="w-[400px]"/>

              <h1 className="md:text-[16px] text-[12px] font-bold capitalize tracking-wide">
                Our menu
              </h1>

              <ul className="text-[12px] md:text-[14px] flex flex-col gap-2 capitalize cursor-pointer ml-2">
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Home
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  About Us
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Academics
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Registration Now
                </li>
              </ul>
            </div>
            <div>
              <h1 className="md:text-[16px] text-[12px] font-bold capitalize tracking-wide mb-4">
                Contact us
              </h1>
              <div className="md:space-y-2">
                <div className="flex">
                  <p className="md:text-base text-white md:text-[14px] text-[12px] md:w-24 w-12">
                    Email:
                  </p>
                  <p className="md:text-base text-white md:text-[14px] text-[12px]">
                    admission@bimbelone.com
                  </p>
                </div>
                <div className="flex">
                  <p className="md:text-base text-white md:text-[14px] text-[12px] md:w-24 w-12">
                    Phone:
                  </p>
                  <p className="md:text-base text-white md:text-[14px] text-[12px]">
                    +62 818475390
                  </p>
                </div>
              </div>

              <div className="md:mt-10 mt-5">
                <h1 className="md:text-[16px] text-[12px] font-bold capitalize tracking-wide md:mb-4 mb-2">
                  address
                </h1>
                <p className="md:text-base text-white md:text-[14px] text-[12px]">
                  FP One TCC Batavia Tower One
                  <br />
                  <br />
                  Jl. K.H. Mas Mansyur No.Kav. 126, RT.9/RW.3, Karet Tengsin,
                  Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
                  Ibukota Jakarta 10220
                </p>
              </div>
            </div>
          </div>
          <div className="md:max-w-[50%] w-full flex justify-center mt-8 md:mt-0 lg:justify-end">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
}
