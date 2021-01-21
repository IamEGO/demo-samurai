import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item}>
            <img src='https://drasler.ru/wp-content/uploads/2019/10/%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%B0%D1%80%D1%82-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%BA%D0%B8-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-012.jpg' />
            {props.message}
            <div>
                <span>
                    like
                {props.likesCount}
                </span>
            </div>
        </div>
    )
}

export default Post;