const students = [
  { name: "ksd", age: 31, math: 85, english: 87 },
  { name: "kjh", age: 29, math: 95, english: 97 },
  { name: "csh", age: 27, math: 76, english: 80 },
  { name: "mattue", age: 40, math: 56, english: 65 },
  { name: "kelly", age: 33, math: 49, english: 100 },
];
const between21to30StudentAvg =
  students
    .filter((s) => s.age >= 21 && s.age <= 30) //Student 객체가 매개변수 s, s.age가 21~30 사이이면 push
    .map((score) => score.english + score.math) //score에 수학점수와 영어 점수를 더하여 push
    .reduce(
      (previous, current, index, array) => previous + current / array.length,
      0
    ) / 2; //최종 result를 리턴

console.log(between21to30StudentAvg);
