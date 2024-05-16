import logo from './logo.svg';
import './App.css';

// import React, {Component} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";
import {TwitterContext} from "./utils/twitterContext";

import React, {useState} from 'react';

const App = () => {
    const [user, setUser] = useState({
        avatar:
            "https://i.pinimg.com/736x/81/80/4f/81804f5985c95530ecde349411f316de.jpg",
        name:
            "nickname"
    })
    // const [stats, setStats] = useState()
    const [followers, setFollowers] = useState(1000)
    const [subscribing, setSubscribing] = useState(100)

    const changeFollowers = followers => setFollowers(followers)

    const changeSubscribing = subscribing => setSubscribing(subscribing)

    const changeAvatar = url => setUser({avatar: url || user.avatar,
    name: user.name})

    //  const changeAvatar = (url) => {
    //     let temp = this.state.user.avatar
    //     temp = url || this.state.user.avatar;
    //     this.setState({
    //         user: {
    //             avatar: temp,
    //             name: this.state.user.name
    //         }
    //     });
    // }

const changeName = name => setUser({avatar: user.avatar, name:name ||user.name})


    return (
        <div className={'app'}>
            <TwitterContext.Provider value={
                // {
                //     user: user,
                //     followers: followers,
                //     subscribing: subscribing,
                //     changeAvatar: changeAvatar,
                //     changeName: changeName
                // } тоже самое что и ниже

                {user, followers, subscribing, changeAvatar, changeName, changeFollowers, changeSubscribing}
            }>
                <Nav/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    );
};

export default App;


    // changeAvatar = (url) => {
    //     // const temp = {...this.state.user};
    //     let temp = this.state.user.avatar
    //     temp = url || this.state.user.avatar;
    //     this.setState({
    //         user: {
    //             avatar: temp,
    //             name: this.state.user.name
    //         }
    //     });
    // }
    //
    // changeName = (name) => {
    //     const temp = {...this.state.user};
    //     temp.name = name || this.state.user.name;
    //     this.setState({user: temp});
    // }


