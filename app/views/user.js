export default class UserView {
  /**
   * el: Element - The existing element representing one user
   * model: Object or Array - Starting value for model data
   */
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.querySelector('.user__first-name').innerText = this.model.name.first;
    this.el.querySelector('.user__last-name').innerText = this.model.name.last;
    this.el.querySelector('.user__email').innerText = this.model.email;
    this.el.querySelector('.user__address').innerText =
      `${this.model.location.street} ${this.model.location.city} ${this.model.location.state}`;
    this.el.querySelector('.user__picture').src = this.model.picture.large;
  }
}
