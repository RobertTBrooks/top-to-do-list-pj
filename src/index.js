import { SpawnNewToDo, HandleSubmit, clearAllNotes } from "./modules/new-to-do.js";
import "./style.css";

console.log("WebPack Ready!!");

document.addEventListener("DOMContentLoaded", () => {

  const newToDoBtn = document.getElementById("new-to-do");
  const cleaAll = document.getElementById("clear-all");
  const removeLine = document.querySelectorAll("remove")


  newToDoBtn.addEventListener("click", (e) => {
    e.preventDefault()
    SpawnNewToDo();
  });

  cleaAll.addEventListener("click", (e) => {
    e.preventDefault();
    clearAllNotes();

  });


  const inputs = document.getElementById("form-data");
  inputs.addEventListener("submit", (e) => {
    e.preventDefault();
    HandleSubmit(inputs);
  });
});
