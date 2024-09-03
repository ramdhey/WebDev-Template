import { useEffect } from "react";
import icon from "../../Assets/Icons/favicon.ico";

const Icon = () => {
  useEffect(() => {
    const link =
      document.querySelector("link[rel='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = icon;
    document.getElementsByTagName("head")[0].appendChild(link);
  }, []);

  return null;
};

export default Icon;
