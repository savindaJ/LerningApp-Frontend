import UserForm from "./UserForm";
import {Box} from "@mui/material";
import UserTable from "./UserTable";
import {useEffect, useState} from "react";
import Axios from "axios";

const User = () => {
    const [usr, setUsers] = useState([]);

    const [isEdit, setEdit] = useState(false);

    const [selectUser, setUser] = useState({})

    useEffect(() => {
        getUser();
    }, []);

    const setters = (data) => {
        setUser(data)
        console.log(data)
    }

    const getUser = () => {
        Axios.get('http://localhost:3001/api/users').then(responce => {
            console.log(responce.data);
            setUsers(responce.data || []);
        }).catch(error => {
            alert(error.text)
        })

    }

    const addUser = (data) => {

        console.log("Save !")

        const payLoad = {
            id: data.id,
            name: data.name
        }

        Axios.post('http://localhost:3001/createuser', payLoad).then(() => {
            getUser();
            setEdit(false)
            alert("User Successfully Added !");
        }).catch(err => {
            alert(err.text)
        })
    }

    const updateUser = (updateData) => {
        const payLoad = {
            id: updateData.id,
            name: updateData.name
        }

        Axios.put('http://localhost:3001/updateuser', payLoad).then(() => {
            getUser();
            setEdit(false)
            alert("Successfully updated !")
        }).catch(err => {
            alert(err.text)
        })

    }

    const deleteUser = (id) => {
        const payLoad = {
            id: id.id
        }

        Axios.put('http://localhost:3001/deleteuser', payLoad).then(() => {
            getUser();
            alert("Successfully deleted !")
        }).catch(err => {
            alert(err.text)
        })

    }


    return (
        <Box sx={{width: 'calc(100%-100px)'}}>
            <UserForm adduser={addUser}/>
            <UserTable rows={usr} def={setters}/>
        </Box>
    );

}

export default User;