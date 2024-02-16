function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  let plantSize = 0;
  let counter = 0;
  while (plantSize < desiredHeight) {
    plantSize += upSpeed;
    counter++;
    if (plantSize >= desiredHeight) break;
    plantSize -= downSpeed;
  }

  return counter;
}

console.log(growingPlant(100, 10, 910)); // 10
