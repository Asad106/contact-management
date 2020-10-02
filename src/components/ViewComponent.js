import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getContact, updateContact} from "../redux/contacts/contactActions";
import {Link, useHistory, useParams} from 'react-router-dom';
import VisibilityIcon from "@material-ui/icons/Visibility";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "auto",
        float: "none",
        marginBottom: 10
    },
    btn: {
        alignContent: "center",
    }

});
const EditContact = () => {
    let {id} = useParams()
    const dispatch = useDispatch();
    const history = useHistory();
    const contact = useSelector((state) => state.contact)
    let today = new Date().toLocaleDateString()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dateCreated, setDateCreated] = useState(today);
    const [dateModified, setDateModified] = useState(today);

    useEffect(() => {
        if (contact != null) {
            setName(contact.name)
            setEmail(contact.email)
            setDateCreated(contact.dateCreated)
            setDateModified(contact.dateModified)
        }
        console.log(contact)
        dispatch(getContact(id))
    }, [contact])

    return (
        <Card className={useStyles.root} style={{margin: 'auto', width: 600, marginTop: 50}} variant="outlined">
            <CardContent>
                <Typography variant="h5" color="textSecondary">
                    CONTACT INFO
                </Typography>

                <div><TextField style={{width: 400,marginTop:15}} id="name" disabled={true} label="Name" value={name}
                                onChange={(e) => setName(e.target.value)}/></div>
                <div><TextField style={{width: 400,marginTop:15}} id="email" disabled={true} label="email" value={email}
                                onChange={(e) => setEmail(e.target.value)}/></div>
                <div><TextField style={{width: 400,marginTop:15}} id="dateCreated" disabled={true} label="DateCreated"
                                value={dateCreated} onChange={(e) => setDateCreated(e.target.value)}/></div>
                <div><TextField style={{width: 400,marginTop:15}} id="dateModified" disabled={true} label="DateModified"
                                value={dateModified} onChange={(e) => setDateModified(e.target.value)}/></div>
                <Link to={"/"}>
                    <ArrowBackIcon style={{marginTop:20}} size="large"
                    />
                </Link>


            </CardContent>
        </Card>
    )
}
export default EditContact;