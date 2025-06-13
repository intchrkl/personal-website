import { useParams } from "react-router-dom";
import { useEffect } from "react";

const redirectMap = {
  github: "https://github.com/intchrkl",
  linkedin: "https://linkedin.com/in/intat",
};

export default function RedirectPage() {
  const { target } = useParams();

  useEffect(() => {
    const url = redirectMap[target];
    if (url) {
      window.location.replace(url);
    }
  }, [target]);

  return <h2>Redirecting...</h2>;
}
