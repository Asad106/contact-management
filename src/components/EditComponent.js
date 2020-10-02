import React, {useState , useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getContact, updateContact} from "../redux/contacts/contactActions";
import {useHistory , useParams } from 'react-router-dom';

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
const EditContact= ()=>{
    let {id} = useParams()
    const dispatch = useDispatch();
    const history=useHistory();
    const contact = useSelector((state)=>state.contact)
    let today = new Date().toLocaleDateString()
    const [name, setName]= useState("") ;
    const [email, setEmail]= useState("") ;
    const [dateCreated, setDateCreated]= useState(today) ;
    const [dateModified, setDateModified]= useState(today) ;

    useEffect(()=>{
        if (contact!=null){
            setName(contact.name)
            setEmail(contact.email)
            setDateCreated(contact.dateCreated)
            setDateModified(contact.dateModified)
        }
        console.log(contact)
        dispatch(getContact(id))
    },[contact])

    const updatedContact =(e) => {
        e.preventDefault()
        const update_data = Object.assign(contact, {name:name,email:email, dateCreated:dateCreated, dateModified:dateModified})
        console.log(update_data);
        dispatch(updateContact(update_data))
        history.push("/")
    };

    return(
        <Card className={useStyles.root} style={{margin:'auto' ,width:600, marginTop:50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    EDIT CONTACT
                </Typography>

                    <div><TextField style={{width:400 , marginTop:15}} id="name" label="Name" value={name} onChange={(e)=>setName(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:15}} id="email" label="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:15}} id="dateCreated" label="DateCreated" value={dateCreated} onChange={(e)=>setDateCreated(e.target.value)}/></div>
                    <div><TextField style={{width:400,marginTop:15}} id="dateModified" label="DateModified"  value={dateModified} onChange={(e)=>setDateModified(e.target.value)}/></div>
                    <Button style={{margin: "auto" ,marginTop:20}} size="medium" variant="contained" color="secondary"
                            onClick={(e)=>updatedContact(e)}>Update</Button>




            </CardContent>
        </Card>
    )
}
export default EditContact;