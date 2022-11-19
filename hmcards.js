// hmcards.js - Harmelin Media Cards made w/ CSS
const flipCard = (targetCardId) => {
  // One function to rule them (cards) all
  let targetCard = targetCardId;
  if (typeof(targetCardId) === "string") {
    targetCard = document.getElementById(targetCardId);
  }
  // TODO: Consider resetting all the other cards
  // const cards = document.getElementsByClassName('card')
  // for (let i = 0; i < cards.length; i++) {
  //   cards[i].dataset.flipped = '0'; // reset everyone
  // }
  targetCard.dataset.flipped = targetCard.dataset.flipped === '0' ? '1' : '0'
}

class HMCard extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const cardName = this.getAttribute('name');
    const cardId = `card${cardName}`.replaceAll(' ', '');
    let cardClasses = `cardFront`;
    if (this.hasAttribute('cardbg') && this.getAttribute('cardbg') !== undefined) {
      cardClasses = `cardFront ${this.getAttribute('cardbg')}`;
    }
    let rookieCard = '';
    if (this.hasAttribute('rookie') && this.getAttribute('rookie') !== undefined) {
      rookieCard = `<div class='rookie'>- Rookie Card -</div>`;
    }
    let shinyStuff = ``;
    let shinyColor = ``;
    if (this.hasAttribute('shinyColor') && this.getAttribute('shinyColor') !== undefined) {
      shinyColor = this.getAttribute('shinyColor');
    }
    if (this.hasAttribute('shiny') && this.getAttribute('shiny') !== undefined) {
      const curShiny = this.getAttribute('shiny');
      shinyStuff = `<div class='shiny2 ${curShiny}'></div><div class='shiny1 ${shinyColor}'></div>`;
    }
    let imgUrl = 'avatar.png'
    if (this.hasAttribute('img') && this.getAttribute('img') !== "undefined") {
      imgUrl = this.getAttribute('img');
      console.log('imgUrl', imgUrl);
    }
    // TODO: tabindex='0' and keyup listeners for enter/space
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event
    this.innerHTML = `<div>
      <!-- TODO: styles one day -->
      <div id=${cardId} class='card' data-flipped='1' onclick="flipCard(${cardId})">
        <div class='cardInner'>
          <div class='${cardClasses}'>
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
