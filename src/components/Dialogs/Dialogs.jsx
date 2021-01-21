import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'
import { Redirect } from 'react-router-dom';
import { AddMessageFormRedux } from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map(
        (dialog) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messagesData.map(
        message => <Message message={message.message} key={message.id} />);

    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
};

export default Dialogs;