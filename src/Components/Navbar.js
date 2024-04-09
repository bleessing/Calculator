import {AppBar, Container, Toolbar, Typography} from "@mui/material";

const Navbar = () =>{
    return(
        <AppBar>
            <Container>
                <Toolbar>
                    <Typography variant={'h5'}>
                        Bank of React
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default  Navbar;