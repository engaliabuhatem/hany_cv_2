import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "HEALTHCARE",
    title: "Sana'a University Educational Hospital",
    description:
      "Design review and construction supervision for a 90,855 m² hospital campus covering civil, finishing, electrical, plumbing and mechanical works across 7 building types.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "MASTER PLANNING",
    title: "Socotra Development Master Plan",
    description:
      "Master plan for Socotra Island (3,796 km²): feasibility studies, coordination with international and private funders, growth control and environmental preservation.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "MASTER PLANNING",
    title: "Wadi Araba Integrated Master Plan",
    description:
      "Comprehensive land-use master plan for a 2,200 km² border region: 30-year infrastructure planning and investment strategy for the Jordan Valley Authority.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "HEALTHCARE",
    title: "Two Hospitals — Buro & Berbera, Somalia",
    description:
      "Design review and construction supervision for two 50-bed hospital buildings, funded by the UAE.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "HEALTHCARE",
    title: "Al Amal Cancer Hospital, Aden",
    description:
      "Design review and construction supervision for a 50,000 m² hospital with a $13M construction value.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "HOUSING",
    title: "1600 Housing Units, Balbala, Djibouti",
    description:
      "Design and quality control of 1,600 housing units for mass social housing, funded by WATANIA Real Estate (Kuwait).",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A selection of hospital, master planning and housing projects
            delivered across the Middle East and Africa.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;