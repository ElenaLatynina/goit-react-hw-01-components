import PropTypes from 'prop-types'
import { FriendListItem } from 'components/Friend/Friend';
import { Friends } from './FriendsList.styles';

export const FriendList = ({ friends }) => {
    return (
    
        <Friends>
            {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem friends={friends} />
                </li>
            ))}
        </Friends>
    );

};

FriendList.propTypes = {
friends:PropTypes.array.isRequired,
};