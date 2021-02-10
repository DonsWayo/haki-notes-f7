import React from 'react';
import { Page, Navbar, Block, BlockTitle, TextEditor, List, ListInput } from 'framework7-react';

const ComposeLarge = () => (
    <div>
         <List noHairlinesMd style={{margin: 0}}>
                <ListInput
                    type="text"
                    label="Title"
                    floatingLabel
                    clearButton
                />

            </List>
            <TextEditor
                placeholder="Content"
                style={{ '--f7-text-editor-height': '100%', '--f7-text-editor-margin': '1%', '--f7-text-editor-border-width': '0px', padding: '1%' }}
            /> 
    </div>
);

export default ComposeLarge;
