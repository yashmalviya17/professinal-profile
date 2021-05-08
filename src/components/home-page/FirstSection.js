import React from "react";

const FirstSection = () => {
  const scrollTo = () => {
    const innerHeight = window.innerHeight + 20;
    window.scrollTo({ top: innerHeight, behavior: "smooth" });
  };

  return (
    <section className="main-section-hero">
      <div className="main-div-hero">
        <h1>Professional Profile</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          numquam nihil consequatur tempore voluptates esse perspiciatis
          eligendi soluta aperiam voluptas, rem natus aut? Minima nesciunt
          temporibus obcaecati illum, officia porro.
        </p>
        <button onClick={scrollTo}> Get Started </button>
      </div>
    </section>
  );
};

export default FirstSection;
