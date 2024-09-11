import React from "react";

import { NewHighlight } from "./NewHighlight";

export const Highlight = () => {
  return (
    <section id="highlight" className="highlight " style={{ height: "80vh" }}>
      <div className="row content">
        <NewHighlight />
      </div>
    </section>
  );
};
