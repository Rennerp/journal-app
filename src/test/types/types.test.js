import { types } from "../../types/types";

describe("Pruebas con los tipos", () => {
  test("Debe de tener los types", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
      notesAdd: "[Notes] New note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update notes saved",
      notesFileUrl: "[Notes] Update image url",
      notesDelete: "[Notes] Delete note",
      notesLogOutCleaning: "[Notes] LogOut Cleaning",
    });
  });
});
