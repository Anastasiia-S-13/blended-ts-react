// Задача 13
// Є функція reducer:
// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = {
    Atype: "increment" | "decrement"
};

function reducer(state: number, action: Action) {
  switch (action.Atype) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}