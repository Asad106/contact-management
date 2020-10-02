import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {addContact} from "../redux/contacts/contactActions";
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin:"auto",
        float: "none",
        marginBottom: 10
    },
    btn:{
        alignContent:"center",
    }

});
const AddContact= ()=>{
    const dispatch = useDispatch();
    const history=useHistory();
    let today = new Date().toLocaleDateString()
    const [name, setName]= useState("") ;
    const [email, setEmail]= useState("") ;
    const [dateCreated, setDateCreated]= useState(today) ;
    const [dateModified, setDateModified]= useState(today) ;

    const createContact = (e) =>{
        console.log("asasdsadsada")
        e.preventDefault();
        const new_contact = {
            id:shortid.generate(),
            name:name,
            email:email,
            dateCreated:dateCreated,
            dateModified:dateModified
        }
        dispatch(addContact( new_contact))
        history.push("/")
    }
    // const classes = useStyles();
    return(
        <Card className={useStyles.root} style={{margin:'auto' ,width:500, marginTop:50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    ADD CONTACT HERE
                </Typography>
                <form>
                    <div><TextField style={{width:400,marginTop:10}} id="name" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:10}} id="email" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:10}} disabled={true} id="dateCreated" label="DateCreated" value={dateCreated} onChange={(e)=>setDateCreated(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:10}} id="dateModified" label="DateModified"  va={dateModified} onChange={(e)=>setDateModified(e.target.value)}/></div>
                    <Button style={{margin: "auto", marginTop:20}} size="medium" variant="contained" color="primary" onClick={(e)=>createContact(e)} >Submit</Button>
                </form>



            </CardContent>
        </Card>
    )
}
export default AddContact;