import { Link } from "react-router-dom";
export default function ErrorPages() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-[100px] font-bold mb-5">Oops!</h1>
      <p className="text-2xl mb-3">Page Not Found</p>
      <Link to="/" className="text-lg text-[#0047FF]">
        Back to Home
      </Link>
    </div>
  );
}
