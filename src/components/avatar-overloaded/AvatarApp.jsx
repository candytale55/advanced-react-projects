
import "./assets/styles.css"
import avatarImage from "./assets/image-avatar.jpg"


import Avatar from "./Avatar"

export default function AvatarApp() {
    return (
        <>
            <h2>I am AvatarApp</h2>
            <Avatar src={avatarImage} alt="Real Person" />
            <br />
            <Avatar>BZ</Avatar>
            <br />
            <Avatar />
        </>
    )
}