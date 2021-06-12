// build a function that returns an HTML representation of a journal entry data structure, and render it to the DOM.

import { ? ? ? } from "./DailyJournal.js"

const container = document.querySelector("#entries")

const render = () => {
    container.innerHTML = DailyJournal()
}