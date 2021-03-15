import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'It\'s my first post', likesCount: 12 },
                { id: 2, message: 'Hi, how are you?', likesCount: 11 },
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' },
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
            ],
            newMessageBody: ""
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State chenged');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;