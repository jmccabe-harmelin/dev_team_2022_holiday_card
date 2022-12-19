// hmcards.js - Harmelin Media Cards made w/ CSS
const flipCard = (targetCardId) => {
  // return // just forget it
  // One function to rule them (cards) all
  let targetCard = targetCardId;
  if (typeof(targetCardId) === "string") {
    targetCard = document.getElementById(targetCardId);
  }
  console.log('targetCard', targetCard);
  // TODO: Consider resetting all the other cards
  // const cards = document.getElementsByClassName('card')
  // for (let i = 0; i < cards.length; i++) {
  //   cards[i].dataset.flipped = '0'; // reset everyone
  // }
  targetCard.dataset.flipped = targetCard.dataset?.flipped === '0' ? '1' : '0'
}

/*
TODO: Establish Card interaction basics
- mobile friendly
- touch friendly
- focus in on 1 card
- disable animations

- 
*/



/* Mouse Interaction Code

  transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));
  transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));
  background-position: var(--x) var(--y);
  transition: transform 0.76s;
  animation: shine 3s ease-in-out alternate infinite;
-- On devices with a mouse, let the relative position of the cursor wobble all the cards
    @media (pointer: fine) {
      .card[data-flipped="1"] {
        transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));
        transition: transform 0.1s;
      }
      .shiny1 {
        background-position: var(--x) var(--y);
      }
      

*/

const styleString = `
      body {
        background-color: black;
        color: gold;
        font-family: 'Gill Sans', 'Gill Sans MT', 'Cabin', sans-serif;
      }
      .pageheader {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .cardHolder {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100vw;
        justify-content: center;
        align-items: center;
      }
      .card:hover {
        cursor: pointer;
      }
      .card {
        position: relative;
        margin: 3em;
        height: 20rem;
        width: 12rem;
        transform-style: preserve-3d;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        transform: rotateY(0deg) rotateX(0deg);
        backface-visibility: visible;
      }
      .cardInner {
        border: 2px solid grey;
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        backface-visibility: visible;
        position: absolute;
        height: 100%;
        width: 100%;
      }
      .cardFront, .cardBack {
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
      }
      .cardFront {
        transform: rotateY(0deg);
        position: absolute;
        height: 100%;
        width: 100%;
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        color: black;
      }
      .cardBack {
        transform: rotateY(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: red;
      }
      .cardBackCircle {
        border-radius: 100%;
        background-color: firebrick;
        border: 2px inset crimson;
        height: 50%;
        width: 50%;
      }
      .cardFrontName {
        font-size: 1.25em;
        padding: 0.25rem;
        font-weight: 600;
      }
      .cardFrontPillarTeam {
        font-size: 0.75rem;
        padding: 0.25rem;
        letter-spacing: 0.2rem;
      }
      .rookie {
        border: 1px outset green;
        background-color: limegreen;
        font-size: 0.75rem;
        float: right;
        padding: 0.2rem;
        margin: 0.2rem;
        border-radius: 0.5rem;
        position: absolute;
        right: 0;
      }
      .cardFrontImage {
        width: 100%;
        min-height: 1rem;
        aspect-ratio: 1 / 1;
      }
      .cardFrontNotes {
        padding: 0.25rem;
        font-size: 0.976rem;
        font-style: italic;
        font-weight: 300;
      }
      .shiny1, .shiny2 {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      @keyframes shineBig {
        from {
          background-position: 20% 40%;
        } to {
          background-position: 80% 60%;
        }
      }
      @keyframes shine {
        from {
          background-position: 0% 50%;
        } to {
          background-position: 100% 50%;
        }
      }
      @keyframes wobble {
        from {
          transform: rotateY(-30deg) scale(1);
        } to {
          transform: rotateY(30deg) scale(1);
        }
      }
      @keyframes flipOnce {
        from {
          transform: rotateX(30deg);
        } to {
          transform: rotateX(360deg);
        }
      }
      @keyframes flipOnce2 {
        from {
          transform: scale(1.25);
        } to {
          transform: scale(1);
        }
      }
      @keyframes wobbleBig {
        from {
          transform: rotateY(-30deg) scale(1.25);
        } to {
          transform: rotateY(30deg) scale(1.25);
        }
      }
      @keyframes wobble2 {
        from {
          transform: rotateY(-30deg) rotateX(-2deg) scale(1.5);
        } to {
          transform: rotateY(30deg) rotateX(2deg) scale(1.5);
        }
      }
      .shiny1 { /* Specular */
        background-image: linear-gradient(98.6deg ,black, green, blue, orange, black);
        background-image: linear-gradient(98.6deg ,black, grey, black);
        mix-blend-mode: color-dodge;
        background-attachment: fixed;
        background-size: 200%;
        opacity: 0.46;
      }
      .shiny2 { /* Mask */
        mix-blend-mode: multiply;
        /*mix-blend-mode: color;
        mix-blend-mode: luminosity;*/
        background-image: url('images/fabric.jpeg');
        background-size: cover;
        background-position: center;
        background-clip: border-box;
        opacity: 0.46;
      }
      
      .link {
        background-image: url('https://harmelin.com/wp-content/uploads/2019/09/HM_CorporateLogo_RGB.png');
        background-size: contain;
      }
      
      .card[data-flipped="1"] {
        transform: scale(1);
      }
      .card[data-flipped="1"] .cardInner {
        animation: flipOnce2 1s ease-in-out;
      }
      .card[data-flipped="0"] {
        animation: wobbleBig 3s ease-in-out alternate infinite;
      }
      .card[data-flipped="0"] .cardInner {
        animation: flipOnce 1s ease-in-out;
      }
      .card[data-flipped="0"] .shiny1 {
        animation: shineBig 3s ease-in-out alternate infinite;
      }
`;
class HMCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('HMCard connectedCallback', this.attributes, this.attributes['name'], this.attributes['backgroundcolor']);
    const cardName = this.getAttribute('name');
    const cardId = `card${cardName}`.replaceAll(' ', '');
    let cardClasses = `cardFront`;
    // if (this.hasAttribute('cardbg') && this.getAttribute('cardbg') !== 'undefined') {
    //   cardClasses = `cardFront ${this.getAttribute('cardbg')}`;
    // }
    let rookieCard = '';
    if (this.hasAttribute('rookie') && this.getAttribute('rookie') !== 'undefined') {
      rookieCard = `<div class='rookie'>- Rookie Card -</div>`;
    }
    let shinyStuff = `<div id='${cardId}Shiny2' class='shiny2'></div><div id='${cardId}Shiny1' class='shiny1'></div>`;
    let shinyColor = `white`;
    if (this.hasAttribute('shinyColor') && this.getAttribute('shinyColor') !== 'undefined') {
      shinyColor = this.getAttribute('shinyColor');
    }
    // if (this.hasAttribute('shiny') && this.getAttribute('shiny') !== 'undefined') {
    //   const curShiny = this.getAttribute('shiny');
    //   shinyStuff = `<div id='${cardId}Shiny2' class='shiny2 ${curShiny}'></div><div id='${cardId}Shiny1' class='shiny1 ${shinyColor}'></div>`;
    // }
    let imgUrl = 'avatar.png'
    if (this.hasAttribute('img') && this.getAttribute('img') !== "undefined") {
      imgUrl = this.getAttribute('img');
    }
    const bgColor = this.hasAttribute('backgroundcolor') && this.getAttribute('backgroundcolor') !== "undefined"
      ? this.getAttribute('backgroundcolor')
      : false;
    console.log(cardId, bgColor);
    const bgImage = this.hasAttribute('backgroundimage') && this.getAttribute('backgroundimage') !== "undefined"
      ? this.getAttribute('backgroundimage')
      : false;
    const bgSize = this.hasAttribute('backgroundsize') && this.getAttribute('backgroundsize') !== "undefined"
      ? this.getAttribute('backgroundsize')
      : false;
    const bgPosition = this.hasAttribute('backgroundposition') && this.getAttribute('backgroundposition') !== "undefined"
      ? this.getAttribute('backgroundposition')
      : false;
    const bgOpacity = this.hasAttribute('opacity') && this.getAttribute('opacity') !== "undefined"
      ? this.getAttribute('opacity')
      : 'center';
      console.log('bgOpacity');
      console.log(bgOpacity);
      console.log(typeof(bgOpacity));
    const shinyGradientColors = this.hasAttribute('shinycolor') && this.getAttribute('shinycolor') !== "undefined"
      ? this.getAttribute('shinycolor')
      : 'gray';
    console.log(shinyGradientColors);
    // TODO: tabindex='0' and keyup listeners for enter/space
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event

    this.innerHTML = `<div>
      <!-- TODO: styles one day -->
      <style type='text/css'>
        ${styleString}
        #${cardId}Front {
          ${bgColor ? `background-color: ${bgColor};` : ''}
          background-color: ${bgColor ? bgColor : 'coral'};
        }
        #${cardId}Shiny2 {
          background-clip: border-box;
          ${bgImage ? `background-image: url(${bgImage});` : ''}
          ${bgSize ? `background-size: ${bgSize};` : ''}
          background-position: ${bgPosition};
          opacity: ${bgOpacity ? bgOpacity : 0.5};
        }
        #${cardId}Shiny1 {

          background-image: linear-gradient(98.6deg, black, ${shinyGradientColors}, black);
          mix-blend-mode: color-dodge;
          background-attachment: fixed;
          background-size: 200%;
          opacity: 0.5;
        }
      </style>
      <div id=${cardId} class='card' data-flipped='1' onclick="flipCard(${cardId})">
        <div class='cardInner'>
          <div id=${cardId}Front class='${cardClasses}'>
            ${shinyStuff}
            <div class='cardFrontName'>
              ${cardName}
              ${rookieCard}
            </div>
            <img class='cardFrontImage' src='images/${imgUrl}' alt='A photo of ${cardName}' />
            <div class='cardFrontPillarTeam'>
              ${this.getAttribute('pillar')} - ${this.getAttribute('team')}
            </div>
            <div class='cardFrontNotes'>
              ${this.getAttribute('notes')}
            </div>
          </div>
          <div class='cardBack'>
            <div class='cardBackCircle'></div>
          </div>
        </div>
      </div>
    </div>`;
  }
}
customElements.define('hm-card', HMCard);
