import React from 'react';
import UserAvatar from "./UserAvatar";

const Nav = (props) => {
    return (
        <div className={'nav'}>
            <UserAvatar size={'small'}/>
        </div>
    );
};

export default Nav;