import React from 'react'

const TrelloContext = React.createContext({
    items: [],
    addCard: (card) => {},
    addTask: (task) => {},
    removeTask: (id) => {},
    dragCard: (result) => {},
    dragTask: (result) => {},
    dragTaskToOtherCard: (result) => {}
})
export default TrelloContext