const CHANGE = 'changeShowState' as const;

export const change = (id: number) => ({
  type: CHANGE,
  id,
});

type showStateType = {
  id: number;
};

type showStateActionType = ReturnType<typeof change>;

const INITIAL_STATE: showStateType = {id: 0};

export default function showStateReducer(
  state: showStateType = INITIAL_STATE,
  action: showStateActionType,
): showStateType {
  switch (action.type) {
    case CHANGE:
      return {id: action.id};
    default:
      return state;
  }
}
