import { BrowserRouter, Routes, Route } from "react-router-dom"    
import MyMenu from "./MyMenuV1"
import { Container } from "@material-ui/core"
import RegisterTeacher from "./teacher/Register"
import ListTeacher from "./teacher/List"
import EditTeacher from "./teacher/Edit"
import RegisterStudent from "./student/Register"
import ListStudent from "./student/List"
import EditStudent from "./student/Edit"

const MainPage = () => {



    return  (
        <BrowserRouter>
            <MyMenu/>
            <Container>
                <Routes>
                    <Route path="registerTeacher" element={<RegisterTeacher/>}/>
                    <Route path="listTeacher" element={<ListTeacher/>}/>
                    <Route path="editTeacher" element={<EditTeacher/>}/>
                    <Route path="registerStudent" element={<RegisterStudent/>}/>
                    <Route path="listStudent" element={<ListStudent/>}/>
                    <Route path="editStudent" element={<EditStudent/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default MainPage