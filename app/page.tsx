import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import Navbar from "./components/nav";
import Image from "next/image";
import Footer from "./components/footer";

const HomePage = () => {

  return (
    <main className="object-contain bg-[#2a2a2a]">
      <Navbar />
      {/* Hero */}
      <section className="px-4 md:px-8 lg:px-16 py-6 flex flex-col gap-y-5 items-start md:items-center justify-center md:pt-[0px] pt-[60px] xl:min-h-screen lg:min-h-[70vh] md:min-h-[60vh] h-fit bg-[#2a2a2a]">
        <div className="mb-8">
          <h1
            className="text-[50px] leading-[80px] md:leading-[80px] font-black md:text-[65px] lg:text-[80px] xl:text-[100px] lg:leading-[140px] text-[#f8f9fa] md:text-center"
          >
            BOOK
            AND EXPLORE UPCOMING
            EVENTS
          </h1>
        </div>
        <Link href="#" className="w-full flex md:justify-center md:items-center ">
          <button
            type="button"
            className="text-[#2a2a2a] bg-[#f8f9fa] group  flex items-center justify-between rounded-full w-[90%] md:w-[50%] xl:w-[20%] py-2 px-3.5 lg:px-5 "
          >
            <span className="text-lg font-aeonikRegular text-[#2a2a2a]  font-semibold">
              Get Started
            </span>
            <div className="bg-[#2a2a2a] rounded-full flex items-center justify-center h-[50px] w-[50px] group-hover:bg-[#f8f9fa] transition-all duration-300">
              <FiArrowRight className="font-bold text-[#f8f9fa] group-hover:text-[#2a2a2a] " />
            </div>
          </button>
        </Link>
      </section>
      <section className=" bg-[url('/hero.jpg')] bg-cover bg-bottom md:bg-center bg-scroll md:bg-fixed bg-no-repeat h-fit lg:min-h-[50vh] xl:min-h-[90vh] md:min-h-[40vh]  bg-white  md:bg-cover " />
      <section className="px-4 md:px-[50px] py-[50px] lg:px-[130px] md:py-[50px] gap-y-10 bg-[#f8f9fa] flex flex-col ">
        <div className=" flex flex-col gap-y-5 items-center justify-center">
          <p className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold lg:leading-[80px] tracking-[-2px] text-[#2a2a2a]">
            Our Core Feature
          </p>
          <p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full text-[#2a2a2a]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci iure a soluta in, ea reprehenderit delectus quaerat illum laborum sunt blanditiis itaque fuga nam recusandae.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeaturesComp />
        </div>
      </section>
      <section className="px-4 md:px-[50px] py-[50px] lg:px-[130px] md:py-[50px] gap-y-10 bg-[#f8f9fa] flex flex-col ">
        <div className="flex flex-col md:flex-row gap-y-24 md:gap-x-5">
          <div className="md:[70%] lg:basis-3/4">
            <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-black md:leading-[40px] leading-[50px]  lg:leading-[70px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem quae, cumque eum officiis voluptates ut ducimus .
            </h1>
          </div>
          <div className="md:[30%] lg:basis-1/4">
            <Image
              src="/ticket.png"
              width={674}
              height={500}
              alt="image"
              className="rounded-md w-[674px] h-[500px]:"
            />
          </div>
        </div>
      </section>
      <section className="px-4 md:px-[50px] py-[50px] lg:px-[90px] md:py-[50px]  bg-[#f8f9fa] flex flex-col gap-y-10 ">
        <div className=" flex flex-col gap-y-5 items-center justify-center">
          <p className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold lg:leading-[50px] tracking-[-2px] text-[#2a2a2a] md:text-center">
            Upcoming Events
          </p>
          <p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full text-[#2a2a2a]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci iure a soluta in, ea reprehenderit delectus quaerat illum.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ">
          <EventsComp />

        </div>
      </section>
      <section className="px-4 md:px-[50px] py-[50px] lg:px-[130px] md:py-[50px] gap-y-10 bg-[#f8f9fa] flex flex-col ">
        <div className=" flex flex-col gap-y-5 items-center justify-center">
          <p className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold lg:leading-[50px] tracking-[-2px] text-[#2a2a2a] md:text-center">
            Choose From Different <br /> Categories of Event
          </p>
          <p className="text-base font-normal text-center leading-8 lg:w-[60%] md:w-[70%] w-full text-[#2a2a2a]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum adipisci iure a soluta in, ea reprehenderit delectus quaerat illum laborum sunt blanditiis itaque fuga nam recusandae.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoriesComp />
        </div>
      </section>
      <section className="flex justify-center items-center text-center px-4 md:px-[50px] py-[50px] lg:px-[130px] md:py-[50px]">
        <h1 className="text-[30px] leading-[50px] md:text-[40px] md:leading-[70px] md:w-[80%] w-full text-[#f8f9fa]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quam error voluptatem voluptatum voluptas.
        </h1>
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;







function FeaturesComp() {
  const features =
    [
      { icon: <FiArrowRight />, header: "Feature 1", text: "Description for feature 1." },
      { icon: <FiArrowRight />, header: "Feature 2", text: "Description for feature 2." },
      { icon: <FiArrowRight />, header: "Feature 3", text: "Description for feature 3." },
      { icon: <FiArrowRight />, header: "Feature 4", text: "Description for feature 4." },
      { icon: <FiArrowRight />, header: "Feature 5", text: "Description for feature 5." },
      { icon: <FiArrowRight />, header: "Feature 6", text: "Description for feature 6." },
    ]
  return (
    features.map((feature) => (
      <div
        key={feature.header}
        className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-4 shadow-2xs"
      >
        <div className="text-4xl mb-4">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.header}</h3>
        <p className="text-base text-[#2a2a2a]">{feature.text}</p>
      </div>
    ))
  )
}





function CategoriesComp() {
  const categories =
    [
      { icon: <FiArrowRight />, header: "Category 1", text: "Description for Category 1." },
      { icon: <FiArrowRight />, header: "Category 2", text: "Description for Category 2." },
      { icon: <FiArrowRight />, header: "Category 3", text: "Description for Category 3." },
      { icon: <FiArrowRight />, header: "Category 4", text: "Description for Category 4." },
      { icon: <FiArrowRight />, header: "Category 5", text: "Description for Category 5." },
      { icon: <FiArrowRight />, header: "Category 6", text: "Description for Category 6." },
    ]
  return (
    categories.map((category) => (
      <div
        key={category.header}
        className="flex items-center justify-around text-center border border-gray-200 rounded-xl p-4 shadow-2xs gap-y-4"
      >
        <div className="text-3xl p-3 text-white bg-[#2a2a2a] ">{category.icon}</div>
        <div className="flex flex-col items-center gap-y-2 text-[#2a2a2a]">
          <h3 className="text-lg font-semibold mb-2">{category.header}</h3>
          <p className="text-base">{category.text}</p>
        </div>
      </div>
    ))
  )
}


function EventsComp() {
  const features = [
    { icon: "/ticket.png", header: "Event 1", text: "Description for Event 1.", month: "Jul", date: "28" },
    { icon: "/ticket.png", header: "Event 2", text: "Description for Event 2.", month: "Jul", date: "28" },
    { icon: "/ticket.png", header: "Event 3", text: "Description for Event 3.", month: "Jul", date: "28" },
  ];

  return (
    features.map((event) => (
      <div className="relative w-full bg-gray-900 text-white rounded-lg p-4" key={event.header}>
        {/* Date Badge */}
        <div className="absolute top-[-25] left-2 bg-gray-200 text-gray-900 px-5 py-3 rounded-full text-sm font-semibold">
          <span className="block text-center">{event.date}</span>
          <span className="block text-xs">{event.month}</span>
        </div>

        {/* Image */}
        <div className="flex flex-col gap-y-3">
          <Image
            src={event.icon}
            alt={event.header}
            width={674}
            height={500}
          />

          {/* Event Title */}
          <h3 className="text-lg font-semibold">{event.header}</h3>
          <h3 className="text-base font-medium">{event.text}</h3>
        </div>
      </div>
    ))
  );
}
