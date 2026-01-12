import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ClipLoader } from "react-spinners"; // Import ClipLoader from react-spinners
import './PageNotFound.css'; // Import custom CSS
import logo from '../../assets/icon/logo2.png'; // Import the logo image


const PageNotFound = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    setIsLoading(true);
    // Simulate navigation delay (replace with actual navigation logic if needed)
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      navigate("/");
      setIsLoading(false);
    });
  };

  return (
    <>
      {isLoading && (
        <div className="loader-overlay">
          <ClipLoader color="#3b82f6" size={50} /> {/* Full-page loader */}
        </div>
      )}
      <div className="not-found-container">
        <img src={logo} className="not-found-logo" />
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Page Not Found</p>
        <Link
          to="/"
          className="not-found-link"
          onClick={(e) => {
            e.preventDefault(); // Prevent default navigation
            handleGoHome();
          }}
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};


export default PageNotFound;