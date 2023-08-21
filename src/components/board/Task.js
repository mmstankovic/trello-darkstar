import Card  from '@mui/material/Card';
import Typography  from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Draggable } from 'react-beautiful-dnd';
import { TrelloTaskContent } from '../../styles/styles';

const Task = (props) => {
    return (
        <Draggable draggableId={props.id} index={props.index}>
            {(provided) => (
                <Card sx={{marginTop: 1, ':first':{marginTop:0}}} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <TrelloTaskContent>
                        <Typography variant='body2'>{props.title}</Typography>
                        <IconButton sx={{padding: 0}} onClick={() => props.onDelete(props.cardIndex, props.id, props.cardId)}>
                            <DeleteOutlineIcon fontSize="small"/>
                        </IconButton>
                    </TrelloTaskContent>
                </Card>
            )}
        </Draggable>
    )
}
export default Task