import React from 'react';
import UserStats from "./userStats";

const SideBar = ({user, stats}) => {
    return (
        <div className={'sidebar'}>
            <UserStats/>
        </div>
    );
};

export default SideBar;