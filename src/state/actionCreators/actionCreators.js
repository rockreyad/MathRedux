export const addNumber = (number) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: number,
    });
  };
};

export const subNumber = (number) => {
  return (dispatch) => {
    dispatch({
      type: "SUB",
      payload: number,
    });
  };
};
export const mulNumber = (number) => {
  return (dispatch) => {
    dispatch({
      type: "MUL",
      payload: number,
    });
  };
};
export const divNumber = (number) => {
  return (dispatch) => {
    dispatch({
      type: "DIV",
      payload: number,
    });
  };
};
