import React, { useState } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Create } from '@material-ui/icons';
import { Button, Chip, CircularProgress, LinearProgress, TextField } from '@material-ui/core';
import UploadThumbnail from '../utils/thumbnail';
import { Autocomplete } from '@material-ui/lab';
import Axios from '../../helpers/axios';
import { notifyAction } from '../../store/actions/notifyAction';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';

const CKEditor = dynamic(() => {
    return import('./CKEditor');
}, {ssr: false, loading:() => <LinearProgress />});

const ComposeBlog = (props) => {

    const [title, setTitle] = useState(null);
    const [subTitle, setSubTitle] = useState(null);
    const [blogContent, setBlogContent] = useState("<p>Compose your blog here!</p>");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [tags, setTags] = useState([]);
    const [step, setStep] = useState(1);

    const [loading, setLoading] = useState(false);

    const cleanComposeForm = (success=null) => {
        setLoading(false);
        props.setOpenEditor(false);

        setTitle(null);
        setSubTitle(null);
        setBlogContent("<p>Compose your blog here!</p>");
        setThumbnail(null);
        setTags([]);
        setStep(1);
        
        if(success === true){
            props.dispatchCreation("Blog creation successfull", 3, "success");
        }
        else if(success === false){
            props.dispatchCreation("Blog creation failed, try again later", 3, "error");
        }
    }

    const handleSubmitBlog = () => {
        setLoading(true);
        // console.log(blogContent);
        // console.log(thumbnail);
        // console.log(tags);
        // console.log(subTitle);
        // console.log(title);
        const formData = new FormData();
        formData.append("title", title);
        formData.append("subtitle", subTitle);
        formData.append("content", blogContent);
        formData.append("thumbnail", thumbnail);

        formData.append("custom_tags", JSON.stringify(tags));
        
        Axios.post("/blogs/create", formData, {
            headers: {
                'Authorization': `Bearer ${props.token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        .then(res => {
            // console.log(res.data);
            cleanComposeForm(true);
        })
        .catch(err => {
            
            // console.log(err);
            cleanComposeForm(false);
        })
    }

    let blogComposer = (
        <Button variant="outlined"
            onClick={() => props.setOpenEditor(true)}
        >
            <Create />
            <span style={{display: "flex", marginLeft: "5px"}}>
                Compose Blog
            </span>
        </Button>
    );

    if(props.openEditor && step === 1) {
        blogComposer = (
            <div style={{ minHeight: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <div>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content",
                            marginRight: "10px"
                        }}
                        onClick={() => {
                            props.setOpenEditor(false)
                            cleanComposeForm();
                        }}
                    >
                        Cancel
                    </Button>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content"
                        }}
                        onClick={() => setStep(2)}
                        disabled={blogContent.length === 0 || !subTitle || !title}
                    >
                        Next
                    </Button>
                </div>
                <div style={{
                    marginBottom: "10px",
                    width: "100%"
                }}>
                    <div style={{
                        width: "50%",
                        marginBottom: "7px"
                    }}>
                        <TextField 
                            variant="outlined"
                            label="Blog Title"
                            fullWidth
                            onChange={(e) => {setTitle(e.target.value)}}
                            value={title === null? "": title}
                        />
                    </div>
                    <TextField
                        variant="outlined"
                        label="Blog Subtitle"
                        fullWidth
                        onChange={(e) => {setSubTitle(e.target.value)}}
                        value={subTitle === null? "": subTitle}
                    />
                </div>
                <div style={{ display: "flex", flexGrow: 1 }}>
                    <CKEditor
                        blogContent={blogContent}
                        setBlogContent={setBlogContent}
                    />
                </div>
            </div>
        );
    } 

    if(props.openEditor && step === 2) {
        blogComposer = (
            <div style={{ minHeight: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <div>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content",
                            marginRight: "10px"
                        }}
                        onClick={() => setStep(1)}
                    >
                        Back
                    </Button>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content"
                        }}
                        onClick={() => setStep(3)}
                        disabled={thumbnail === null}
                    >
                        Next
                    </Button>
                </div>
                <div>
                    <div
                        style={{
                            fontSize: "18px",
                            marginBottom: "10px"
                        }}
                    >Add Thumbnail</div>
                    <UploadThumbnail 
                        setThumbnail = {setThumbnail}
                        thumbnail={thumbnail}
                    />
                </div>
            </div>
        );
    } 

    if(props.openEditor && step === 3) {
        blogComposer = (
            <div style={{ minHeight: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <div>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content",
                            marginRight: "10px"
                        }}
                        onClick={() => setStep(2)}
                    >
                        Back
                    </Button>
                    <Button variant="outlined"
                        style={{
                            marginBottom: "10px",
                            width: "max-content"
                        }}
                        onClick={handleSubmitBlog}
                    >
                        Submit Blog
                    </Button>
                </div>
                <div>
                    <Autocomplete
                        multiple
                        id="tags-filled"
                        options={[]}
                        defaultValue={[]}
                        freeSolo
                        renderTags={(value, getTagProps) => {
                            setTags(value);
                            return value.map((option, index) => (
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Add Tags" placeholder="Blog" />
                        )}
                    />
                </div>
            </div>
        );
    } 

    return (
        loading? <div style={{display: "flex", justifyContent: "center"}}><CircularProgress /></div>:
        blogComposer
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCreation: (msg: string, exp: number, notifyType: string) => dispatch(notifyAction(msg, exp, notifyType)),
    }
}
export default connect(null, mapDispatchToProps)(ComposeBlog);