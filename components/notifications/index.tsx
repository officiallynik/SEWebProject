import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';

interface props {
    msg: string,
    type: string
}

const Notify = (props: props) => {
    return (
        <Snackbar
            open={true}
            anchorOrigin={{horizontal: "left", vertical: "bottom"}}
            message={props.msg}
        />
    )
}

export default Notify;