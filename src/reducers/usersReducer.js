export default (state = {}, { type, users }) => {
  switch (type) {
    case "FETCH":
      return users;

    default:
      return state;
  }
};
