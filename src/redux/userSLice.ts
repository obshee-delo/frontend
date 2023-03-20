import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
  exist: null,
};
const userSLice = createSlice({
  name: "users",
  initialState,
  reducers: {
    registrateUser: {
      reducer(state, { payload }) {
        state.users = [...state.users, { ...payload }];
        state.exist = payload;
      },
      prepare(
        pwd: string,
        user: string,
        lastName: string,
        mail: string,
        phone: string
      ) {
        return {
          payload: {
            pwd,
            user,
            lastName,
            mail,
            phone,
            buy: [],
          },
        };
      },
    },
    logIn: {
      reducer(state, { payload }) {
        const checkP = state.users.find((el) => el.pwd == payload.pwd);
        const checkN = state.users.find((el) => el.user == payload.user);
        if (checkP && checkN) {
          state.exist = payload;
        } else {
          alert("i dont now you");
        }
      },
      prepare(pwd, user) {
        return {
          payload: {
            pwd,
            user,
          },
        };
      },
    },
    out(state) {
      state.exist = null;
    },
    addPicture: {
      prepare(file, person) {
        return {
          payload: {
            img: file,
            person,
          },
        };
      },
      reducer(state, { payload }) {
        state.exist.img = payload.img;
        const findIt = state.users.find((el) => (el.pwd = payload.person.pwd));
        findIt.img = payload.img;
      },
    },
  },
});
export default userSLice.reducer;
export const { registrateUser, logIn, out, addPicture } = userSLice.actions;
export const userState = (state) => state.users;
