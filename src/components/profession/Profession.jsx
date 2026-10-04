import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Design Review & Construction Supervision",
    description:
      "Architectural design review, redesign and on-site supervision of construction and renovation works — from civil and finishing through electrical, plumbing and mechanical scope.",
  },
  {
    id: 2,
    title: "Project & Programme Management",
    description:
      "Planning, scheduling, work distribution, quality control, tendering and financial/cost control across multi-year, multi-country programmes.",
  },
  {
    id: 3,
    title: "Urban & Master Planning",
    description:
      "Feasibility studies, master plans and land-use/infrastructure planning for large-scale developments — including island and regional master plans.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Over more than 20 years I've built my practice around three areas —
            design review and construction supervision, project and programme
            management, and urban and master planning.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I work across the full project lifecycle, from architectural design
            and landscaping through administration, BOQs, contracts and cost
            estimation to on-site delivery.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Get in Touch
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;