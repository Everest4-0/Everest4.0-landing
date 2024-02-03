import React from 'react'

export const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div className="container">

                <div className="section-title">
                    <h2>Serviços, Planos e Preços</h2>
                    <p>Estamos comprometidos em “Promover a melhoria contínua do
                        desempenho profissional dos jovens e a sustentabilidade dos
                        empreendedores", oferecendo serviços de mentoria para profissionais e de consultoria para empreendedores, pequenas e medias empresas.</p>
                </div>

                <div className="row">


                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                        <div className="box" data-aos="zoom-in-left" data-aos-delay="100">
                            <h6>Mentoria</h6>
                            <h3>Plano Moco</h3>
                            <h4><sup>Kz</sup>35.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Moco as sessões são individuais e realizam-se na modalidade 100% online, sendo o mínimo de 4 sessões (total Kz 140 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="box recommended" data-aos="zoom-in-left" data-aos-delay="200">
                            <h6>Mentoria</h6>
                            <h3>Plano Kilimanjaro</h3>
                            <h4><sup>Kz</sup>50.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Kilimanjaro as sessões são individuais e realizam-se na modalidade híbrida (50% online e 50% presencial), sendo o mínimo de 4 sessões (total Kz 200 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                        <div className="box" data-aos="zoom-in-left" data-aos-delay="200">
                            <h6>Mentoria</h6>
                            <h3>Plano Everest</h3>
                            <h4><sup>Kz</sup>75.000<span> / hora</span></h4>
                            <ul>
                                <li>No Plano Everest as sessões são individuais e realizam-se na modalidade 100% Presencial, sendo o mínimo de 4 sessões (total Kz 300 000,00) por Programa de Mentoria.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="box" data-aos="zoom-in-right" data-aos-delay="200">
                            <h3>Consultoria</h3>
                            <h4><sup>Kz</sup>100.000<span> / hora</span></h4>
                            <ul>
                                <li>Consutoria em Gestão empresarial, Transformação organizacional, Project Management Officer (PMO) e Gestão estratégica do capital humano.</li>
                            </ul>
                            <div className="btn-wrap">
                                <a href="#" className="btn-buy">Subscrever</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
