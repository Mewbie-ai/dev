class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class='top-padding'></div>
                <nav>
                    <div class='footer-nav'>
                        <ul class='about-us'>
                            <li>
                                <h3>About Us</h3>
                            </li>
                            <li>
                                <a href='./index.html'>
                                    <h4>Who are We?</h4>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href='./about-how.html'>
                                    <h4>How do We Teach?</h4>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href='./about-differ.html'>
                                    <h4>How do We Differ from Others?</h4>
                                </a>
                                <span></span>
                            </li>
                        </ul>
                        <ul class='our-programs'>
                            <li>
                                <h3>Our Programs</h3>
                            </li>
                            <li>
                                <a>
                                    <h4>Children English</h4>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a>
                                    <h4>Academic English</h4>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a>
                                    <h4>Business English</h4>
                                </a>
                                <span></span>
                            </li>
                        </ul>
                        <ul class='upcoming-events'>
                            <li>
                                <h3>Upcoming Events</h3>
                            </li>
                            <li>
                                <a>
                                    <h4>SPELL Mid Year Registration</h4>
                                    <h5>17 Agustus 2021</h5>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a>
                                    <h4>SPELL Test Week</h4>
                                    <h5>18 Agustus 2021</h5>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a>
                                    <h4>Year End Sale</h4>
                                    <h5>19 October 2021</h5>
                                </a>
                                <span></span>
                            </li>
                        </ul>
                        <ul class='follow-us'>
                            <li>
                                <h3>Follow Us</h3>
                            </li>
                            <ul class='socials'>
                                <li>
                                    <a>
                                        <img src='img/socials/fb.svg' alt='facebook'/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src='img/socials/Icon-IG.svg' alt='instagram'/>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src='img/socials/Icon-Tiktok.svg' alt='tiktok'/>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </nav>
                <div class='copyright'>
                    <h5>Copyright 2021. Kursus Bahasa Inggris Sidoarjo | SPELL ELC. All rights reserved.</h5>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', Footer);