import {useNavigate} from "react-router-dom"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ThreeDotMenu = ({postId,login}) => {
        const [anchorEl, setAnchorEl] = useState(false);
        const open = Boolean(anchorEl);
        const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
        setAnchorEl(null);
        };
        let navigate = useNavigate();

        const handleEdit = () => {
            navigate(`/editArticle/${postId}`);
        };

        return (
            <div className={`${login ? "" : "hide"}`}>
                <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center', marginLeft: '200px' }}>
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MoreHorizIcon/>
                    </IconButton>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleEdit}>
                        <ListItemIcon >
                            <EditIcon/>
                        </ListItemIcon>
                        Edit
                    </MenuItem>
                    <MenuItem data-bs-toggle="modal"
                              data-bs-target={`#exampleModalCenter-${postId}`}>
                        <ListItemIcon>
                            <DeleteIcon/>
                        </ListItemIcon>
                        Delete
                    </MenuItem>
                </Menu>
            </div>
        );
    }
    export default ThreeDotMenu;