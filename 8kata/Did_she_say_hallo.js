function validateHello(greetings) {
  const hello = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
  const res = hello.find((el) => greetings.toLowerCase().includes(el));
  return !!res;
}

console.log(validateHello("ahoj"));
