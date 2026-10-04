import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message: "Funding for hospital construction in Somalia",
    quote: `Government of the UAE — funded the construction of two 50-bed hospital buildings in Buro and Berbera.`,
    name: "Government of the UAE",
    designation: "Funder — Hospital construction, Somalia",
  },
  {
    message: "Comprehensive land-use master plan for a 2,200 km² border region",
    quote: `Jordan Valley Authority — client for the Wadi Araba Integrated Master Plan, including 30-year infrastructure planning and investment strategy.`,
    name: "Jordan Valley Authority",
    designation: "Client — Wadi Araba Integrated Master Plan, Jordan",
  },
  {
    message: "Funding for the 1,600 housing units programme in Djibouti",
    quote: `WATANIA Real Estate — funded 1,600 housing units for mass social housing in Balbala, Djibouti.`,
    name: "WATANIA Real Estate",
    designation: "Funder — Housing programme, Kuwait",
  },
  {
    message: "Housing projects delivered in Yemen",
    quote: `Emirates Red Crescent — 800 mud housing units in Tarim-Hadramout and 200 stone/concrete units in Mukalla.`,
    name: "Emirates Red Crescent",
    designation: "Client — Housing projects, Yemen",
  },
  {
    message: "Aden City Master Plan Update",
    quote: `Halcrow (UK) — partner on revising and updating the Aden City Master Plan, including building stock analysis and heritage preservation.`,
    name: "Halcrow (UK)",
    designation: "Partner — Aden City Master Plan Update, Yemen",
  },
  {
    message: "Educational hospital campus in Sana'a",
    quote: `Sana'a University — client for the 90,855 m² educational hospital campus, covering design review and construction supervision across 7 building types.`,
    name: "Sana'a University",
    designation: "Client — Educational hospital campus, Yemen",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Clients &amp; Funders</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;