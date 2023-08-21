import { BoardBox } from '../../styles/styles';
import Stack from '@mui/material/Stack';
import CardItem from './CardItem';
import AddNewItem from './AddNewItem';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useContext } from "react";
import TrelloContext from '../../context/trello-context';

const Board = () => {
  const [items, setItems] = useState([])
  const trelloCtx = useContext(TrelloContext)

  useEffect(() => {
    setItems(trelloCtx.items)
  }, [trelloCtx.items])

  const deleteList = (cardIndex, taskIndex, cardId) => {
    trelloCtx.removeTask(taskIndex, cardIndex, cardId)
  }

  const addNewCardData = (newData) => {
    trelloCtx.addCard(newData)
  }

  const addNewTask = (cardIndex, newTask) => {
    trelloCtx.addTask(newTask, cardIndex)
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return
    }
    if (result.source.droppableId === 'all-cards') {
      trelloCtx.dragCard(result)
    }

    if ((result.source.droppableId === result.destination.droppableId) && (result.destination.droppableId !== 'all-cards')) {
      trelloCtx.dragTask(result)
    }

    if (result.source.droppableId !== result.destination.droppableId) {
      trelloCtx.dragTaskToOtherCard(result)
    }
  }

  return (
    <BoardBox>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='all-cards' direction='horizontal'>
          {(provided) => (
            <Stack {...provided.droppableProps} ref={provided.innerRef} p={3} alignItems='flex-start' direction='row'>
              {trelloCtx.items.map((card, index) =>
                <CardItem key={card.id} id={card.id} title={card.title} cards={card.cards} onDelete={deleteList} index={index} onAddTask={addNewTask} />
              )}
              {provided.placeholder}
              <AddNewItem onAdd={addNewCardData} itemType='card' />
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </BoardBox>
  )
}
export default Board