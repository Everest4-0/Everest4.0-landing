import React from "react";
import HighlightCaroucel from "./HiglightCarousel";
import { NewHighlight } from "./NewHighlight";

export const Highlight = () => {
  return (
    <section id="highlight" className="highlight " style={{ height: "80vh" }}>
      <div className="row content">
        {/* <HighlightCaroucel/> */}
        <NewHighlight />
      </div>
    </section>
  );
};
