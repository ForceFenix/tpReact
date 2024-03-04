import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="footer--left">
                        <p>© 2024 CI SueñoStereo, Inc</p>
                    </div>
                    <div className="footer--right">
                        <a href="https://www.instagram.com/stereo_dream.exe/" target='_blank'><i className="bi bi-instagram"></i></a>
                        <a href="https://github.com/ForceFenix" target='_blank'><i className="bi bi-github"></i></a>
                        <a href="https://wa.me/1131054277" target='_blank'><i className="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export { Footer }