import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../data/landing-assets/logo.svg";
import CloseBtn from "../../data/siginin-assets/close.svg";
import { useLoginUser } from "../authentication/useAuth";
import { useAuthContext } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const { login } = useAuthContext();
  const { isLoading, loginUser } = useLoginUser();

  function handleSignInClicked() {
    navigate("/login");
  }

  function handleCloseClick() {
    navigate("/");
  }

  function handleLogoClicked() {
    navigate("/");
  }

  function handleOneClickSignIn() {
    loginUser(
      { email: "sourabhhaldarh@gmail.com", password: "Password@123" },
      {
        onSuccess: () => {
          login();
          navigate("/dashboard", { replace: true });
        },
      }
    );
  }

  return (
    <header className="flex items-center justify-between">
      <button onClick={handleLogoClicked}>
        <img src={Logo} alt="logo" className="w-[10rem]" />
      </button>

      <div className="flex items-center gap-4">
        <button
          className="border-[#01a768] border py-[11px] px-8 font-medium"
          onClick={handleOneClickSignIn}
        >
          {isLoading ? "Signing In..." : "One Click Sign In"}
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
      </div>
    </header>
  );
}

export default Navbar;
