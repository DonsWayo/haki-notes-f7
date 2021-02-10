
import { createStore } from 'framework7/lite';

const store = createStore({
  state: {
    notes: [ 
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña" , date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'},
      { title: "title", content: "lorem impus locl fari sutyd jsds loco loco para la montaña", date: '17:14'}
    ],
    currentSpace: "Notes",
    loadingNotes: true,
    loadingSpaces: true,
    largeScreen: false,
    openNote: false
  },
  getters: {
    notes({ state }) {
      console.log('getNotes')
      return state.notes;
    },
    largeScreen({ state }) {
      return state.largeScreen;
    },
    openNote({ state }) {
      return state.openNote;
    }
  },
  actions: {
    addNote({ state }, product) {
      state.products = [...state.products, product];
    },
    getNotes({ state }) {
      const notes = []
      state.products = notes;
    },
    setLargeScreen({ state }, screen) {
      state.largeScreen = screen;
    },
    setOpenNote({ state }, openNote) {
      state.openNote = openNote;
    },
  },
})
export default store;
