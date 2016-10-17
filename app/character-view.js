export default function characterView(data) {
  // Element Setup
  // <div class="character">
  //   <p class="character__name"></p>
  //   <p class="character__profession"></p>
  //   <p class="character__age"></p>
  // </div>
  const el = document.createElement('div');
  el.classList.add('character');
  el.innerHTML = `
    <p class="character__name"></p>
    <p class="character__profession"></p>
    <p class="character__age"></p>`;

  // Element Filling - rendering
  el.querySelector('.character__name').innerText = `${data.first} ${data.last}`; 'Olivia Dunham';
  el.querySelector('.character__profession').innerText = data.profession;
  el.querySelector('.character__age').innerText = data.age;

  return el;
}
