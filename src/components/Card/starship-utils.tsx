export const getStarshipId = (url: string | undefined): number | undefined => {
  if (url === undefined) {
    return undefined;
  }
  const starshipId = url.split('/').filter(Boolean).pop();
  return Number(starshipId);
};
export const getStarshipImage = (id: number | undefined): string | undefined => {
  if (id !== undefined) {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }
  return undefined;
};
