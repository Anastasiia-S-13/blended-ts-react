// Задача 5
// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.
interface User {
    name: string;
    age: number;
    isAdmin: boolean;
}

function createUser({name, age}: Pick<User, "name" | "age">): User {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });