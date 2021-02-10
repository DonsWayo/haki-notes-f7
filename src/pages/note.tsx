import React, { useState } from 'react';
import { Page, Navbar, Block, BlockTitle, TextEditor, List, ListInput, NavRight, Icon, Button } from 'framework7-react';
import Editor from 'for-editor'
import './note.css'
import store from '../js/store';

const NotePage = () => {
    const [state, setstate] = useState("")

    const handleChange = (e) => {
        setstate(e)
    }
    return (
        <Page>
            <Navbar title="Not found" className="swipe-handler">
                <NavRight>
                <Button onClick={() => store.dispatch('setOpenNote', false)}>
                <Icon ios="f7:xmark" aurora="f7:xmark" md="material:xmark"></Icon>
                </Button>
                </NavRight>
            </Navbar>
            <List noHairlinesMd style={{ margin: 0 }}>
                <ListInput
                    type="text"
                    placeholder="title"
                    clearButton
                />

            </List>
            <TextEditor
                placeholder="Content"
                mode="keyboard-toolbar"
                style={{ '--f7-text-editor-bg-color': 'transparent', '--f7-text-editor-height': '100%', '--f7-text-editor-margin': '1%', '--f7-text-editor-border-width': '0px', padding: '1%' }}
            />
            {/* <Editor value={state} onChange={(e) => handleChange(e)} /> */}
        </Page>
    )
};

export default NotePage;
