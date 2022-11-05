import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faStar,
  faRightToBracket,
  faUser,
  faBars,
  faUserGear,
} from '@fortawesome/free-solid-svg-icons';

const initIcon = () => {
  library.add(faStar, faRightToBracket, faUser, faBars, faUserGear);
};

export default initIcon;
