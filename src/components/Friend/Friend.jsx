import PropTypes from 'prop-types';
import {Item, Status, Avatar, Name } from "./Friend.styled";



export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
    return (<Item>
        <Status>{isOnline}</Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </Item>);
 
};

Item.propTypes = {
    friend: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        
    }),
};