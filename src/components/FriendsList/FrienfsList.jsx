import PropTypes from 'prop-types'
import { FriendListItem } from 'components/Friend/Friend';
import { Friends } from './FriendsList.styles';

export 	const FriendList = ({ friends }) => {
	    return (
	        <Friends>
	            {friends.map(({id, avatar, name, isOnline}) => (
	                <FriendListItem
	                    key={id.toString()}
	                    avatar={avatar}
	                    name={name}
	                    isOnline={isOnline}
	                    />
	            ))}
	        </Friends>
	    )
	};
	

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        })
    ),
}
