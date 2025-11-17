const getData = () => {
  return fetch(
    "https://test-29f70-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
