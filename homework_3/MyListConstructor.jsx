import { ListItem, Button, ListItemButton, ListItemText } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function MyListConstructor( {text} ) {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        </>
    );
}