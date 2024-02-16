function sortAnimal(animals) {
  return [...animals]
    .sort((a, b) => (a.name < b.name ? 1 : -1))
    .sort((a, b) => (a.numberOfLegs > b.numberOfLegs ? 1 : -1));
}
