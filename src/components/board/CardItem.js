import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddNewItem from './AddNewItem';
import { TrelloCard, TrelloCardActions } from '../../styles/styles';

const CardItem = (props) => {
    const addNewTaskHandler = (index, newTask) => {
        props.onAddTask(index, newTask)
    }

    return (
        <Draggable draggableId={props.id} index={props.index}>
            {(provided) => (
                <TrelloCard {...provided.draggableProps} ref={provided.innerRef}>
                    <CardContent sx={{ padding: '10px' }}>
                        <Typography {...provided.dragHandleProps} variant="subtitle2" mb={2} pt={1}>
                            {props.title}
                        </Typography>
                        <Droppable droppableId={props.id} direction='vertical' type='task'>
                            {(provided) => (
                                <Stack {...provided.droppableProps} ref={provided.innerRef} direction='column' sx={{ minHeight: '5px' }}>
                                    {props.cards.map((task, index) =>
                                        <Task index={index} key={task.id} id={task.id} title={task.text} onDelete={props.onDelete} cardIndex={props.index} cardId={props.id} />
                                    )}
                                    {provided.placeholder}
                                </Stack>
                            )}
                        </Droppable>
                    </CardContent>
                    <TrelloCardActions >
                        <AddNewItem itemType='task' onAddTask={addNewTaskHandler} index={props.index} />
                    </TrelloCardActions>
                </TrelloCard>
            )}
        </Draggable>
    )
}
export default CardItem