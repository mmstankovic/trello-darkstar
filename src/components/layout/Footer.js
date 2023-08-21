import Typography from "@mui/material/Typography"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { TrelloFooter } from "../../styles/styles";

const Footer = () => {
    return (
        <TrelloFooter direction='row' gap={0.5}>
            <Typography>built with</Typography>
            <FavoriteBorderIcon />
            <Typography variant="body1">by Milos Stankovic</Typography>
        </TrelloFooter>
    )
}
export default Footer