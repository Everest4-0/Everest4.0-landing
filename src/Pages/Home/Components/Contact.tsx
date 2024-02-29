import React, { useState } from 'react'
import contactCenterImage from '../../../assets/images/home/contact-center.jpeg'
import axios from 'axios';
export const Contact = () => {
    const [form, setForm] = useState<any>({})
    const [error, setError] = useState<any>({})
    const handleFormChange = (i: any) => setForm({ ...form, ...i })
    const handleSubmit = (e: any) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': '*/*' },
            body: JSON.stringify(form)
        };
        fetch('http://localhost:7000/mailer.php', requestOptions)//.then()
            /*axios.post('http://localhost:7000/mailer.php',
                form,
                {
                    headers: {
                        // 'application/json' is the modern content-type for JSON, but some
                        // older servers may use 'text/json'.
                        // See: http://bit.ly/text-json
               //         'content-type': 'text/json'
                    }
                })*/
            .then(function (response: any) {
                alert('success: '+JSON.stringify(response))
                console.log(response);
            })
            .catch(
                function (response: any) {
                    alert('error: '+JSON.stringify(response))
                    setError(response);
                });


        e.preventDefault()
    }
    return (

        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title" data-aos="fade-up">
                    <h2>Contactos</h2>
                </div>

                <div className="row">


                    <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
                        <div className="info">
                            <div>
                                <i className="ri-map-pin-line"></i>
                                <p>Urbanização Nova Vida, rua 3A, casa n.º 16, Luanda-Angola</p>
                            </div>

                            <div>
                                <i className="ri-mail-send-line"></i>
                                <p>everest40lda@gmail.com</p>
                            </div>

                            <div>
                                <i className="ri-phone-line"></i>
                                <p> +244 935462360</p>
                            </div>

                        </div>
                        <hr />
                        <div className="contact-about">
                            <h3>Everest4.0</h3>

                            <div className="social-links">
                                <a target='_blank' href="https://www.youtube.com/@Everest-ConsultoriaeGestaodeCa" className="youtube"><i className="bi bi-youtube"></i></a>
                                {/*<a href="#" className="facebook"><i className="bi bi-facebook"></i></a>*/}
                                <a target='_blank' href="https://www.instagram.com/everest4.0" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a target='_blank' href="https://www.linkedin.com/company/everest-consultoria-e-gest%C3%A3o-de-carreiras" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
                        <pre>
                            {/*JSON.stringify(form, null, 1)}
                            {JSON.stringify(error, null, 1)*/}
                        </pre>

                        <form action="#" method="post" role="form" className="php-email-form">
                            <div className="form-group">
                                <input onChange={(e: any) => handleFormChange({ name: e.currentTarget.value })} type="text" name="name" className="form-control" id="name" placeholder="Seu Nome" required />
                            </div>
                            <div className="form-group">
                                <input onChange={(e: any) => handleFormChange({ email: e.currentTarget.value })} type="email" className="form-control" name="email" id="email" placeholder="Seu Email" required />
                            </div>
                            <div className="form-group">
                                <input onChange={(e: any) => handleFormChange({ subject: e.currentTarget.value })} type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" required />
                            </div>
                            <div className="form-group">
                                <textarea onChange={(e: any) => handleFormChange({ message: e.currentTarget.value })} className="form-control" name="message" rows={5} placeholder="Escreva aqui a sua mensagem" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Sua mensagem foi enviada com sucesso, Obrigado!</div>
                            </div>
                            <div onClick={handleSubmit} className="text-center"><button type="submit">Enviar</button></div>
                        </form>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100" >
                        <img src={contactCenterImage} style={{ width: '100%' }}></img>

                    </div>
                </div>

            </div>
        </section>
    )
}
