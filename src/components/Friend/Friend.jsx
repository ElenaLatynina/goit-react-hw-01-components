import PropTypes from 'prop-types';
import { FriendListItem, Status, Avatar, Name } from "./Friend.styled";



export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (<FriendListItem>
        <Status>{isOnline}</Status>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
    </FriendListItem>);
 
};
