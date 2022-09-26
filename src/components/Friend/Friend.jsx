import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name } from "./Friend.styled";



export const FriendListItem = ({avatar, name, isOnline}) => {
    return (<Item>
        <Status>isOnline={isOnline}</Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Item>);
     ; 
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id:PropTypes.number.isRequired,
        
    }),
};