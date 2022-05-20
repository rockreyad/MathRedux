const numberReducer = (state = 0, action) => {
  if (action.type === "ADD") {
    return state + action.payload;
  } else if (action.type === "SUB") {
    return state - action.payload;
  } else if (action.type === "MUL") {
    return state * action.payload;
  } else if (action.type === "DIV") {
    return state / action.payload;
  } else return state;
};

export default numberReducer;
