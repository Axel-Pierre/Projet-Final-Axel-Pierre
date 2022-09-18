import produce from "immer";

const initialState = {
  users: "",
};

//action creators
const DELETE = "profiles/delete";
const CREATE = "profiles/create";
export const check = () => ({
  type: RESOLVED,
});

export const profilesDelete = (id) => ({
  type: DELETE,
  payload: id,
});
export const profilesCreate = (table) => ({
  type: CREATE,
  payload: table,
});

export default function profilesReducer(state = initialState, action) {
  return produce(state, (draft) => {
    if (action.type === CREATE) {
      draft.users = action.payload;
    }
    if (action.type === DELETE) {
      draft.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    }
  });
}
