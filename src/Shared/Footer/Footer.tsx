import React from 'react'

export const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 text-lg-left text-center">
                            <div className="copyright">
                                &copy; Copyright <strong>Everest4.0</strong>. All Rights Reserved
                            </div>
                            <div className="credits">
                                Designed by <a href="https://hiperbite.ao">Hiperbite</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
                                <a href="#intro" className="scrollto">Home</a>
                                <a href="#about" className="scrollto">About</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms of Use</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a></>
    )
}
