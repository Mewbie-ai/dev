class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class='header-container'>
                <div class='header-logo'>
                    <img src='img/Logo-SpellELC.svg' alt='header-logo'/>
                </div>
                <nav>
                    <div class='header-btns'>
                        <button class='whatsapp' href=''>
                            <h3>Whatsapp</h3>
                            <div class='whatsapp-logo'>
                                <img src='img/socials/Icon-WA.svg' alt='whatsapp-logo'/>
                            </div>
                        </button>
                        <button class='register' href=''>
                            <h3>Register Now</h3>
                        </button>
                    </div>
                        <ul>
                            <li>
                                <a href=''>
                                    <h3>Home</h3>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href=''>
                                    <h3>About Us</h3>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href=''>
                                    <h3>Programs</h3>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href=''>
                                    <h3>Tests</h3>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href=''>
                                    <h3>Events<small>&</small>Gallery</h3>
                                </a>
                                <span></span>
                            </li>
                            <li>
                                <a href=''>
                                    <h3>Contact Us</h3>
                                </a>
                                <span></span>
                            </li>
                        </ul>
                </nav>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);