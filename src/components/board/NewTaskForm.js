import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close';
import { AddButton, CloseButton, FormBox, TrelloTextarea } from '../../styles/styles';
import { useRef } from 'react';

const NewTaskForm = (props) => {
    const cardNameInputRef = useRef()

    const submitFormHandler = e => {
        e.preventDefault()
        const enteredCardName = cardNameInputRef.current.value
        if (enteredCardName.trim() === '') {
            return
        }

        if (props.itemType === 'card') {
            const id = 'c' + Math.floor(Math.random() * 1000) + 1

            props.onAdd({
                id: id,
                title: enteredCardName,
                cards: []
            })
            cardNameInputRef.current.value = ''
        }

        if (props.itemType !== 'card') {
            props.onAddTask(props.index, {
                id: 't' + Math.floor(Math.random() * 1000) + 1,
                text: enteredCardName
            })
        }
    }

    return (
        <FormBox component="form" onSubmit={submitFormHandler}>
            <TrelloTextarea ref={cardNameInputRef} autoFocus minRows={3} placeholder={props.itemType === 'card' ? 'Enter a title for this card...' : 'Enter a title for this task...'} />
            <Box>
                <AddButton type='submit' variant='contained' color='success' size='small'>{props.itemType === 'card' ? 'Add Card' : 'Add Task'}</AddButton>
                <CloseButton onClick={props.onHide}>
                    <CloseIcon color='action' />
                </CloseButton>
            </Box>
        </FormBox>
    )
}
export default NewTaskForm