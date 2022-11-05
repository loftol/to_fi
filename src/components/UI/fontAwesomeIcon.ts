import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faStar as star,
  faRightToBracket,
  faUser,
  faBars,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';
import {faStar as emptyStar} from '@fortawesome/free-regular-svg-icons';

const initIcon = () => {
  library.add(star, emptyStar, faRightToBracket, faUser, faBars, faUserGear);
};

export default initIcon;
