const CHANGE = 'toiletIdReducer/CHANGE' as const;

export const change = (id: string) => ({
  type: CHANGE,
  id,
});

type toiletIdState = {
  id: string;
};

type toiletIdAction = ReturnType<typeof change>;

const INITIAL_STATE: toiletIdState = {id: 'empty'};

export function toiletIdReducer(
  state: toiletIdState = INITIAL_STATE,
  action: toiletIdAction,
): toiletIdState {
  switch (action.type) {
    case CHANGE:
      return {id: action.id};
    default:
      return state;
  }
}
