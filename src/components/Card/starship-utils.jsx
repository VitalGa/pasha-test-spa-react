export const getStarshipId = (url) => {
  const starshipId = url.split('/').filter(Boolean).pop();
  return starshipId;
};
export const getStarshipImage = (id) => {
  return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
};
