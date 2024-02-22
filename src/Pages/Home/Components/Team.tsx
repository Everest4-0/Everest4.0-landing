import React from "react";

const teams = [
  {
    image: "assets/img/team/team-1.jpg",
    name: "Walter White",
    occupation: "Chief Executive Officer",
    social: {
      meta: "#",
      tw: "#",
      insta: "#",
      in: "#",
    },
  },
  {
    image: "assets/img/team/team-2.jpg",
    name: "Sarah Jhonson",
    occupation: "Product Manager",
    social: {
      meta: "#",
      tw: "#",
      insta: "#",
      in: "#",
    },
  },
  {
    image: "assets/img/team/team-3.jpg",
    name: "William Anderson",
    occupation: "CTO",
    social: {
      meta: "#",
      tw: "#",
      insta: "#",
      in: "#",
    },
  },
  {
    image: "assets/img/team/team-4.jpg",
    name: "Amanda Jepson",
    occupation: "Accountant",
    social: {
      meta: "#",
      tw: "#",
      insta: "#",
      in: "#",
    },
  },
];
export const Team = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Nossa Equipa</h2>
          <p className="description">Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div className="row">
          {teams.map(({ name, occupation, social, image }, key) => {
            return (
              <div
                className="col-lg-3 col-md-6 d-flex align-items-stretch"
                key={key}
              >
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img src={image} className="img-fluid" alt="" />
                    <div className="social">
                      <a href={social?.tw} target="_blank">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href={social?.meta} target="_blank">
                        <i className="bi bi-facebook"></i>
                      </a>
                      <a href={social?.insta} target="_blank">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href={social?.in} target="_blank">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{name}</h4>
                    <span>{occupation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
