import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';
import Message from './Message';
import NameWithHandle from './NameWithHandle';
import './index.css';

class Tweet extends React.Component{
    render(){
        return(
            <div className='tweet'>
                <Avatar/>
                <div className="content">
                    <NameWithHandle/>
                    <Message/>
                </div>
            </div>
        );
    }
} 
ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root'));
