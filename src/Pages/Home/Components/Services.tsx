import React, { useState } from "react";
//import "./Services.css"

import imgService1 from "../../../../public/assets/img/more-services-1.jpg";
import imgService2 from "../../../../public/assets/image/more-services-2.jpg";
import imgService3 from "../../../../public/assets/image/more-services-3.jpg";
import imgService4 from "../../../../public/assets/image/more-services-4.jpg";

import MyTab from "./Tabs";
import { MediaType } from "./Highlight/NewHighlight";
import useApi from "../../../hooks/useApi";

/* {
        title: "Consultoria e Formação",
        image: imgService3,
        items: [
          "Corporate Governance",
          "Planeamento estratégico e controlo de gestão",
          "Finanças empresariais ",
          "Gestão estratégica do capital humano",
          "Transformação e inovação organizacional ",
          "Direito empresarial",
        ],
      } */

export type ServiceDescriptionType = {
  id?: number;
  description: string;
};
export type ServiceDetailType = {
  index?: string;
  value?: string;
  id?: number;
  title: string;
  image: MediaType;
  types: ServiceDescriptionType[];
};
export type ServiceType = {
  id: number;
  attributes: {
    description: string;
    details: ServiceDetailType[];
  };
};

const _data: ServiceType = {
  id: 1,
  attributes: {
    description:
      "Prestamos serviços de mentoria para profissionais, consultoria e formação para empreendedores, pequenas e médias empresas.",
    details: [
      {
        title: "Mentoria",
        image: {
          data: {
            attributes: {
              url: imgService1,
              mime: "",
              name: "",
            },
          },
        },
        types: [
          { description: "Integração profissional" },
          { description: "Desenvolvimento profissional" },
          { description: "Liderança estratégica" },
          { description: "Finanças pessoais" },
        ],
      },
    ],
  },
};

export const Services = () => {
  const { data, error, loading } = useApi<ServiceType[]>({
    endpoint: "/services?populate[details][populate]=image,types,types.image",
    method: "GET",
  });

  return (
    <section
      id="services"
      className="services"
      style={{ paddingTop: 200, background: "#eeeeee65" }}
    >
      <div className="container">
        {data && (
          <>
            <div className="section-title" data-aos="fade-up">
              <h2>Serviços</h2>
              <p className="description">{data[0].attributes.description}</p>
            </div>

            <div className="row">
              <div className="col-md-12">
                <MyTab data={data[0].attributes.details} />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
