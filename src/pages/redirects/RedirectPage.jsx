import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import NotFound from "../notFound/NotFound";
import "./RedirectPage.css";

export default function RedirectPage() {
  const { target } = useParams();
  const [redirects, setRedirects] = useState(null);
  const spinnerRef = useRef(null); // 🔧 Add ref

  useEffect(() => {
    fetch("/redirects.json")
      .then((res) => res.json())
      .then((data) => setRedirects(data));
  }, []);

  useEffect(() => {
    if (spinnerRef.current) {
      animate(
        spinnerRef.current,
        { rotate: 360 },
        {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }
      );
    }
  }, [redirects]);

  useEffect(() => {
    if (redirects && redirects[target]) {
      const timeout = setTimeout(() => {
        window.location.replace(redirects[target]);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [redirects, target]);

  if (!redirects) {
    return (
      <div className="container">
        <div className="content">
          <h2 className="redirect-text">Redirecting...</h2>
          <div className="spinner" ref={spinnerRef}></div>
        </div>
      </div>
    );
  }

  if (!(target in redirects)) return <NotFound />;

  return (
    <div className="container">
      <div className="content">
        <p className="redirect-text">Redirecting...</p>
        <div className="spinner" ref={spinnerRef}></div>
      </div>
    </div>
  );
}
