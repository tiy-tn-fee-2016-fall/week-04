export default class CharacterView {
  constructor(model) {
    this.model = model;

    // Element Setup
    // <div class="character">
    //   <p class="character__name"></p>
    //   <p class="character__profession"></p>
    //   <p class="character__age"></p>
    // </div>
    this.el = document.createElement('div');
    this.el.classList.add('character');
    this.el.innerHTML = `
      <p class="character__name"></p>
      <p class="character__profession"></p>
      <p class="character__age"></p>`;
  }

  render() {
    // Element Filling - rendering
    this.el.querySelector('.character__name').innerText = `${this.model.first} ${this.model.last}`;
    this.el.querySelector('.character__profession').innerText = this.model.profession;
    this.el.querySelector('.character__age').innerText = this.model.age;
  }
}
