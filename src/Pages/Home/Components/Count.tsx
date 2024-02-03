import React from 'react'

export const Count = () => {
    return (
        <section id="counts" className="counts">
            <div className="container">

                <div className="row">
                    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
                        <img src="assets/img/counts-img.svg" alt="" className="img-fluid" />
                    </div>

                    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
                        <div className="content d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-emoji-smile"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Clientes Satisfeitos: </strong>
                                            Nosso maior orgulho reside na satisfação dos nossos clientes.
                                            Cada sorriso é o reflexo do nosso comprometimento em superar
                                            expectativas e proporcionar experiências excepcionais
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-journal-richtext"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Projetos: </strong>
                                            Cada projeto que abraçamos é uma oportunidade de transformar
                                            ideias em realizações tangíveis. A diversidade e complexidade
                                            dos nossos projetos demonstram a nossa capacidade de inovação
                                            e a paixão pela excelência.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-clock"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Anos de Experiência: </strong>
                                            Nossa trajetória é um testemunho da nossa dedicação contínua.
                                            Com anos de experiência, acumulamos conhecimento, habilidades
                                            e uma compreensão profunda do mercado, permitindo-nos oferecer
                                            soluções que transcendem as expectativas."
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-6 d-md-flex align-items-md-stretch">
                                    <div className="count-box">
                                        <i className="bi bi-award"></i>
                                        <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                        <p><strong>Prêmios: </strong>
                                            Os prêmios que conquistamos são mais do que simples reconhecimentos;
                                            são validações do nosso compromisso com a excelência. Cada troféu é
                                            resultado do esforço incansável da nossa equipe e da busca incessante
                                            pela inovação."
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
