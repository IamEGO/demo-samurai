import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = React.memo((props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} key={p.id} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={Textarea} name={"newPostText"} placeholder={"Post message"}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button>AddPost</button>
            </div>
        </form>
    )
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm);

export default MyPosts;