import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import success_logo_source from "../../public/success-svgrepo-com.svg";
import { useState } from 'react';

const checkedmodal = props => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    var namevar = "username";
    var parkingfloor = "Floor number";
    var parkingbldng = "Parking building";

    const [contents, setContents] = useState([
        {title:'Service set up complete!', body:'You may now start managing the service you just finished setting up', id: 1 },
        {title:'Parking areas successfully added!', body:'New parking areas have been added to your Parking service', id: 2 },
        {title:'Parking service is now inactive!', body:'Status has been updated', id: 3 },
        {title:'Changes saved!', body:{namevar} + ' details have been updated', id: 4 },
        {title:{namevar} + ' deleted!', body:'[parking area/area floor/slot] list have been updated', id: 5 },
        {title:'Floor is now inactive!', body:{namevar} + "'s status have been updated", id: 6 },
        {title:'Parking area is now inactive!', body:{namevar} + "'s status have been updated", id: 7 },
        {title:'Slot succesfully added!', body: 'New slot has been added to 1F of MC Home Depot', id: 8 },
        {title:'Area floors succcessfully added!', body: "New area floors have been added to MC Home Depot", id: 9 }

    ]);

   
    
return (

    <Container component="main" maxWidth="lg" sx={{ mb: 2, ml: 11 }}>
    {/* <Paper variant="outlined" sx={{ my: { xs: 3, md: 0 }, p: { xs: 2, md: 3 }, backgroundColor: '#F4F8FC' }}> */}
      <React.Fragment>
        <Dialog
          // fullScreen
          fullScreen={fullScreen}
          open="true"
          aria-labelledby="responsive-dialog-title"
          sx={{ backgroundColor: '#22222279', textAlign: 'center' }}
        >
          <Box sx={{ justifyContent: 'center', mt: 5 }}>
            <Image src={success_logo_source} alt="success_logo" width={135} height={135} />
          </Box>
          <DialogTitle id="responsive-dialog-title">
          {contents.map((content) => (
                <div key={content.id}>
                    <b><p>{content.title}</p></b>
                </div>
            ))}
          </DialogTitle>
          <DialogContent sx={{ pl: 5, pr: 5, width: 500 }}>
            <DialogContentText>
            {contents.map((content) => (
                <div key={content.id}>
                    <p>{content.body}</p>
                </div>
            ))}
            </DialogContentText>
          </DialogContent>
          {/* <DialogActions sx={{alignContent:'center'}} > */}
          {/* <Button autoFocus onClick={handleClose}>
                  Disagree
                </Button> */}
          {/* <Button onClick={handleClose} autoFocus variant='contained' sx={{ backgroundColor: '#5BADFA', maxWidth: 200, mb: 5, ml: 21.5 }}> */}
          <Button autoFocus variant='contained' sx={{ backgroundColor: '#5BADFA', maxWidth: 200, mb: 5, ml: '33%' }}>
            Okay, got it!
          </Button>
          {/* </DialogActions> */}
          </Dialog>
          </React.Fragment>
        </Container>
  );
}

export default checkedmodal;