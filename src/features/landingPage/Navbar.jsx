import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../data/landing-assets/logo.svg";
import CloseBtn from "../../data/siginin-assets/close.svg";

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  function handleSignInClicked() {
    navigate("/login");
  }

  function handleCloseClick() {
    navigate("/");
  }

  function handleLogoClicked() {
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between">
      <button onClick={handleLogoClicked}>
        <img src={Logo} alt="logo" className="w-[10rem]" />
      </button>

      {location.pathname === "/" ? (
        <>
          <button
            className="bg-[#01a768] text-white py-3 px-8 font-medium"
            onClick={handleSignInClicked}
          >
            Sign In
          </button>
        </>
      ) : (
        <button onClick={handleCloseClick}>
          <img src={CloseBtn} alt="close" />
        </button>
      )}
    </header>
  );
}

export default Navbar;
