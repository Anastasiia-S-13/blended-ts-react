// Задача 9
// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2.  Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.

interface Container<T> {
    items: T[];
    addItem: (elem: T) => void;
    getItem: (index: number) => T;
}

let numberContainer: Container<number> = {
    items: [],
    addItem(elem) {
        this.items.push(elem);
    },
    getItem(index) {
        return this.items[index];
    }
};

let stringContainer: Container<string> = {
    items: [],
    addItem(elem) {
        this.items.push(elem);
    },
    getItem(index) {
        return this.items[index];
    }
};

stringContainer.addItem("adam");
console.log(stringContainer.items);

numberContainer.addItem(2);
numberContainer.addItem(3);
numberContainer.addItem(24);
console.log(numberContainer.getItem(2));
