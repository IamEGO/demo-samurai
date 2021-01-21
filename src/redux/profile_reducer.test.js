const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile_reducer");
import React from 'react';


test('length pf posts should be incremented', () => {
    //1.test data
    let action = addPostActionCreator("it-kamasutra.com");
    let state = {
        posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 12 },
            { id: 2, message: 'Hi, how are you?', likesCount: 11 },
        ]
    };
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length === 3 );
    expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
    //1.test data
    let action = deletePost(1);
    let state = {
        posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 12 },
            { id: 2, message: 'Hi, how are you?', likesCount: 11 },
        ]
    };
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(1);
});

test('after deleting length shouldn`t be decrement if id is incorrect', () => {
    //1.test data
    let action = deletePost(1000);
    let state = {
        posts: [
            { id: 1, message: 'It\'s my first post', likesCount: 12 },
            { id: 2, message: 'Hi, how are you?', likesCount: 11 },
        ]
    };
    //2.action
    let newState = profileReducer(state, action);
    //3.expectation
    expect(newState.posts.length).toBe(2);
});


