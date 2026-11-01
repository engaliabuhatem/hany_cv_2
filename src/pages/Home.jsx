   import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";
import AnimatedSection from "../components/common/AnimatedSection";

const Home = () => {
  return (
    <div className="relative">
      {/* Header 3‑D effect removed */}
      <AnimatedSection>
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.2}>
      <Portfolio />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
      <div className="bg-[#252d32]">
        <WorkTogether />
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.4}>
      <div className="blog-background">
        <Blog />
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.5}>
      <div className="bg-soft-white">
        <Profession />
      </div>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.6}>
      <HappyClients />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.7}>
      <Testimonial />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.8}>
      <Contact />
      </AnimatedSection>
    </div>
  );
};

export default Home;

