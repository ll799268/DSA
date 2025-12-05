const generateMatrix1 = (num: number): number[][] => {
  const res: number[][] = [];

  for (let i = 0; i < num; i++) {
    res[i] = new Array(num).fill(0);
  }

  let single = 1;
  for (let i = 0; i < num; i = i + 2) {
    for (let j = 0; j < num; j++) {
      single = num * i + 1;
      res[j][i] = single + j;
    }
  }

  let odd = num - 1;
  for (let i = 1; i < num; i = i + 2) {
    for (let j = 0; j < num; j++) {
      odd = num * (i + 1);
      res[j][i] = odd - j;
    }
  }
  return res;
};

// 1 6 7
// 2 5 8
// 3 4 9

// 1 10 11 20 21
// 2  9 12 19 22
// 3  8 13 18 23
// 4  7 14 17 24
// 5  6 15 16 25

console.log(generateMatrix1(5));
