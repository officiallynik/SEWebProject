import React from 'react';

const UploadImages = (props) => {

    const handleFileUpload = (e) => {
        props.setGallery(() => {
            return e.target.files
        });
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <input
                disabled={props.loading}
                type='file'
                accept="image/*"
                className='custom-file-input'
                id='customFile'
                onChange={handleFileUpload}
                multiple
            />
            <div style={!props.gallery? {display: "none"}: {marginTop: "10px"}}>
                {
                    !!props.gallery && 
                    Array.from(props.gallery).map((file: any) => {
                        return <div key={file.name}>{file.name}</div>
                    })
                }
            </div>
        </div>
    )
}

export default UploadImages;