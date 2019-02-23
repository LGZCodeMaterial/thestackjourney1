import React, { useState } from "react";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { withStyles } from "@material-ui/core";
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CallIcon from '@material-ui/icons/Call';
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";

const actions = [
    { icon: <ChatBubbleOutline />, name: 'Whatsapp' },
    { icon: <ChatBubbleOutline />, name: 'Facebook' },
    { icon: <InsertPhotoIcon />, name: 'Instagram' },
    { icon: <CallIcon />, name: 'Phone' },
];

const SpeedDailBtn = props => {

    const [ open, setOpen ] = useState(false);
    const [ hidden, setHidden ] = useState(false);

    const handleVisibility = () => {
        setOpen(false);
        setHidden(!hidden);
    }

    const handleClick = () => {
        setOpen(!open);
    }

    const handleOpen = () => {
        if(!hidden){
            setOpen(true);
        }
    }

    const handleClose = () => {
        setOpen(false);   
    }

    const { classes } = props;

    const dialProps = {
        ariaLabel: "SpeedDial openIcon example",
        className: classes.speedDial,
        hidden: hidden,
        icon: <SpeedDialIcon openIcon={<ChatBubbleOutline />} />,
        onBlur: handleClose,
        onClick: handleClick,
        onClose: handleClose,
        onFocus: handleOpen,
        onMouseEnter: handleOpen,
        onMouseLeave: handleClose,
        open: open
    }

    return (
        <SpeedDial {...dialProps}>
            {actions.map(action => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClick}
                />
            ))}
        </SpeedDial>
    );
};

const styles = theme => ({
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        left: theme.spacing.unit * 3,
    },
})

export default withStyles(styles)(SpeedDailBtn);
