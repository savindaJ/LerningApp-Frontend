import {Paper, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const UserTable = (pros , get) => {

    return (
        <TableContainer component={Paper} sx={{marginTop: '50px'}}>
            <Table sx={{width: "70vw", margin: 'auto', border: '1px solid black'}}>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {

                        pros.rows.length > 0 ? pros.rows.map(row => (
                            <TableRow key={row.user_id} sx={{
                                transitionDuration: '2s', '&:hover': {
                                    backgroundColor: "#e9a6f1",
                                    color: 'white'
                                }
                            }}>
                                <TableCell componet='th' scope='row'>{row.user_id}</TableCell>
                                <TableCell componet='th' scope='row'>{row.user_name}</TableCell>
                                <TableCell>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            border: '1px solid black',
                                            backgroundColor: '#8587ed',
                                            color: 'black'
                                        }}
                                        onClick={() => {
                                            console.log(get.getall())
                                        }}
                                    >Update</Button>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            border: '1px solid black',
                                            backgroundColor: '#ed4040',
                                            color: 'black'
                                        }}
                                        onClick={() => {
                                            console.log(get.getall())
                                        }}
                                    >Delete</Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            alert("no Users !")
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );

}

export default UserTable;