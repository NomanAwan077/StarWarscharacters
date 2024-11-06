import { URL } from "../types";

export const getData = async (pageNo = 3) => {
  const response = await fetch(`${URL}/people/?page=${pageNo}`);
  const data = await response.json();
  return data;
};

export const getFilmData = async (film) => {
  try {
    const response = await fetch(`${film}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
};
export const getHomeworldData = async (homeworld) => {
  const response = await fetch(`${homeworld}`);
  const data = await response.json();
  return data;
};
export const getSpeciesData = async (species) => {
  const response = await fetch(`${species}`);
  const data = await response.json();
  return data;
};
