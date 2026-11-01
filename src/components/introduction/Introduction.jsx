import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { motion, useScroll, useTransform } from "framer-motion";

const informationSummaryData = [
  {
    id: 1,
    title: "Years Experience",
    description: "20+",
  },
  {
    id: 2,
    title: "Major Projects",
    description: "10+",
  },
  {
    id: 3,
    title: "Countries",
    description: "7",
  },
];

const Introduction = () => {
  // Scroll progress for simple parallax on the portrait image
  const { scrollYProgress } = useScroll();
  const yTranslate = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Hani Al Sahooly
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a <span className="bg-highlight">Project Manager</span>{" "}
            and <span className="bg-highlight">Senior Architect</span> based in
            Abu Dhabi, UAE. With 20+ years in hospital, urban planning and
            infrastructure projects across the Middle East and Africa, I lead
            design review, construction supervision and delivery from concept
            to completion.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Get in Touch
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
        style={{ y: yTranslate }}
      >
        <motion.img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="Hani Al Sahooly"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </div>
  );
};

export default Introduction;