import BackendExperience from "../components/Homepage/BackendExperience/BackendExperience";
import FrontendExperience from "../components/Homepage/FrontendExperience/FrontendExperience";
import Hero from "../components/Homepage/Hero/Hero";

export default function Homepage() {
  return (
    <>
      <Hero />
      <FrontendExperience />
      <BackendExperience />
    </>
  );
}
