// **Моделирование Задержки Выполнения**:
// Напишите функцию, которая принимает число в качестве входных данных и
// возвращает промис, который разрешается после указанного количества миллисекунд.
// Используйте эту функцию, чтобы создать задержку в 2 секунды, а затем
// зарегистрировать сообщение в консоли после разрешения промиса.

// function delayExecution(milliseconds) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, milliseconds);
//   });
// }

// delayExecution(2000).then(() => {
//   console.log(`Delay in 2 seconds finished`);
// });

// **Цепочка Промисов**:
// Создайте две функции, `firstTask` и `secondTask`, каждая из которых возвращает
// промис, разрешающийся строковым сообщением. Свяжите эти промисы так, чтобы
// вторая задача выполнялась только после разрешения первой. Наконец,
// зарегистрируйте объединенный результат в консоли.

// function firstTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`First task completed`);
//     }, 2000);
//   });
// }

// function secondTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Second task completed`);
//     }, 1000);
//   });
// }

// firstTask()
//   .then((result) => {
//     console.log(result);
//     return secondTask();
//   })
//   .then((result) => {
//     console.log(result);
//   });

// **Использование Promise.all()**:
// Создайте три отдельные функции, каждая из которых возвращает промис, который
// разрешается строковым сообщением после указанной задержки. Используйте
// `Promise.all()` для выполнения всех трех функций параллельно и зарегистрируйте
// массив разрешенных сообщений после разрешения всех промисов

// function firstPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from first promise`);
//     }),
//       2000;
//   });
// }

// function secondPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from second promise`);
//     }),
//       1500;
//   });
// }

// function thirdPromise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Message from third promise`);
//     }),
//       1000;
//   });
// }

// Promise.all([firstPromise(), secondPromise(),thirdPromise()]).then(messages=>{
//     console.log(messages)
// })

// **Сценарий с Promise.race()**:
// Напишите две функции, `fastTask` и `slowTask`, каждая из которых возвращает
// промис, который разрешается строковым сообщением после различных временных
// задержек (один быстрый, другой медленный). Используйте `Promise.race()` для
// выполнения обеих функций и зарегистрируйте результат промиса, который
// разрешается первым.

// function fastTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Fast task completed`);
//     }),
//       1000;
//   });
// }

// function slowTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Slow task completed`);
//     }, 3000);
//   });
// }



// Promise.race([fastTask(),slowTask()]).then(result => {
//     console.log(result)
// })