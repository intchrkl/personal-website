import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NotFound from "../notFound/NotFound";


const redirectMap = {
  github: "https://github.com/intchrkl",
  linkedin: "https://linkedin.com/in/intat",
};

export default function RedirectPage() {
  const { target } = useParams();
  const [redirects, setRedirects] = useState(null);

  useEffect(() => {
    fetch("/redirects.json")
    .then(res => res.json())
    .then(data => setRedirects(data));
  }, []);

  useEffect(() => {
    if (redirects && redirects[target]) {
      window.location.replace(redirects[target]);
    }
  }, [redirects, target]);

  if (!redirects) return <h2>Loading...</h2>;

  if (!(target in redirects)) return <NotFound />

  return <h2>Redirecting...</h2>;
}
