export const getRandomValue = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomPageNumber = () => {
  return Math.floor(Math.random() * (888 + 1));
};
