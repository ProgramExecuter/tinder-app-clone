import React from 'react';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Jane Fueler"
                message="Hey whats goin on"
                timestamp="32 minutes ago"
                profilePic="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg" 
            />
            <Chat
                name="Mike Taylor"
                message="Heya !!!"
                timestamp="2 minutes ago"
                profilePic="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" 
            />
            <Chat
                name="Amanda Miller"
                message="Hey there whats's cookin"
                timestamp="43 minutes ago"
                profilePic="https://dz9yg0snnohlc.cloudfront.net/new-the-enjoyable-art-of-learning-to-talk-to-random-people-2.png" 
            />
            <Chat
                name="Milley Caeser"
                message="Nice to meet you!!"
                timestamp="51 minutes ago"
                profilePic="https://anikphoto.files.wordpress.com/2008/10/july-24-2008-28.jpg" 
            />
        </div>
    );
};

export default Chats;