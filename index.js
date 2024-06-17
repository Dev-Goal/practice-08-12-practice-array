let array = [
  245, 56, 456, 34, 234, 678, 76, 232, -324, 32432, -23423, -24526, -232, -356,
  545, 554, 999, 184, 91664,
];
let max = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > array[0]) {
    max = array[i];
  }
}
document.write("Array = " + array + "<br>");
document.write("Giá trị lớn nhất là " + max);
