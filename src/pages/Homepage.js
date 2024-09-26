import { useEffect } from "react";
import BackendExperience from "../components/Homepage/BackendExperience/BackendExperience";
import FrontendExperience from "../components/Homepage/FrontendExperience/FrontendExperience";
import Hero from "../components/Homepage/Hero/Hero";
import HomeToProjects from "../components/Homepage/HomeToProjects/HomeToProjects";
import Testimonials from "../components/Homepage/Testimonials/Testimonials";

export default function Homepage() {
  useEffect(function () {
    window.scrollTo({
      top: 0
    })
  },[])
  return (
    <>
      <Hero />
      <FrontendExperience />
      <BackendExperience />
      <HomeToProjects />
      <Testimonials />
    </>
  );
}
