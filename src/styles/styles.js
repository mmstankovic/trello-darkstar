import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { styled } from "@mui/material";

export const TrelloToolbar = styled(Toolbar)(() => ({
    backgroundColor: '#5B5EDC',
    color: '#ADAFEE',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

export const BoardBox = styled(Box)(() => ({
    backgroundColor: '#5754EA',
    overflowX: 'auto',
    overflowY: 'hidden',
    background: 'linear-gradient(0deg, rgba(79, 70, 229, 1) 0%, #6366f1 100%)',
    height: 'calc(100vh - 64px)',
    padding: '1rem',
    position: 'relative'
}))
export const TrelloCard = styled(Card)(() => ({
    minWidth: 250,
    width: '90%',
    maxWidth: 275,
    backgroundColor: '#E2E8F0',
    marginRight: '8px'
}))
export const TrelloTaskContent = styled(CardContent)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    '&:last-child': { paddingBottom: '10px' }
}))
export const TrelloCardActions = styled(CardActions)(() => ({
    padding: '0 10px 10px 10px'
}))
export const TrelloButton = styled(Button)(() => ({
    display: 'flex',
    alignItems: 'center',
    marginRight: '0.25rem',
    textTransform: 'none',
    fontSize: '0.95rem',
    fontWeight: 400,
    cursor: 'pointer',
    border: 'none',
    borderRadius: '3px',
    color: '#1976d2',
    backgroundColor: '#E2E8F0',
    transition: 'background 84ms ease-in',
    '&:hover': {
        backgroundColor: '#8E91F0',
        opacity: 1,
        color: '#fff'
    }
}))
export const FormBox = styled(Box)(() => ({
    width: '100%', 
    padding: 0
}))
export const TrelloTextarea = styled(TextareaAutosize)(() => ({
    width: "100%", 
    padding: '8px'
}))
export const AddButton = styled(Button)(() => ({
    textTransform: 'none',
    fontWeight: 400
}))
export const CloseButton = styled(Button)(() => ({
    padding: '0 12px',
    minWidth: '24px',
    '&:hover': {
        background: 'none'
    }
}))
export const TrelloFooter = styled(Stack)(() => ({
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
    padding: '10px',
    position: 'fixed',
    left: 0,
    bottom: '16px',
    width: '100%',
}))