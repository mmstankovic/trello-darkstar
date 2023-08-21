import { useState } from "react"
import NewTaskForm from "./NewTaskForm"
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import { TrelloCard } from "../../styles/styles"
import { TrelloButton } from "../../styles/styles"

const AddNewItem = (props) => {
    const [showForm, setShowForm] = useState(false)

    const showFormHandler = () => setShowForm(true)
    const hideFormHandler = () => setShowForm(false)

    const addNewCard = (new_card) => {
        props.onAdd(new_card)
        hideFormHandler()
    }

    const addNewTask = (index, newTask) => {
        props.onAddTask(index, newTask)
        hideFormHandler()
    }

    const buttonStyles = props.itemType === 'card' ? '100%' : 'none'

    if (showForm && (props.itemType === 'card')) {
        return (
            <TrelloCard>
                <CardContent sx={{ padding: '10px' }}>
                    <NewTaskForm showForm={props.showForm} itemType={props.itemType} index={props.index} onHide={hideFormHandler} onAdd={addNewCard} onAddTask={addNewTask} />
                </CardContent>
            </TrelloCard>

        )
    }

    if (showForm && (props.itemType === 'task')) {
        return <NewTaskForm showForm={props.showForm} itemType={props.itemType} index={props.index} onHide={hideFormHandler} onAdd={addNewCard} onAddTask={addNewTask} />
    }
    if (!showForm) {
        return (
            <Box sx={{ minWidth: 250, width: '90%', maxWidth: 275 }}>
                <TrelloButton sx={{ width: buttonStyles }} onClick={showFormHandler}>{`+Add another ${props.itemType === 'card' ? 'card' : 'task'}`}</TrelloButton>
            </Box>
        )
    }
}
export default AddNewItem