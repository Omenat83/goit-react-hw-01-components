import { FriendCard, Status } from "./FriendListItem.styled";
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendCard >
            <Status isOnline={isOnline}></Status>
          <img src={avatar} alt="User avatar" width="48" />
          <p >{name}</p>
        </FriendCard>
      );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, 
  isOnline: PropTypes.bool.isRequired
}