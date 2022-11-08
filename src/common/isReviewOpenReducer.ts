const OPEN = 'isReviewOpen/OPEN' as const;
const CLOSE = 'isReviewOpen/CLOSE' as const;

export const open = (toiletId: string) => ({
  type: OPEN,
  payload: toiletId,
});
export const close = () => ({
  type: CLOSE,
});

type isReviewOpenState = {
  isReviewOpen: boolean;
  openedId: string;
};

type isReviewOpenAction = ReturnType<typeof open> | ReturnType<typeof close>;

const INITIAL_STATE: isReviewOpenState = {
  isReviewOpen: false,
  openedId: '00000',
};

export function isReviewOpenReducer(
  state: isReviewOpenState = INITIAL_STATE,
  action: isReviewOpenAction,
): isReviewOpenState {
  switch (action.type) {
    case OPEN:
      return {isReviewOpen: true, openedId: action.payload};
    case CLOSE:
      return {isReviewOpen: false, openedId: '00000'};
    default:
      return state;
  }
}
