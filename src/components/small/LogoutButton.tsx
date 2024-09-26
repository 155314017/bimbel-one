import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("access_token");
    navigate("/login");
  };

  return (
    <div>
      <button
        className="flex items-center justify-center w-9 h-9"
        onClick={handleLogout}
      >
        <FontAwesomeIcon
          className="text-[#125B9A] text-2xl flip-on-hover"
          icon={faArrowRightFromBracket}
        />
      </button>
    </div>
  );
}
