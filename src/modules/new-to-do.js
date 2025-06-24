import "../style-sheets/new-to-do.css"
import { MakeNewNote } from "./NewNote.js";

let notes = [];

let id = 1;
const popUp = document.getElementById("pop-up");
export function SpawnNewToDo() {

  PopUp()

}

function PopUp() {
  popUp.style.display = "flex";

}

function ClosePopUP() {
  popUp.style.display = "none";
}

export function HandleSubmit(inputs) {

  const formData = new FormData(inputs);
  const text = formData.get("note-to-add");
  const newNote = new MakeNewNote(id, text);
  newNote.createSelf();
  notes.push(newNote);
  id++
  ClosePopUP();
  inputs.reset();

}

export function UpdateNotes(id) {
  for (let i = 0; i > 0; i++) {
    if (notes[i].id === id) {
      notes[i].pop();
    }
  };
}

export function clearAllNotes() {
  notes.forEach(note => note.Clear());
  notes.length = 0;
}

