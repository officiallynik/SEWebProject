import React, { useEffect, useRef } from 'react';

const UploadThumbnail = (props) => {

    const handleFileUpload = (e) => {
        props.setThumbnail(e.target.files[0]);
    }

    const imageRef = useRef(null);

    useEffect(() => {
        if(!!props.thumbnail){
            let reader = new FileReader();
            
            reader.onload = (e) => {
                imageRef.current.src = e.target.result;
            }

            reader.readAsDataURL(props.thumbnail);
        }
    }, [props.thumbnail])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
        }}>
            <input
                type='file'
                accept="image/*"
                className='custom-file-input'
                id='customFile'
                onChange={handleFileUpload}
            />
            <div style={!props.thumbnail? {display: "none"}: {marginTop: "10px"}}>
                <img src="#" ref={imageRef} width="50%" height="50%" />
            </div>
        </div>
    )
}

export default UploadThumbnail;