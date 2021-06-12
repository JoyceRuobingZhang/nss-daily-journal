import { Entries } from "./entries.js"

export const DailyJournal = () => {
    return `
        <div class="entryList">
            ${ Entries() }
        </div>
    `
}