import React from "react";
import LandingLayout from "components/layouts/LandingLayout";
import Hero from "components/sections/Hero";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="An invite-only messaging app where you can chat"
        subtitle="GuildChat is for talking about various topics that you're passionate about with friends."
        image="/landing.svg"
        ctaText="Get Started"
        ctaLink="/register"
      />
    </LandingLayout>
  );
}
