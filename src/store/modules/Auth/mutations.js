export default {
  setAuthState(state, payload) {
    state.isAuthanticated = payload;
    console.log(state.isAuthanticated);
  },
  setUserData(state, payload) {
    state.userId = payload.id;
    state.profileEmail = payload.data().email;
    state.profileFirstName = payload.data().firstName;
    state.profileLastName = payload.data().lastName;
    state.profileUserName = payload.data().userName;
    state.nameInit =
      payload
        .data()
        .firstName.match(/(\b\S)?/g)
        .join("") +
      payload
        .data()
        .lastName.match(/(\b\S)?/g)
        .join("");
  },
  update(state, payload) {
    state.firstName = payload.firstName;
    state.lastName = payload.lastName;
    state.userName = payload.userName;
    console.log(state);
  },
  firstName(state,payload){
   state.profileFirstName= payload;
  }
};
