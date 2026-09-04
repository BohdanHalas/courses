import icons from 'url:../../img/icons.svg';

export default class View {
  _data;

  // constructor();
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();

    document.querySelector('.recipe').innerHTML = '';
    this._clear();
    this.insertMarkup(markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
  insertMarkup(markup) {
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderSpinner() {
    const markup = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this.insertMarkup(markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="src/img/${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this.insertMarkup(markup);
  }

  renderMessage(message = this._successMessage) {
    const markup = `<div class="recipe">
        <div class="message">
          <div>
            <svg>
              <use href="src/img/${icons}#icon-smile"></use>
            </svg>
          </div>
          <p>${message}</p>
        </div>`;
    this._clear();
    this.insertMarkup(markup);
  }
}
