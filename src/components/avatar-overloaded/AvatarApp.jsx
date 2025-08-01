import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/styles.css"
import {avatarPic} from "./assets/image-avatar.jpg"

import Avatar from "./Avatar"

export default function AvatarApp() {
    return (
        <>
            <h2>I am AvatarApp</h2>
            <Avatar src={avatarPic} alt="avatar name" />
            <br />
            <Avatar>BZ</Avatar>
            <br />
            <Avatar />
        </>
    )
}