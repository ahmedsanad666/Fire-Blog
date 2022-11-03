export default {
  userId(state) {
    return state.userId;
  },
  userData(state) {
    const data = {
      email: state.profileEmail,
      firstName: state.profileFirstName,
      lastName: state.profileLastName,
      userName: state.profileUserName,
      nameInit: state.nameInit,
    };

    return data;
  },
  isAuthenticated(state) {
    return !!state.userId;
  },
};
