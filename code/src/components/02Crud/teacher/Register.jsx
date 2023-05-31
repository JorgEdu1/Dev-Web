import { Button, TextField, Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material"


const Register = () => {

    function handleSubmit(event) {
        alert("Cadastrado com sucesso!")
    }

    return (    
        <>  
            <Box sx={{my:6}}>
                <Typography variant="h5" fontWeight="bold">
                    Register Teacher:
                </Typography>
                <Box
                    component={"form"}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="course"
                        label="Course"
                        name="course"
                    />
                    <FormControl fullWidth style={{mt:2}}>
                        <InputLabel id="select-tit-label">Titration</InputLabel>
                        <Select
                            labelId="select-tit-label"
                            label="Titration"
                        >
                            <MenuItem value="GRAD">Graduation</MenuItem>
                            <MenuItem value="MAST">Master's degree</MenuItem>
                            <MenuItem value="PHD">PHD</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{my:2}}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Register