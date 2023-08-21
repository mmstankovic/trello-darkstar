import { useReducer } from "react"
import TrelloContext from "./trello-context"

const defaultState = {
  items: [
    {
      title: "To Do",
      id: 'c1',
      cards: [
        {
          id: 't1',
          text: "we created a static list and a static card"
        },
        {
          id: 't2',
          text: "we used a material UI components"
        }
      ]
    },
    {
      title: "In Progress",
      id: 'c2',
      cards: [
        {
          id: 't3',
          text: "we will create our first reducer"
        },
        {
          id: 't4',
          text: "and render many cards on our list with static data"
        },
        {
          id: 't5',
          text:
            "link tags for roboto font and icons..."
        },
        {
          id: 't6',
          text:
            "we will also add deleting cards functionality"
        }
      ]
    }
  ]
}

const TrelloReducer = (state, action) => {
  if (action.type === 'DRAG_TASK') {
    const result = action.result

    const clonedItems = [...state.items]
    const list = clonedItems.find((card) => card.id === result.source.droppableId)

    const task = list.cards.splice(result.source.index, 1)
    list.cards.splice(result.destination.index, 0, ...task)

    return {
      items: clonedItems
    }

  }

  if (action.type === 'DRAG_TASK_TOC') {
    const result = action.result
    const clonedItems = [...state.items]

    const list = clonedItems.find((card) => card.id === result.source.droppableId)
    const task = list.cards.splice(result.source.index, 1)

    const newLocation = clonedItems.find((card) => card.id === result.destination.droppableId)
    newLocation.cards.splice(result.destination.index, 0, ...task)

    return {
      items: clonedItems
    }

  }

  if (action.type === 'DRAG_CARD') {
    const result = action.result

    const itemsClone = Array.from(state.items)
    const [reorderedItem] = itemsClone.splice(result.source.index, 1)

    itemsClone.splice(result.destination.index, 0, reorderedItem)

    return {
      items: itemsClone
    }

  }

  if (action.type === 'ADD_CARD') {
    const newCardItem = { ...action.card }
    const updatedItems = state.items.concat(newCardItem)

    return {
      items: updatedItems
    }
  }
  if (action.type === 'ADD_TASK') {
    const newTaskItem = { ...action.task }
    const cardIndex = action.cardIndex
    //const foundCard = state.items.find((card, index) => index === cardIndex)

    let updatedCards = [...state.items]
    updatedCards[cardIndex].cards.push(newTaskItem)

    return {
      items: updatedCards
    }
  }
  if (action.type === 'REMOVE_TASK') {
    const taskId = action.id
    const cardIndex = action.cardIndex
    const cardId = action.cardId

    const clonedCards = [...state.items]
    const new_cards = clonedCards[cardIndex].cards.filter((task) => task.id !== taskId)
    const updatedCards = clonedCards.map((item) => item.id === cardId ? { ...item, cards: new_cards } : item)

    return {
      items: updatedCards
    }
  }
  return defaultState

}

const TrelloProvider = (props) => {
  const [trelloState, dispatchTrelloActions] = useReducer(TrelloReducer, defaultState)

  const addCardHandler = (card) => {
    dispatchTrelloActions({ type: 'ADD_CARD', card: card })
  }

  const addTaskHandler = (task, cardIndex) => {
    dispatchTrelloActions({ type: 'ADD_TASK', task: task, cardIndex: cardIndex })
  }

  const removeTaskHandler = (id, cardIndex, cardId) => {
    dispatchTrelloActions({ type: 'REMOVE_TASK', id: id, cardIndex: cardIndex, cardId: cardId })
  }

  const dragCardHandler = (result) => {
    dispatchTrelloActions({ type: 'DRAG_CARD', result: result })
  }

  const dragTaskHandler = (result) => {
    dispatchTrelloActions({ type: 'DRAG_TASK', result: result })
  }

  const dragTaskToOtherCardHandler = (result) => {
    dispatchTrelloActions({ type: 'DRAG_TASK_TOC', result: result })
  }

  const contextValue = {
    items: trelloState.items,
    addCard: addCardHandler,
    addTask: addTaskHandler,
    removeTask: removeTaskHandler,
    dragCard: dragCardHandler,
    dragTask: dragTaskHandler,
    dragTaskToOtherCard: dragTaskToOtherCardHandler
  }
  return (
    <TrelloContext.Provider value={contextValue}>
      {props.children}
    </TrelloContext.Provider>
  )
}
export default TrelloProvider