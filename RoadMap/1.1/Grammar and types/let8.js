function go(n) {
  console.log(n); // { a: [1, 2, 3] }

  for (let item of n.a) {
    console.log(item);
  }
}

go({ a: [1, 2, 3] });
