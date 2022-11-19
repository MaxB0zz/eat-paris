import React from 'react';
import {Box, TextField} from "@mui/material";

type Props = {
    Text: string,
    color?: string,
    fontSize?: string
}

const Text: React.FC<Props> = ({Text,color, fontSize }) => {


    return (
        <Box
            color={(color) ? color : "black"}
            fontSize={(fontSize) ? fontSize : "20px"}
            display='flex'
            alignItems="center"
        >
            {Text}
        </Box>
    )
}

export default Text;