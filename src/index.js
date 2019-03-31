import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Avatar from './Avatar';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import Time from './Time';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import MoreOptionsButton from './MoreOptionsButton';
import LikeButton from './LikeButton';

// import './index.css';


class Tweet extends React.Component{
    render(){
        return(
            <div className='tweet'>
                <Avatar/>
                <div className="content">
                    <NameWithHandle/><Time/>
                    <Message/>
                    <div className="buttons" >
                        <ReplyButton/>
                        <RetweetButton/>
                        <LikeButton/>
                        <MoreOptionsButton/>
                    </div>    
                </div>
            </div>
        );
    }
} 
ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root'));
