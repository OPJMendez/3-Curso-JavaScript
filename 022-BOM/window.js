const makeCookie = () => {
  const expirationDate = new Date('2023-11-03T10:22:00Z').toUTCString();
  document.cookie = `name=James; expires=${expirationDate}`;
};
