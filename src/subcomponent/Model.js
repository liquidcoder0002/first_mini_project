import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import {FormControlLabel,FormControl} from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TransitionsModal(props) {
    const [open, setOpen] = useState(false);
    const [value, setDate] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [fName, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setlGen] = useState('female');


    const submitValue = () => {
        const details = {
            'name' : fName,
            'mobile' : phone,
            "dob": value,
            "gender" : gender,
        }
        // handleClose();
        // document.querySelector("#name").value = " ";
        // document.querySelector("#mobile").value = " ";
        // document.querySelector("#date").value = " ";
        props.customerData(details)
        console.log(details);
        // props.model_op(false)
    }
    

    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>Add Data</Button>
            {/* <Button >Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography><br></br>
                        <FormControl>
                            <TextField fullWidth label="Name" id="name" onChange={e => setName(e.target.value)} /><br></br>
                            <TextField fullWidth label="Mobile NO." id="mobile" onChange={e => setPhone(e.target.value)} /><br></br>

                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date of Birth"
                                    value={value}
                                    
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider><br></br>
                            
                            <FormLabel  id="demo-radio-buttons-group-label">Gender</FormLabel>

                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                onChange={(e)=>setlGen(e.target.value)}
                                >
                            <Stack direction="row" >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </Stack>
                            </RadioGroup>
                        </FormControl><br></br>
                        <br></br>
                        <Button variant="outlined" size="large"  onClick={submitValue}>Submit</Button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
