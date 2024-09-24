import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.description = "Default description";
    this.imageSrc = null;
    this.link = "#";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        margin: 16px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        width: 300px;
      }
    

      .img {
        width: 220px;
        height: auto;
        display: block;
      }

      h1 {
        font-size: 1.5em;
        margin: 16px 0 8px;
      }

      p {
        font-size: 1em;
        margin-bottom: 16px;
        color: #333;
      }

    .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .card{
    background-color: powderblue;
    border-radius: 8px;
    padding: 16px;
    margin: 20px;
    border: 4px solid gray;
    width: auto;
  }

  .button{
    background-color: navy;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-size: 16px;
    padding: 8px;
    margin: 8px 16px;
  }
  .button:hover {
          background-color: #0056b3;
        }

    @media screen and (min-width: 500px) and (max-width: 800px) {
      .size {
        display: block;
      }
    }

    @media screen and (max-width: 499px),
    screen and (min-width: 801px) {
      .size {
        display: none;
      }
    }
    `;
  }

  render() {
    return html`
    <div class="container"></div>
      <div class="card">
        <img class="img" src="${this.imageSrc}" alt="${this.title}">
        <h1>${this.title}</h1>
        <p>${this.description}</p>
        <a href="${this.link}" target="_blank">
          <button class="button">Details</button>
        </a>
      </div>
  </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      imageSrc: { type: String },
      link: { type: String }
    };
  }
}


globalThis.customElements.define(MyCard.tag, MyCard);
