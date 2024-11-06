'use strict';

// Header Component
class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <nav>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Footer Component
class FooterComponent extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');
    template.innerHTML = `
      <footer>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul class="social-row">
          <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
          <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
          <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
        </ul>
      </footer>
    `;

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

// Define the custom elements
customElements.define('header-component', HeaderComponent);
customElements.define('footer-component', FooterComponent);
