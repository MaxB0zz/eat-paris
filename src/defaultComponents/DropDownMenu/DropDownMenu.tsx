import React, {useState} from 'react';
import {Box, Button} from "@mui/material";

enum position {
    LEFT,
    RIGHT
}

type Props = {
    Children: JSX.Element[],
    height?: string,
    Label: string,
    Color?: string,
    Position?: position,
    width?: string
}

const DropDownMenu: React.FC<Props> = ({Children, height, Label, Color, Position, width}) => {

    if (Position === undefined)
        Position = position.RIGHT;
    if (width === undefined)
        width = "500px";
    const [show, setShow] = useState(false);

    const handleHover = () => {
      setShow(true);
    }

    const handleExit = () => {
        setShow(false);
    }

    return (
        <Box onMouseOver={handleHover}
             onMouseLeave={handleExit}
             position="relative"
             bgcolor={(Color) ? Color : "transparent"}
             width={width}>
            <Box display="flex" justifyContent={(Position === position.RIGHT) ? "flex-end" : "flex-start"}>
                <Button>{Label}</Button>
            </Box>
            <Box position="absolute" display="flex" alignItems="flex-end">
                {show && Children}
            </Box>
        </Box>

    )
}

export default DropDownMenu;