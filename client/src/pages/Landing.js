import React, { useEffect } from "react";
import LandingLayout from "components/layouts/LandingLayout";
import Hero from "components/sections/Hero";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Chat about topics that you're passionate about in invite-only chatrooms"
        subtitle="The easiest way to connect with other people with niche interests online."
        ctaText="Get Started"
        ctaLink="/register"
        demoText="Try Demo"
      />
    </LandingLayout>
  );
}
