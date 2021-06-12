/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
    "entries": [{
            id: 1,
            date: "07/24/2025",
            concept: "HTML & CSS",
            entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
            mood: "Ok"
        },
        {
            id: 2,
            date: "05/3/2021",
            concept: "javascript loop",
            entry: "We talked about how loops work in JS and did some practices on that.",
            mood: "exciting"
        },
        {
            id: 3,
            date: "05/4/2021",
            concept: "javascrit functions",
            entry: "We talked about using JS functions to add information to the objects.",
            mood: "very exciting"
        },
        {
            id: 4,
            date: "5/8/2021",
            concept: "more javascrit functions",
            entry: "We talked about how to make a createDate function in JS.",
            mood: "amazing"
        }
    ]
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
        const copyOfData = database.entries.map(entry => ({...entry }))
            // console.log(copyOfData)
        return copyOfData
    }
    // getJournalEntries()