import { AppBar, Box, Button, Container, Toolbar, Typography } from "@material-ui/core";
import AdbIcon from '@mui/icons-material/Adb';

const MyMenu = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <AdbIcon
                        style={{
                            display:{xs:"none", md:"flex"},
                            mr: 1,
                        }}
                    />
                    <Typography
                        variant="h4" 
                        component="a" 
                        href="/home"
                        style={{ 
                            flexGrow: 1,
                            textDecoration: "none",
                            color: "white", 
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            fontWeight: 800,
                            }}>
                        CRUD_V0
                    </Typography>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            style={{
                                color: "white",
                            }}
                        >
                            Teachers
                        </Button>
                        <Button
                        style={{
                            color: "white",
                        }}
                        >
                            Students
                        </Button>
                        <Button
                        style={{
                            color: "white",
                        }}
                        >
                            About
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default MyMenu