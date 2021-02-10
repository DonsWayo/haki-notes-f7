import React, { useEffect } from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Subnavbar,
  Searchbar,
  theme,
  useStore,
  Fab,
  Icon,
  Popup
} from 'framework7-react';
import NotesList from '../components/notes-list';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import store from '../js/store';
import NotePage from './note';
import ComposeLarge from '../components/compose-large';

const HomePage = () => {
  const { width } = useWindowDimensions();
  const largeScreen = useStore('largeScreen');
  const openNote = useStore('openNote');

  useEffect(() => {
    if (width > 600 && !largeScreen) {
      store.dispatch('setLargeScreen', true);
    } else if (width < 600 && largeScreen) {
      store.dispatch('setLargeScreen', false);
    }
  }, [width])


  function renderSmall() {
    return (
      <Page name="home" >
        <Navbar large sliding={false}>
          <NavLeft>
            <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
          </NavLeft>
          <NavTitle sliding>HakiNotes</NavTitle>
          <NavTitleLarge>HakiNotes</NavTitleLarge>
          <Subnavbar inner={false}>
            <Searchbar
              searchContainer=".search-list"
              searchIn=".item-title"
              disableButton={!theme.aurora}
            ></Searchbar>
          </Subnavbar>
        </Navbar>
        <NotesList style={{ margin: 0 }} />
        <Popup
          className="demo-popup"
          opened={openNote}
          swipeToClose
          swipeHandler=".swipe-handler"
          onPopupClosed={() => store.dispatch('setOpenNote', false)}
        >
          <NotePage />
        </Popup>
        <Fab position="right-bottom" slot="fixed" text="Create" color="red" onClick={() => store.dispatch('setOpenNote', true)}>
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        </Fab>
      </Page>
    )
  }

  function renderBig() {
    return (
      <Page name="home" pageContent={false}>
        <Row noGap>
          <Col width="35">
            <Navbar>
              <NavLeft>
                <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
              </NavLeft>
              <NavTitle>HakiNotes</NavTitle>
              <Subnavbar inner={false}>
                <Searchbar
                  searchContainer=".search-list"
                  searchIn='.item-title, .item-text'
                  disableButton={!theme.aurora}
                ></Searchbar>
              </Subnavbar>
            </Navbar>
            <NotesList style={{ height: '100vh', overflow: 'scroll' }} />
          </Col>
          <Col width="65">
            <ComposeLarge />
          </Col>
        </Row>
      </Page>
    )
  }


  return (
    <>
      {/* Top Navbar */}


      {largeScreen ?
        renderBig()
        :
        renderSmall()
      }
    </>
  )
}
export default HomePage;