import { UpdateNotes } from "./new-to-do.js";

export class MakeNewNote {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.removeBtn = null;
    this.addItem = null;
    this.item = null;
    this.removeSelf = null;

  }

  createSelf() {
    this.item = `
        <span id="${this.id}" class="note">
          <span class="li-span">
          </span>
          <li></li>
          <span class="note-text">
            <p>${this.text}</p>
          </span>
            <button class="remove" name="${this.id}" type="button">X</button>
        </span>
`
    this.addItem = document.getElementById("contents");
    this.addItem.insertAdjacentHTML("beforeend", this.item);
    this.removeBtn = document.getElementsByClassName("remove").namedItem(this.id)
    this.removeBtn.addEventListener("click", (this._onRemoveClick));
    this.removeSelf = document.getElementById(`${this.id}`);

  }
  _onRemoveClick = (e) => {
    e.preventDefault();

    this.Clear();
  };

  Clear() {
    console.log("Clicked?")
    if (this.removeSelf !== null) {

      this.removeSelf.remove();
      this.removeBtn.removeEventListener("click", (this._onRemoveClick));
      UpdateNotes(this.id);
    }
  }
}
