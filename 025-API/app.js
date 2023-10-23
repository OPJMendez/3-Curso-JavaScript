const endPoint = 'https://api.npoint.io/ed8bd229e80e1229ee8f';

const getData = async () => {
  const serverResponse = await fetch(endPoint);
  const responseData = await serverResponse.json();
  console.log(responseData);
};

getData();
