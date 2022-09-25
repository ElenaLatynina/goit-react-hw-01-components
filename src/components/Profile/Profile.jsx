import PropTypes from 'prop-types';

import { ProfileCard, Description, Avatar, Name, UserTag, UserLocation, UserStats, StatBlock, StatLabel, StatValue} from "./Profile.styled";

export const Profile = ({ user: { username, tag, location, avatar, stats:{followers, likes, views}} }) => {
    return (
        <ProfileCard>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username }</Name>
                <UserTag>{ tag}</UserTag>
                <UserLocation>{ location}</UserLocation>
            </Description>
            <UserStats>
                <StatBlock>
                    <StatLabel>Followers</StatLabel>
                    <StatValue>{followers}</StatValue>
                </StatBlock>
                <StatBlock>
                    <StatLabel>Views</StatLabel>
                    <StatValue>{views}</StatValue>
                </StatBlock>
                <StatBlock>
                    <StatLabel>Likes</StatLabel>
                    <StatValue>{likes }</StatValue>
                </StatBlock>
            </UserStats>
        </ProfileCard>
    );
};

ProfileCard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        
    }),
};