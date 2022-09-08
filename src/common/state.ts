const OPEN = 'isMenuOpen/OPEN' as const;
const CLOSE = 'isMenuOpen/CLOSE' as const;

export const open = () => ({
  type: OPEN,
});
export const close = () => ({
  type: CLOSE,
});

type isMenuOpenState = {
  isMenuOpen: boolean;
};

type isMenuOpenAction = ReturnType<typeof open> | ReturnType<typeof close>;

const INITIAL_STATE: isMenuOpenState = {isMenuOpen: false};

export function isMenuOpenReducer(
  state: isMenuOpenState = INITIAL_STATE,
  action: isMenuOpenAction,
): isMenuOpenState {
  switch (action.type) {
    case OPEN:
      return {isMenuOpen: true};
    case CLOSE:
      return {isMenuOpen: false};
    default:
      return state;
  }
}
