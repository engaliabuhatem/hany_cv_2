import Marquee from "react-fast-marquee";

const clientData = [
  "Government of the UAE",
  "Jordan Valley Authority",
  "WATANIA Real Estate",
  "Emirates Red Crescent",
  "Halcrow (UK)",
  "Sana'a University",
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Selected clients &amp; funders</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Projects delivered with and for public bodies, development funds and
          private investors across the Middle East and Africa.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {clientData?.map((name, index) => (
            <span
              className="ps-5 sm:ps-10 md:ps-20 text-lg sm:text-2xl md:text-3xl font-semibold text-[#B8BCC2] whitespace-nowrap"
              key={index}
            >
              {name}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;