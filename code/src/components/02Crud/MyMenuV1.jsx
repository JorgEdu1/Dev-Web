import { useState } from "react"
import { AppBar, Container, Toolbar, Typography, Box, Menu, MenuItem, Button, Tooltip } from "@mui/material"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "react-router-dom"

const MyMenu = () => {


    const [anchorElTeacher, setAnchorElTeacher] = useState(null);
    const [anchorElStudent, setAnchorElStudent] = useState(null);

    const handleOpenTeacherMenu = (event) => {
        setAnchorElTeacher(event.currentTarget);
    };
    const handleCloseTeacherMenu = () => {
        setAnchorElTeacher(null);
    };
    
    const handleOpenStudentMenu = (event) => {
        setAnchorElStudent(event.currentTarget);
    };
    const handleCloseStudentMenu = () => {
        setAnchorElStudent(null);
    };


    function TeacherDropMenu() {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir opções">
                    <Button
                        onClick={handleOpenTeacherMenu}
                        sx={{ my: 2, color: 'white' }}
                    >
                        Teacher
                    </Button>
                </Tooltip>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElTeacher}
                    open={Boolean(anchorElTeacher)}
                    onClose={handleCloseTeacherMenu}
                    sx={{ marginLeft: 1 }}
                >
                    <MenuItem component={Link} to={"registerTeacher"} >
                        <Typography textAlign="center">Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseTeacherMenu} component={Link} to={"listTeacher"}>
                        <Typography textAlign="center">Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    function StudentDropMenu() {
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir opções">
                    <Button
                        onClick={handleOpenStudentMenu}
                        sx={{ my: 2, color: 'white' }}
                    >
                        Student
                    </Button>
                </Tooltip>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElStudent}
                    open={Boolean(anchorElStudent)}
                    onClose={handleCloseStudentMenu}
                    sx={{ marginLeft: 1 }}
                >
                    <MenuItem onClick={handleCloseStudentMenu} component={Link} to={"registerStudent"} >
                        <Typography textAlign="center">Cadastrar</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseStudentMenu} component={Link} to={"listStudent"}>
                        <Typography textAlign="center">Listar</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {TeacherDropMenu()}
                        {StudentDropMenu()}
                        <Button
                            onClick={() => alert('About!')}
                            sx={{ my: 2, color: 'white' }}
                        >
                            About
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default MyMenu