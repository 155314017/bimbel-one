import GoogleMaps from "../medium/GoogleMaps";
import Logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <div>
      <div className="mt-[50px] bg-[#202020] text-white p-8">
        <div className="flex justify-between">
          <div className="max-w-[50%] flex gap-20">
            <div className="flex flex-col gap-5">
              <img src={Logo} alt="BimbelOne" />

              <h1 className="text-[16px] font-bold capitalize tracking-wide">
                Our menu
              </h1>

              <ul className="flex flex-col gap-2 capitalize cursor-pointer ml-2">
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Home
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Profile
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Health Services
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Information Center
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Complaint
                </li>
                <li className="relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:bg-[#fff] after:h-[1px] after:w-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:-translate-x-1/2 hover:after:w-full">
                  Reservation
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-[16px] font-bold capitalize tracking-wide mb-4">
                Contact us
              </h1>
              <div className="space-y-2">
                <div className="flex">
                  <p className="text-base text-white text-[14px] w-24">
                    Email:
                  </p>
                  <p className="text-base text-white text-[14px]">
                    9wSbU@example.com
                  </p>
                </div>
                <div className="flex">
                  <p className="text-base text-white text-[14px] w-24">
                    Phone:
                  </p>
                  <p className="text-base text-white text-[14px]">
                    (+91) 1234567890
                  </p>
                </div>
                <div className="flex">
                  <p className="text-base text-white text-[14px] w-24">Fax:</p>
                  <p className="text-base text-white text-[14px]">
                    (+91) 1234567890
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h1 className="text-[16px] font-bold capitalize tracking-wide mb-4">
                  address
                </h1>
                <p className="text-base text-white text-[14px]">
                  Indonesia - DIY <br />
                  Jalan Jendal Sudirman KM 20, No.50, Rt.23, Rw.34
                  <br />
                  Daerah Istimewa Yogyakarta (123123431)
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[50%] w-full flex justify-center">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
}
