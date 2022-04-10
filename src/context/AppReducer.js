export default (state, action) => {
  switch (action.type) {
    case "DELETE_EXPENSE":
      return {
        ...state,
        fuelingExpenses: state.fuelingExpenses.filter(
          (e) => e.carName !== action.payload
        ),
      };

    case "ADD_EXPENSE":
      return {
        ...state,
        fuelingExpenses: [action.payload, ...state.fuelingExpenses],
      };

    default:
      return state;
  }
};
