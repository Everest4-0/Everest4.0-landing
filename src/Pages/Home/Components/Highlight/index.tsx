import React from "react";
import HighlightCaroucel from "./HiglightCarousel";

export const Highlight = () => {
  return (
    <section id="highlight" className="highlight">
      <div className="container pt-5">

        <div className="row content">
            <HighlightCaroucel/>
        </div>
      </div>
    </section>
  );
};
