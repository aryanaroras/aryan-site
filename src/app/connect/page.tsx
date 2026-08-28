"use client";

import { useEffect } from "react";

const LINKEDIN_URL = "https://www.linkedin.com/in/aryanaroras/";

export default function ConnectPage() {
  useEffect(() => {
    window.location.replace(LINKEDIN_URL);
  }, []);

  return (
    <p style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "40vh" }}>
      Redirecting to{" "}
      <a href={LINKEDIN_URL} style={{ color: "#38bdf8" }}>
        LinkedIn
      </a>
      ...
    </p>
  );
}
