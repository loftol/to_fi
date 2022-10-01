const OPEN = 'isReviewOpen/OPEN' as const;
const CLOSE = 'isReviewOpen/CLOSE' as const;

export const open = () => ({
  type: OPEN,
});
export const close = () => ({
  type: CLOSE,
});

type isReviewOpenState = {
  isReviewOpen: boolean;
};

type isReviewOpenAction = ReturnType<typeof open> | ReturnType<typeof close>;

const INITIAL_STATE: isReviewOpenState = {isReviewOpen: false};

export function isReviewOpenReducer(
  state: isReviewOpenState = INITIAL_STATE,
  action: isReviewOpenAction,
): isReviewOpenState {
  switch (action.type) {
    case OPEN:
      return {isReviewOpen: true};
    case CLOSE:
      return {isReviewOpen: false};
    default:
      return state;
  }
}
