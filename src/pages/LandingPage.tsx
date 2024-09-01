import HeaderCarousel from "../components/medium/HeaderCarousel";
import TeamPhoto from "../components/medium/TeamPhoto";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const caraDaftar = [
  {
    title: "1. Pendaftaran",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt! Nisi doloremque omnis obcaecati maxime? Architecto eos rerum quibusdam eligendi molestias ipsa amet. Officiis, explicabo at est rerum voluptatem perspiciatis!",
  },
  {
    title: "2. klik tombol",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt! Nisi doloremque omnis obcaecati maxime? Architecto eos rerum quibusdam eligendi molestias ipsa amet. Officiis, explicabo at est rerum voluptatem perspiciatis!",
  },
  {
    title: "3. isi form",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt! Nisi doloremque omnis obcaecati maxime? Architecto eos rerum quibusdam eligendi molestias ipsa amet. Officiis, explicabo at est rerum voluptatem perspiciatis!",
  },
  {
    title: "4. pembayaran",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt! Nisi doloremque omnis obcaecati maxime? Architecto eos rerum quibusdam eligendi molestias ipsa amet. Officiis, explicabo at est rerum voluptatem perspiciatis!",
  },
];

export default function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* banner */}
      <div className="flex justify-center mt-[100px]">
        <div className="relative">
          <HeaderCarousel />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-[24px] text-white font-[400] tracking-wider">
              Welcome to
            </h1>
            <h1 className="text-[40px] text-white font-bold">
              Bimbingan Belajar One
            </h1>
            <button className="bg-[#E85F10] border-2 border-[#E85F10] text-white w-[190px] h-[55px] font-bold rounded-lg text-[14px] tracking-wider mt-[20px] shadow-lg transition-all duration-300 ease-in-out hover:bg-black/50 hover:text-[#E85F10]">
              Registration Now!
            </button>
          </div>
        </div>
      </div>

      {/* Cara mendaftar */}
      <div className="mt-[50px] flex justify-center">
        <div className="h-[352px] w-[1318px] bg-[#EAF5FE] rounded-[10px] shadow-lg p-8">
          <h1 className="text-[20px] font-bold mb-2">How to registration?</h1>
          <h1 className="text-[14px]">
            Ikuti langkah-langkah berikut untuk mendaftar di <b>BimbelOne</b>:
          </h1>

          {/* card */}
          <div className="flex justify-center gap-8 mt-6">
            {/* card */}
            {caraDaftar.map((item) => (
              <div className="w-[299px]">
                <h1 className="text-[16px] font-bold text-[#E85F10] capitalize">
                  {item.title}
                </h1>
                <hr className="my-5 border-none bg-[#125B9A] h-[2px]" />
                <p className="text-[14px] tracking-wide">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* about us */}
      <div className="mt-[50px] flex justify-center">
        <div className="h-[354px] w-[1263px] flex gap-8">
          <div className="max-w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about us"
              className="h-[354px] w-[597px] rounded-[10px] object-cover"
            />
          </div>

          <div className="max-w-[50%] flex flex-col gap-5 p-8">
            <h1 className="capitalize text-[20px] font-bold">about us</h1>
            <p className="text-[14px] text-justify tracking-wide">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>

            <div className="flex gap-5 p-8 justify-between">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[63px] w-[63px] text-[#E85F10]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="text-[14px] capitalize font-bold tracking-wide">
                  100+ Facilities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[63px] w-[63px] text-[#E85F10]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="text-[14px] capitalize font-bold tracking-wide">
                  100+ Facilities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-[63px] w-[63px] text-[#E85F10]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="text-[14px] capitalize font-bold tracking-wide">
                  100+ Facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* announcements */}
      <div className="mt-[50px] flex justify-center">
        <div className="h-[244px] w-[1318px] bg-[#125B9A] rounded-[10px] p-10 text-center flex flex-col items-center gap-8">
          <p className="text-[20px] font-bold text-white">Announcements</p>
          <p className="text-[14px] text-white  max-w-md tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>

      {/* program type */}
      <div className="mt-[50px] flex justify-center">
        <div className="w-[1318px] h-[397px] bg-[#EAF5FE] rounded-[10px] p-10">
          <h1 className="text-[20px] font-bold capitalize mb-10">
            program type
          </h1>
          <div className="flex justify-between gap-10">
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">program type</p>
              <p className="text-[14px] tracking-wide text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">program type</p>
              <p className="text-[14px] tracking-wide text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">program type</p>
              <p className="text-[14px] tracking-wide text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">program type</p>
              <p className="text-[14px] tracking-wide text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className="mt-[50px] flex justify-center">
        <div className="w-[1318px] h-[399px] flex flex-col items-center gap-10">
          <h1 className="text-[20px] font-bold capitalize">our team</h1>
          <TeamPhoto />
        </div>
      </div>

      {/* footer */}
      <Footer />
     
    </div>
  );
}
