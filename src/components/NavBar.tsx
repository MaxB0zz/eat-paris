import React from 'react';
import {Box} from "@mui/material";
import Text from "../defaultComponents/Text/Text";
import DropDownMenu from "../defaultComponents/DropDownMenu/DropDownMenu";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const NavBar: React.FC = () => {
    return (
        <>
            <Box
            width="100%"
            bgcolor="background.default"
            border-bottom="solid 1px primary"
            position="fixed"
            height="10vh"
            display="flex"
            alignItems="center"
            >
                <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
                mx="10px"
                height="7vh"
                >
                <Box width="200px">
                    <HomeOutlinedIcon
                    color="primary"
                    fontSize="large"/>
                </Box>
                <Box>
                    <Text Text={"logo"}/>
                </Box>
                <DropDownMenu Children={
                    [
                        <Text Text={"logo"}/>,
                        <Text Text={"logo2 aaaaaaaaaaaaaaaaaaa"}/>
                    ]
                } Label={"cool"}
                Color="gray"

                />
                </Box>
            </Box>

            <Box height="7vh">

        </Box>

        </>
    )
}

export default NavBar;