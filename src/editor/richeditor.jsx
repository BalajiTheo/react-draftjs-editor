import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';
import './richeditor.css';

const RichEditor = (props) => {

    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())

    return (
        <div>
            <Editor sty styles={{border: '1px solid'}} editorState={editorState} class="editor-container" onChange={setEditorState} />
        </div>
    )

}

export default RichEditor