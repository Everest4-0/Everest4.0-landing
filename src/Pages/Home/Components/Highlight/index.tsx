import React from "react";
import HighlightCaroucel from "./HiglightCarousel";
import { NewHighlight } from "./NewHighlight";

export const Highlight = () => {
  return (
    <section id="highlight" className="highlight" style={{height:'100vh'}}>
      <div className=" pt-5">

        <div className="row content">
            {/* <HighlightCaroucel/> */}
            <NewHighlight/>
        </div>
      </div>
    </section>
  );
};
