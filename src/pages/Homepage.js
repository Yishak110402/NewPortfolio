import { useEffect } from "react";
import BackendExperience from "../components/Homepage/BackendExperience/BackendExperience";
import FrontendExperience from "../components/Homepage/FrontendExperience/FrontendExperience";
import Hero from "../components/Homepage/Hero/Hero";
import HomeToProjects from "../components/Homepage/HomeToProjects/HomeToProjects";
import Testimonials from "../components/Homepage/Testimonials/Testimonials";
import AppDevelopmentExperience from "../components/Homepage/AppDevelopmentExperience/AppDevelopmentExperience";

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
      <AppDevelopmentExperience />
      <HomeToProjects />
      <Testimonials />
    </>
  );
}
