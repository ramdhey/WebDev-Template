import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleTab = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    // Mengambil nama halaman dari path (tanpa '/')
    const pageName = pathname.substring(1) || "Get Started";
    const formattedPageName = pageName
      .split("/")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    // Set title menjadi nama halaman
    document.title = formattedPageName || "React App";
  }, [location]);

  return null;
};

export default TitleTab;
