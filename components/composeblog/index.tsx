import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import styles from '../../styles/CKEditor.module.css';

const ComposeBlog = () => {
    return (
        <div style={{minHeight: "100%", height: "100%"}}>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Compose your blog here!</p>"
                onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
                style={{
                    height: "100%"
                }}
            />
        </div>
    );
};

export default ComposeBlog;