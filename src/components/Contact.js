import React, {Fragment} from 'react';
import Avatar from 'react-avatar'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Button from "@material-ui/core/Button";
import VisibilityIcon from '@material-ui/icons/Visibility';
import {deleteContact} from "../redux/contacts/contactActions";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    box: {

        marginTop: 50
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

export default function Contact() {
    const dispatch = useDispatch()
    const allContact = useSelector((state) => state.allContacts)
    console.log(allContact)
    const classes = useStyles();

    return (
        <Fragment>
            <div>
                <Typography variant="h4" color="textSecondary">
                CONTACT MANAGEMENT
            </Typography>
            </div>
            <TableContainer component={Paper} className={classes.box}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Date Created</TableCell>
                            <TableCell>Date Modified</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allContact.map((contact) => (
                            <TableRow key={contact.id}>

                                <TableCell component="th" scope="row">
                                    <Avatar style={{marginRight: 10}} name={contact.name} size={40} round={true}/>
                                    {contact.name}
                                </TableCell>
                                <TableCell>{contact.email}</TableCell>
                                <TableCell>{contact.dateCreated}</TableCell>
                                <TableCell>{contact.dateModified}</TableCell>
                                <TableCell align="center">
                                    <span style={{marginRight: "3px"}}>
                                        <Link to={`/editContact/${contact.id}`}><EditIcon
                                            color="primary"/>
                                        </Link>
                                    </span>
                                    <span style={{marginRight: "3px"}}>
                                        <Link to={`/viewContact/${contact.id}`}>
                                            <VisibilityIcon
                                            />
                                        </Link>
                                    </span>
                                    <span style={{marginRight: "3px"}}>
                                        <DeleteIcon color="secondary"
                                                    onClick={() => dispatch(deleteContact(contact.id))}
                                        />
                                    </span>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link style={{textDecoration: 'none', marginBottom: 20}} to="/addContact">
                <Fab color="primary" aria-label="add" className={classes.fab}>
                    <AddIcon/>
                </Fab>
            </Link>

        </Fragment>

    );
}