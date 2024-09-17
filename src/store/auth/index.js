import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    username: "metehan.bekiroglu",
    fullName: "Metehan BEKİROĞLU",
    avatar:
      "https://storage.evrimagaci.org/old/mi_media/afcae823e61eefb077e1f223594b1e7f.jpeg",
  },
  accounts: [
    {
      id: 1,
      username: "metehan.bekiroglu",
      fullName: "Metehan BEKİROĞLU",
      avatar:
        "https://storage.evrimagaci.org/old/mi_media/afcae823e61eefb077e1f223594b1e7f.jpeg",
    },
    {
      id: 2,
      username: "ASLIACICI",
      fullName: "Aslı AÇICI",
      avatar:
        "https://pbs.twimg.com/profile_images/1586392809615114241/6bZrN-co_400x400.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // state manipule etme metodlari
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _setCurrentAccount, _removeAccount } = auth.actions;
export default auth.reducer;
