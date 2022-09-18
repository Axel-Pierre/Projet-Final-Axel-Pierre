import produce from "immer";
const initialState = {
  id: "",
};
const MODIF = "modifUser";
const DELETE = "deleteUser";
export const editAction = (id) => ({
  type: MODIF,
  payload: id,
});
export const deleteAction = () => ({
  type: DELETE,
});

export default function modifReducer(state = initialState, action) {
  return produce(state, (draft) => {
    if (action.type === MODIF) {
      draft.id = action.payload;
    }
    if (action.type === DELETE) {
      draft.id = "";
    }
  });
}
