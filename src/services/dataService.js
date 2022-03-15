import { BASE_URL } from "../utils/serviceHelpers";
import { getRandomPageNumber } from "../utils/arrayHelpers";

export const fetchData = async () => {
  //TODO: implement params call
  return await (
    await fetch(`${BASE_URL}?limit=10&offset=${getRandomPageNumber()}`)
  ).json();
};
