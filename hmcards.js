// hmcards.js - Harmelin Media Cards made w/ CSS
const flipCard = (targetCardId) => {
  return // just forget it
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

const styleString = `
      * {
/*        border: 1px dashed orange;*/
      }
      body {
        background-color: black;
        color: gold;
        font-family: sans-serif;
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
        border: 2px outset limegreen;
        cursor: pointer;
        
      }
      .card[data-flipped="1"] {
/*        transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));*/
/* TODO: Needs to be quick except when flipping... transition: transform 0.76s;*/
/*animation: wobble 3s ease-in-out alternate infinite;*/
        transition: transform 0.5s;
      }
      .card[data-flipped="0"] {
        transform: rotateY(180deg) rotateY(var(--wobble-x)) rotateX(var(--wobble-y));
        transition: transform 0.5s;
      }
      /*.card[data-flipped="1"]:hover {
        transform: rotateY(15deg) scale(1.15);
        transition: transform 0.76s;
      }*/
      /*.card[data-flipped="0"]:hover {
        transform: rotateY(195deg) rotateX(15deg);
        transition: transform 0.76s;
      }*/
      .card {
/*        transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));*/
/*        animation: wobble 3s ease-in-out alternate infinite;*/
        border: 2px solid grey;
        position: relative;
        margin: 1rem;
        height: 20rem;
        width: 12rem;
        transform-style: preserve-3d;
        -webkit-perspective: 1000px;
        perspective: 1000px;
        transform: rotateY(0deg) rotateX(0deg);
/*        transition: transform 0.76s;*/
        backface-visibility: visible;
/*        -moz-backface-visibility: hidden;*/
      }
      .cardInner {
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
/*        background-color: coral;*/
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        backface-visibility: hidden;
        color: black;
/*        opacity: 0;*/
      }
      .shinyblue {
        background-color: skyblue;
      }
      .shinypurple {
        background-color: rebeccapurple;
        filter: brightness(2.0);
      }
      .cardBack {
        transform: rotateY(180deg);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: red;
/*        border: 10px dashed red;*/

      }
      .cardBackCircle {
        border-radius: 100%;
        background-color: firebrick;
        border: 2px inset crimson;
        height: 50%;
        width: 50%;
      }
      .cardFrontName {
        font-size: 1.25rem;
        padding: 0.25rem;
      }
      .cardFrontPillarTeam {
        font-family: monospace;
        font-size: 1rem;
        padding: 0.25rem;
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
        font-family: serif;
        padding: 0.25rem;
        font-size: 0.76rem;
        font-style: italic;
      }
      .shiny1, .shiny2 {
/*        background-color: red;*/
        position: absolute;
        height: 100%;
        width: 100%;
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
/*        background-position: var(--x) var(--y);*/
/*        transition: transform 0.76s;*/
/*        animation: shine 3s ease-in-out alternate infinite;*/
      }
      .subtleShine {
        background-image: linear-gradient(90deg, black, grey, black);
/*        background-image: radial-gradient(black, grey, black);*/
      }
      .hmShiny {
        background-image: linear-gradient(90deg, black, green, blue, orange, black);
/*        background-image: radial-gradient(black, green, blue, orange, black);*/
      }
      .orangeShiny {
        background-image: linear-gradient(90deg, black, orange, black);
/*        background-image: radial-gradient(black, orange, black);*/
      }
      .chelseaPurple {
        background-image: linear-gradient(90deg, black, purple, rebeccapurple, purple, black);
/*        background-image: radial-gradient(black, purple, rebeccapurple, purple, black);*/
      }
      .bigBlue {
        background-image: linear-gradient(90deg, black, teal, blue, black);
/*        background-image: radial-gradient(black, teal, blue, black);*/
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
      .trees {
        background-image: url('images/trees.png');
      }
      .foil {
        background-image: url('images/foil.jpeg');
      }
      .foil2 {
/*        background-image: url('images/foil2.jpeg');*/
/*        background-size: 25%;*/
        background-image: url('images/foil-frame.png');
      }
      .stars {
        background-image: url('images/stars.jpeg');
        background-size: 125%;
        opacity: 0.76;
      }
      .code {
        background-image: url('images/code.png');
        background-size: 95%;
      }
      .circuit {
        background-image: url('images/circuit.jpeg');
        background-size: 190%;
        opacity: 0.25;
        background-position: bottom right;
      }
      .binary {
        background-image: url('images/binary.jpeg');
        opacity: 0.16;
      }
      .cloud {
        background-image: url('images/cloud.jpeg');
        background-size: 125%;
      }
      .cloud2 {
        background-image: url('images/cloud2.jpeg');
      }
      .wave {
        background-image: url('images/wave.jpeg');
/*        background-size: 75%;*/
/*background-size: 925%;*/
      }
      .spiral {
        background-image: url('images/spiral.jpeg');
        background-size: 225%;
      }
      .circles {
        background-image: url('images/circles.jpeg');
/*        background-size: 15%;*/
      }
      .hex {
        background-image: url('images/hex.jpeg');
        background-size: 25%;
        opacity: 0.25;
      }
      .honey {
        background-image: url('images/honey.jpeg');
        background-size: 90%;
      }
      .glass {
        /* TODO: no       */
        background-image: url('images/glass.jpeg');
        /*        background-size: 200%; */
      }
      .chia {
        background-image: url('images/chia.jpeg');
        background-size: contain;

        opacity: 0.1;
      }
      .adrian {
        background-image: url('images/adrian.jpeg');
        background-size: 25%;
      }
      .snowflake {
        background-image: url('images/snowflake.jpeg');
      }
      .snowflake2 {
        background-image: url('images/snowflake2.jpeg');
      }
      .snow2 {
        background-image: url('images/snow2.jpeg');
        background-size: 525%;
      }
      .moon {
        background-image: url('images/moon.jpeg');
        background-size: 325%;
      }
      .moon2 {
        background-image: url('images/moon2.jpeg');
        background-size: 525%;
      }
      .teton {
        background-image: url('images/teton.jpeg');
        background-size: 125%;
        background-position: bottom;
      }
      .teton2 {
        background-image: url('images/teton2.jpeg');
        background-size: 525%;
      }
      .bark {
        background-image: url('images/bark.jpeg');
/*        background-size: 525%;*/
      }
      .bark2 {
        background-image: url('images/bark2.jpeg');
      }
      .tile {
        background-image: url('images/tile.jpeg');
      }
      .tile2 {
        background-image: url('images/tile2.jpeg');
        background-size: 25%;
      }
      .wood {
        background-image: url('images/wood.jpeg');
        background-size: 50%;
      }
      .wood2 {
        background-image: url('images/wood2.jpeg');
        background-size: 50%;
      }
      .scales {
        background-image: url('images/scales.jpeg');
        
      }
      .underwater {
        background-image: url('images/underwater.jpeg');
        
      }
      .snow {
        background-image: url('images/snow.jpeg');
        
      }
      .nebula {
        background-image: url('images/nebula.jpeg');
        background-size: 150%;
        background-position: bottom left;
      }
      .nebula2 {
        background-image: url('images/nebula.jpeg');
        background-size: 250%;
        background-position: bottom right;
      }
      .stucco {
        background-image: url('images/stucco.png');
      }
      .waves2 {
        background-image: url('images/waves2.png');
        background-size: 150%;
        opacity: 0.25;
      }
      .brick {
        background-image: url('images/brick.png');
        filter: blur(1px);
/*        background-size: 75%;*/
      }
      .snow2 {
        background-image: url('images/snow2.png');
      }
      .triangles {
        background-image: url('images/triangles.jpeg');
        background-size: contain;
        opacity: 0.1;
      }
      .link {
        background-image: url('https://harmelin.com/wp-content/uploads/2019/09/HM_CorporateLogo_RGB.png');
        background-size: contain;
      }
      /* Auto-Wobble...
        */
      .card[data-flipped="1"] {
          animation: wobble 3s ease-in-out alternate infinite;
        }
        .shiny1 {
          animation: shine 3s ease-in-out alternate infinite;
        }
      /* On devices with a mouse, let the relative position of the cursor wobble all the cards */
      @media (pointer: fine) {
        .card[data-flipped="1"] {
          transform: rotateY(var(--wobble-x)) rotateX(var(--wobble-y));
          transition: transform 0.1s;
        }
        .shiny1 {
          background-position: var(--x) var(--y);
        }
      }
      /* On touch (coarse) devices use a wobble animation to shimy the cards back and forth (there by showing off the holographic effects) */
      @media (pointer: coarse) {
        .card {
          transform: scale(1.5);
          margin: 5rem;
          margin-top: 10rem;
        }
        .card[data-flipped="1"] {
          animation: wobble2 3s ease-in-out alternate infinite;
        }
        .shiny1 {
          animation: shine 3s ease-in-out alternate infinite;
        }
        .explainer {
          display: none;
        }
      }
`;
class HMCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    console.log('Bro', this.attributes, this.attributes['name'], this.attributes['backgroundcolor']);
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
    let shinyColor = `subtleShine`;
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
