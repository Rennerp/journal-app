import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Pruebas en UI-Actions", () => {
  test("Todas las acciones deben de funcionar", () => {
    const action = setError("Error returned");
    expect(action).toEqual({
      type: types.uiSetError,
      payload: "Error returned",
    });

    const removeErrorAction = removeError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();

    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
    });
    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
    });
  });
});
