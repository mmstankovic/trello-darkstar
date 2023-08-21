import Typography from "@mui/material/Typography"
import GradeIcon from '@mui/icons-material/Grade';
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import { TrelloToolbar } from "../../styles/styles";

const Header = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <TrelloToolbar>
                    <GradeIcon sx={{ mr: 0.5 }} />
                    <Typography variant="h6" noWrap>
                        Trello Darkstar
                    </Typography>
                </TrelloToolbar>
            </AppBar>
        </>
    )
}
export default Header