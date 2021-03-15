import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editeMode, setEditeMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const activateEditMode = () => {
        setEditeMode(true);
    };

    const deactivateEditMode = () => {
        setEditeMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editeMode &&
                <div>
                    <b>Status</b>: <span onDoubleClick={activateEditMode} >{props.status || "----"}</span>
                </div>
            }
            {editeMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } 
                    value={ status } />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;