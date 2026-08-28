"use client";

import { useEffect } from "react";

const LINKEDIN_PROFILE = "aryanaroras";
const LINKEDIN_URL = `https://www.linkedin.com/in/${LINKEDIN_PROFILE}/`;
const LINKEDIN_APP_URL = `linkedin://in/${LINKEDIN_PROFILE}`;
const LINKEDIN_ANDROID_INTENT =
  `intent://in/${LINKEDIN_PROFILE}#Intent;package=com.linkedin.android;scheme=linkedin;` +
  `S.browser_fallback_url=${encodeURIComponent(LINKEDIN_URL)};end`;

// This route is baked into the printed QR code, so its path must never change.
// It always redirects (currently to LinkedIn); what it redirects to can evolve.
export default function QrConnectPage() {
  useEffect(() => {
    const ua = navigator.userAgent;
    const isAndroid = /Android/i.test(ua);
    const isIOS = /iPhone|iPad|iPod/i.test(ua);

    if (isAndroid) {
      // Android intent URL: opens the LinkedIn app directly, and if it isn't
      // installed the OS itself falls back to browser_fallback_url — no timer needed.
      window.location.href = LINKEDIN_ANDROID_INTENT;
      return;
    }

    if (isIOS) {
      // iOS has no equivalent of Android's browser_fallback_url, so we try the
      // app scheme and, if the tab is still visible after a beat (meaning iOS
      // couldn't find the app to hand off to), fall back to the web profile.
      const fallbackTimer = window.setTimeout(() => {
        window.location.replace(LINKEDIN_URL);
      }, 1200);

      const onVisibilityChange = () => {
        if (document.hidden) window.clearTimeout(fallbackTimer);
      };
      document.addEventListener("visibilitychange", onVisibilityChange);

      window.location.href = LINKEDIN_APP_URL;

      return () => {
        window.clearTimeout(fallbackTimer);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }

    // Desktop: just go straight to the web profile.
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
