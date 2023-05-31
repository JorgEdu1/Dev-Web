    import { Box, Container, Typography, TextField, Button, Link } from '@material-ui/core'

    const Signin = () => {
        return (
            <Container maxWidth="xs">
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: 200,
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                    >
                        Sign In
                    </Typography>
                    <TextField
                        required
                        autoFocus
                        margin="normal"
                        fullWidth
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                    />
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        label="Password"
                        name="password"
                        id="password"
                        type="password"
                    />

                    <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        Sign In
                    </Button>
                    <Box
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            
                        }}
                    >

                        <Link 
                            underline='none'
                            href='#'
                            >
                            Forgot Password?
                        </Link>
                        <Link 
                            underline='none'
                            href='#'
                            >
                            Don't have an account? Sign Up
                        </Link>
                    </Box>
                </Box>
            </Container>
        )
    }

    export default Signin