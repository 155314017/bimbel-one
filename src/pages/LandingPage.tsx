import HeaderCarousel from "../components/medium/HeaderCarousel";
import TeamPhoto from "../components/medium/TeamPhoto";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const caraDaftar = [
  {
    title: "1. Register Now",
    description: "Click Register Now button at the top of this website",
  },
  {
    title: "2. Fill Out the Application Form",
    description:
      "Complete the registration form with accurate details, including personal information, guardian details (for minors), and any required academic history.",
  },
  {
    title: "3. Payment Confirmation",
    description:
      "You will receive email notification with link to confirmed your payment.",
  },
  {
    title: "4. Your Account is already Active",
    description:
      "After Admin has verified your payment then your account already active.",
  },
];

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/SignUp");
  };

  return (
    <div>
      <Navbar />
      {/* banner */}
      <div className="flex justify-center md:mt-[100px] mt-[90px] ">
        <div className="relative">
          <HeaderCarousel />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-[20px] text-white font-[400] tracking-wider md:text-[24px]">
              Welcome to
            </h1>
            <h1 className="text-[32px] text-white font-bold md:text-[40px]">
              Bimbingan Belajar One
            </h1>
            <button
              onClick={handleClick}
              className="bg-[#E85F10] text-white w-[150px] h-[40px] md:w-[190px] md:h-[55px] font-bold rounded-lg text-[12px] md:text-[14px] tracking-wider mt-[20px] shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-500 hover:shadow-orange-600"
            >
              Registration Now!
            </button>
          </div>
        </div>
      </div>

      {/* Cara mendaftar */}
      <section id="register" className="md:mt-[50px] mt-[20px] flex justify-center">
        <div className="md:h-[352px] md:w-[1200px] w-[330px] bg-[#EAF5FE] rounded-[10px] shadow-lg p-8 md:mt-[100px]">
          <h1 className="text-[20px] font-bold mb-2">How to Register?</h1>
          <h1 className="text-[14px]">
            Follow the step below to join <b>BimbelOne</b>:
          </h1>

          {/* card */}
          <div className="flex flex-col gap-5 md:flex-row md:justify-center md:gap-8 mt-6">
            {/* card */}
            {caraDaftar.map((item, idx) => (
              <div key={idx} className="md:w-[299px]">
                <h1 className=" text-[14px] md:text-[16px] font-bold text-[#E85F10] capitalize">
                  {item.title}
                </h1>
                <hr className="my-5 border-none bg-[#125B9A] h-[2px]" />
                <p className="md:text-[14px] text-[12px] md:tracking-wide text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* about us */}
      <section id="about" className="md:mt-[50px] mt-[24px] flex justify-center">
        <div className="md:h-[354px] w-[330px] md:w-[1263px] flex flex-col md:flex-row gap-8 md:mt-[60px]">
          <div className="md:max-w-[50%]">
            {/* <img
              src="https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about us"
              className="h-[354px] w-[597px] rounded-[10px] object-cover"
            /> */}
          </div>

          <div className="md:max-w-[100%] flex flex-col gap-5 md:p-8">
            <h1 className="capitalize text-[20px] font-bold text-center mb-4">
              about us
            </h1>
            <p className="md:text-[14px] text-[12px] text-justify md:tracking-wide">
              Welcome to BimbelOne, where education meets excellence. We are
              dedicated to providing a supportive and dynamic learning
              environment that fosters academic achievement, personal growth,
              and holistic development.
              <br />
              <br />
              At BimbelOne, we believe in nurturing the unique potential of each
              student. Our experienced educators are committed to inspiring
              curiosity, creativity, and a lifelong love of learning. With a
              well-rounded curriculum, modern facilities, and a strong emphasis
              on values and character development, we prepare students for
              success in a rapidly changing world. Join us in shaping the
              future, one student at a time!
            </p>

            <div className="flex gap-5 md:p-8 justify-between text-center">
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="md:h-[63px] md:w-[63px] h-[40px] w-[40px] text-[#E85F10]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="md:text-[14px] text-[12px] capitalize font-bold md:tracking-wide">
                  100+ Facilities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="md:h-[63px] md:w-[63px] h-[40px] w-[40px] text-[#E85F10]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="md:text-[14px] text-[12px] capitalize font-bold md:tracking-wide">
                  100+ Facilities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="md:h-[63px] md:w-[63px] h-[40px] w-[40px] text-[#E85F10]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                  />
                </svg>
                <p className="md:text-[14px] text-[12px] capitalize font-bold md:tracking-wide">
                  100+ Facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* announcements */}
      <div className="md:mt-[50px] mt-[30px] flex justify-center">
        <div className="md:h-[244px] md:w-full w-[100%] bg-[#125B9A] md:p-10 p-6 text-center flex flex-col items-center md:gap-8 gap-4">
          <p className="md:text-[20px] text-[16px] font-bold text-white">
            Announcements
          </p>
          <p className="md:text-[14px] text-[12px] text-white  max-w-xl tracking-wide">
            Mid-term exams are approaching! Please start preparing by reviewing
            your notes and class materials. Ensure you understand the exam
            schedule and guidelines. For any questions or additional support,
            reach out to your teachers. Stay focused, plan your study time, and
            do your best!
          </p>
        </div>
      </div>

      {/* program type */}
      <section id="academics" className="md:mt-[50px] mt-[30px] flex  justify-center">
        <div className="md:w-[1200px] w-[330px] bg-[#EAF5FE] rounded-[10px] md:p-10 p-6 md:mt-[100px]">
          <h1 className="md:text-[20px] text-[16px] font-bold capitalize md:mb-10 mb-6">
            Academics Program
          </h1>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">Preschool</p>
              <p className="text-[12px] md:tracking-wide text-justify">
                Our preschool program at BimbelOne is designed to nurture young
                minds through a balance of play-based learning and structured
                activities. We focus on developing foundational skills in
                language, math, social interaction, and creativity. Through
                engaging lessons, hands-on activities, and caring guidance,
                children build confidence, curiosity, and a love for learning in
                a safe and supportive environment. Our goal is to foster
                emotional, cognitive, and physical development, setting the
                stage for future academic success.
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">Primary School</p>
              <p className="text-[12px] md:tracking-wide text-justify">
                At BimbelOne, our primary school academic program emphasizes a
                well-rounded education that fosters intellectual growth and
                personal development. We offer a comprehensive curriculum that
                includes core subjects such as language arts, mathematics,
                science, and social studies, alongside arts, physical education,
                and technology.
                <br />
                <br />
                Our dedicated teachers use interactive and engaging teaching
                methods to inspire curiosity and critical thinking. We also
                promote collaboration and teamwork through group projects and
                extracurricular activities. By nurturing a positive learning
                environment, we aim to develop confident, compassionate, and
                responsible students who are prepared for the challenges of the
                future.
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">Middle School</p>
              <p className="text-[12px] md:tracking-wide text-justify">
                Our middle school academic program at BimbelOne is designed to
                bridge the gap between elementary education and high school. We
                offer a rigorous curriculum that includes core subjects such as
                English, mathematics, science, and social studies, as well as
                options in the arts, technology, and physical education.
                <br />
                <br />
                Students are encouraged to think critically and independently
                through project-based learning, collaborative group work, and
                hands-on experiments. Our dedicated teachers provide
                personalized support to help each student discover their
                strengths and interests. Additionally, we emphasize the
                development of essential life skills, such as communication,
                teamwork, and problem-solving, to prepare our students for
                future academic challenges and personal growth.
              </p>
            </div>
            {/* ------- */}
            <div className="w-[282px]">
              <p className="text-[14px] mb-3 capitalize">High School</p>
              <p className="text-[12px] md:tracking-wide text-justify">
                At BimbelOne, our high school academic program is designed to
                prepare students for college and careers through a comprehensive
                and challenging curriculum. We offer a wide range of courses,
                including Advanced Placement (AP) classes, honors courses, and
                electives in the arts, sciences, technology, and humanities.
                <br />
                <br />
                Our experienced educators foster critical thinking, creativity,
                and effective communication skills, empowering students to take
                charge of their learning. With a focus on real-world
                applications and interdisciplinary projects, students engage in
                collaborative learning experiences that promote personal and
                academic growth. We also provide guidance for college and career
                readiness, including counseling services, internships, and
                extracurricular activities, ensuring our students are
                well-equipped for their future endeavors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <div className="mt-[50px] flex justify-center">
        <div className="md:w-[1200px] md:h-[399px] w-full flex flex-col items-center gap-10">
          <h1 className="text-[20px] font-bold capitalize">our team</h1>
          <div className="w-full md:w-[1200px] overflow-x-auto px-20 md:px-0 no-scrollbar">
            <div className="flex gap-4">
              <TeamPhoto />
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}
