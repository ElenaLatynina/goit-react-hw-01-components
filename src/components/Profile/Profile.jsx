import { ProfileCard, Description, Avatar,Name, UserTag, UserLocation, UserStats} from "./Profile.styled";

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
                <li>{followers}
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>{views}
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>{likes}
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
                </li>
            </UserStats>
        </ProfileCard>
    );
};