function queueTime(customers, n) {
  const tills = new Array(n).fill(0);

  for (const customerTime of customers) {
    const minWaitTimeIndex = tills.indexOf(Math.min(...tills));

    tills[minWaitTimeIndex] += customerTime;
  }

  return Math.max(...tills);
}

console.log(queueTime([2, 3, 10, 2], 2));
