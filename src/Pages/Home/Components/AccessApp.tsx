import React from "react";
import styled from "styled-components";
import imageBg from "../../../assets/images/home/fundo-de-paisagem-de-montanha-everest.jpg";
import imageD1 from "../../../assets/images/home/device1.png";
import imageD2 from "../../../assets/images/home/device2.png";
import imageD3 from "../../../assets/images/home/device3.png";

const Section = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  height: 120vh;
  background-position: center;
  padding-top: 200px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${imageBg});
    text-align: center;
  color: #fff;
  h2 {
    color: #fff;
  }
  overflow: scroll;
`;

export const AccessApp = () => {
  return (
    <Section id="access_app" className="accessApp border">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nossa App</h2>
        </div>

        <div className="row content "  >
          <div className="col-lg-6" style={{display: "flex", flexDirection: "column",justifyItems: 'center', justifyContent: "center", alignItems: 'center'}} data-aos="fade-up" data-aos-delay="150">
            <div
              className="image "
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src={imageD2} alt="" className="img-fluid img-thumbnail bg-transparent border-0" />
            </div>
            <h1>
              Brevemente para o download!
            </h1>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            style={{display: "flex", flexDirection: "column",justifyItems: 'center', justifyContent: "center", alignItems: 'center'}}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div
              className="image "
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <img src={imageD3} alt="" className="img-fluid img-thumbnail bg-transparent border-0" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
