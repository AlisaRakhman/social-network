import React, {useContext} from 'react';
import UserAvatar from "./UserAvatar";
import {TwitterContext} from "../utils/twitterContext";

const UserStats = () => {
    const value = useContext(TwitterContext)
    return (
        <TwitterContext.Consumer>
            {(value) =>
                <div className={'user-stats'}>
                    <div>
                        <UserAvatar/>
                        {value.user.name}
                    </div>
                    <div className={'stats'}>
                        <div onClick={() => value.changeFollowers(() => value.followers + 1)}
                             onContextMenu={(e) => {
                                 e.preventDefault();
                                 if (value.followers > 0) {
                                     value.changeFollowers(() => value.followers - 1);
                                 }
                             }}
                        >
                            Followers: {value.followers}</div>
                        <div onClick={() => value.changeSubscribing(() => value.subscribing + 1)}
                             onContextMenu={(e) => {
                                 e.preventDefault();
                                 if (value.subscribing > 0) {
                                     value.changeSubscribing(() => value.subscribing - 1);
                                 }
                             }}
                        >Subscribing: {value.subscribing}</div>
                    </div>
                </div>
            }
        </TwitterContext.Consumer>
    );
};

export default UserStats;