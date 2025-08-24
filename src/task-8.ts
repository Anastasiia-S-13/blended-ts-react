// Задача 8

// Завдання:
// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.
// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.
// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.

const adminRole: string[] = ["create", "read", "update", "delete"];
const userRole: string[] = ["read", "update"];
const guestRole: string[] = ["read"];

enum Role {
  Admin,
  User,
  Guest
}

function getPermissions(role: Role): string[] {
    if (role === Role.Admin) {
        return adminRole;
    } else if (role === Role.User) {
        return userRole;
    } else if (role === Role.Guest) {
        return guestRole;
    }

    return [];
}