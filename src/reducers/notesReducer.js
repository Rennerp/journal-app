/*
  {
    notes: [],
    active: null || {
      id: firebase_id,
      title: string,
      body: string,
      image_url?: string,
      date: Date.now
    }
  }
*/

import { types } from "../types/types";

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    default:
      return state;
  }
};
