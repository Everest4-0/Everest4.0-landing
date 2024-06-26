import React from 'react'
import imgService6 from '../../../assets/images/Services/service-6.png'
export const Count = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                        <img src={imgService6} alt="" className="img-fluid" />
                    </div>

                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                        <div className="content d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-md-8 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-emoji-smile"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Missão: </strong>
                                        Despertar o potencial dos profissionais e das empresas para gerar melhores resultados
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-8 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-journal-richtext"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Visão: </strong>
                                        Ser a referência na transformação das pessoas e negócios
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-8 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-award"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Valores: </strong>
                                            Parceria - Excelência -  Transparência
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-8 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-clock"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>
                                            Juntos ao topo
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
