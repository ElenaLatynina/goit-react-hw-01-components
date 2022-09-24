import PropTypes from 'prop-types';

import { ProfileCard, Description, Avatar, Name, UserTag, UserLocation, UserStats, StatBlock } from "./Profile.styled";


export const Profile = ({ user: { username, tag, location, avatar, stats:{followers, views, likes} } }) => {
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
                    <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
                </StatBlock>
                <StatBlock>{views}
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </StatBlock>
                <StatBlock>{likes}
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
                </StatBlock>
            </UserStats>
        </ProfileCard>
    );
};

ProfileCard.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};