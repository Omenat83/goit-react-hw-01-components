import { Container, List, UserName } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({
  profile: {
    username,
    avatar,
    location,
    tag,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Container>
      <div>
        <img src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <List>
          <span>Followers: </span>
          <span>{followers}</span>
        </List>
        <List>
          <span>Views: </span>
          <span>{views}</span>
        </List>
        <List>
          <span>Likes: </span>
          <span>{likes}</span>
        </List>
      </ul>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
