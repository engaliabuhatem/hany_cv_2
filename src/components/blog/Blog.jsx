import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

// NOTE: placeholder titles — no real articles written yet.
const blogData = [
  {
    id: 1,
    image: img1,
    date: "Draft",
    comments: 0,
    title: "Lessons from 20 Years of Hospital Construction Supervision",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "Draft",
    comments: 0,
    title: "Planning for Resilience: Master Plans in Fragile Environments",
    link: "#!",
  },
  {
    id: 3,
    image: img3,
    date: "Draft",
    comments: 0,
    title: "Coordinating Disciplines on Large Hospital Campuses",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "Draft",
    comments: 0,
    title: "From Design Review to Delivery: A Project Manager's View",
    link: "#!",
  },
  {
    id: 5,
    image: img2,
    date: "Draft",
    comments: 0,
    title: "Housing Programmes at Scale: Lessons from Djibouti and Yemen",
    link: "#!",
  },
  {
    id: 6,
    image: img1,
    date: "Draft",
    comments: 0,
    title: "BOQs, Contracts and Cost Control in Multi-Year Programmes",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Placeholder articles — draft titles only. Real posts to be added.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;