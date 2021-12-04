import {useState} from "react";
import {Button, Dialog, DialogActions, DialogTitle} from "@mui/material";


const CustomModal = (props) => {
  const [dialogStatus, setDialogSTatus] = useState(false)

  const parentClass = props.parentClass
  const buttonClass = props.buttonClass
  const buttonName = props.buttonName
  const title = props.title
  const content = props.content
  const buttonFunc = props.buttonFunc?props.buttonFunc:() => {}

  return (
    <div className={parentClass}>
      <div
        className={buttonClass}
        onClick={() => {setDialogSTatus(true);buttonFunc()}}
      >
        {buttonName}
      </div>

      <Dialog open={dialogStatus} fullWidth={true} maxWidth="lg">
        <DialogTitle style={{fontSize: "35px"}}>
          {title}
        </DialogTitle>
        {content}
        <DialogActions>
          <Button onClick={() => setDialogSTatus(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomModal;
