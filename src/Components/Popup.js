import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@material-ui/core'
import { Button } from './Button';

export default function Popup(props) {
    const { children, openPopup, setOpenPopup } = props;
    return (
        <Dialog open={openPopup} maxWidth>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        Add Details
                    </Typography>
                    <Button text="Close" color="secondary" onClick={() => setOpenPopup(false)} />
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    );
}

