import React, { useEffect } from 'react';
import { Page, Navbar, Block, List, useStore, ListItem, theme, SwipeoutActions, SwipeoutButton, f7, Chip } from 'framework7-react';
import store from '../js/store';

interface NotesListProps {
  style?: any
}

const NotesList = ({ style }: NotesListProps) => {

    const notes = useStore('notes');

    const onDeleted = () => {
      //f7.dialog.alert('Thanks, item removed!');
      const notification = f7.notification.create({
        icon: '<i class="icon demo-icon">7</i>',
        title: 'Framework7',
        titleRightText: 'now',
        subtitle: 'This is a subtitle',
        text: 'This is a simple notification message',
        closeTimeout: 3000,
      });
      notification.open()
    };

  useEffect(() => {
    // load users when component mounted
    store.dispatch('getNotes', '');
    console.log(notes)
  }, []);

  return(
    <>
    <List className="searchbar-not-found">
      <ListItem title="Nothing found"></ListItem>
    </List>
    <List style={style} mediaList className="search-list searchbar-found">
    {notes.map((item, index) => (
      <ListItem swipeout onSwipeoutDeleted={onDeleted} title={item.title} after={item.date} text={item.content} key={index} link="/note">
              {/* <div>
              {item.tags.map((item) => {
                  <Chip text="Red Chip" />
               })}
              </div> */}
        <SwipeoutActions right>
            <SwipeoutButton delete>Delete</SwipeoutButton>
          </SwipeoutActions>
      </ListItem>
    ))}
  </List>
  </>
  )
}

export default NotesList;
