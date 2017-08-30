var n = +prompt();
var A = new Array(n);

for (i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random() * 200);
}

console.log("Начальный вариант массива А : " + A);

// FIRST TASK

var B = [];
var flag = true;

for (var i = 0; i < A.length; i++) {
    for (var j = 2; j < A[i]; j++) {
        if (A[i] % j == 0) {
            flag = false;
            break;
        }
        // else continue;
    }
    if (flag == true) {
        B.push(A[i]);
    } else flag = true;
}

console.log("Массив правильных чисел из массива А : " + B);

// SECOND TASK

var min = A[0],
    max = A[0];
var pos_min = 0,
    pos_max = 0;

for (i = 1; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
        pos_min = i;
    }
    if (A[i] > max) {
        max = A[i];
        pos_max = i;
    }
}

var D = new Array();

if (pos_min < pos_max) {
    for (i = pos_min; i <= pos_max; i++) {
        D[D.length] = A[i];
    }
} else {
    for (i = pos_max; i <= pos_min; i++) {
        D[D.length] = A[i];
    }
}

console.log("Массив значений между минимальным и максимальными числами из массива А : " + D);

var swap = A[pos_min];
A[pos_min] = A[pos_max];
A[pos_max] = swap;

console.log("Массив А с поменяными местами максимальное и минимальное значение : " + A);

// THIRD TASK

for (i = 0, j = A.length - 1; i <= j; i++, j--) {
    var rev = A[j]
    A[j] = A[i];
    A[i] = rev;
}

console.log("Реверс массива А бех применения метода reverse  и вспомогательного массива : " + A);

// FOURTH TASK


var x = +prompt("Введите номер начальной ячейки"),
    y = +prompt("Введите номер конечной ячейки. Но не больше, чем" + n);

var C = new Array();

C = A.slice(x, y + 1);
C = C.reverse();

console.log("Реверс массива вырезанного из массива А с " + x + " позиции, по " + y + " : " + C);
// console.log(A);

for (i = x, j = 0; j < C.length; i++, j++) {
    A[i] = C[j];
}

console.log("В очередной раз измененный массив А : " + A);

// FIFTH TASK
var n = +prompt("Введите сколько показать чисел из ряда Фибоначчи");
var Fib = new Array();
Fib[0] = 0;
Fib[1] = 1;
if (n >= 2) {
    for (i = 2; i <= n; i++) {
        Fib[i] = Fib[i - 1] + Fib[i - 2];
    }
}

console.log(n + " первых чисел ряда Фибоначчи : " + Fib);

// SIXTH TASK

var min = A[0];

for (i = 0; i < A.length; i++) {
    if (min > A[i]) {
        min = A[i];
    }
}

var count = 0;
for (i = 0; i < A.length; i++) {
    if (A[i] > min && A[i] <= min + 5) {
        count++;
    }
}

console.log("Количество чисел отличающихся от минимального на 5 : " + count);

// SEVENTH TASK

var A = new Array(1, 2, 4, 7, 2, 5, 1, 5, 3);

console.log(A);

function dublicate(arr) {
    for (i = 0; i < A.length; i++) {
        for (j = 1; j < A.length; j++) {
            if (i == j) {
                continue;
            } else if (A[i] == A[j]) {
                A.splice(j, 1);
                dublicate(A);
            } else
                continue;
        }
    }
    return A;
}

dublicate(A);

console.log("Массив А без повторяющихся элементов : " + A);