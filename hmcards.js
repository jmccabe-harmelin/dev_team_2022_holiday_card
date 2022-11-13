// yooo - web components
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
// 
// Web Components
// 
class HMCard extends HTMLElement {
  constructor() {
    super();
  }
  flipCard() {
    // We Never get here...
    alert('flip-a-delphia')
    this.dataset.flipped = this.dataset.flipped === '0' ? '1' : '0'
  }
  connectedCallback() {
    const cardId = `card${this.getAttribute('name')}`
    let cardClasses = `cardFront`;
    if (this.hasAttribute('cardbg')) {
      cardClasses = `cardFront ${this.getAttribute('cardbg')}`;
    }
    this.innerHTML = `<div id=${cardId} class='card' data-flipped='0' onclick="flipCard(${cardId})">
    <div class='cardInner'>
      <div class='${cardClasses}'>
        <div class='cardFrontName'>
          ${this.getAttribute('name')}
        </div>
          <img class='cardFrontImage' src='images/${this.getAttribute('img')}' />
        <div class='cardFrontNotes'>
          ${this.getAttribute('notes')}
        </div>
      </div>
      <div class='cardBack'>
        <div class='cardBackCircle'></div>
      </div>
    </div>
  </div>`;
  }
  
}
customElements.define('hm-card', HMCard);
