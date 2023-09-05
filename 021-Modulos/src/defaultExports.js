/*
Cuando solamente queremos exportar una función:
 */
const getUser = () => {
  return {
    name: "Juana",
    email: "juan@gmail.com",
  };
};
export default getUser;
