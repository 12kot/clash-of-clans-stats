import dotenv from "dotenv";
dotenv.config();

const key = process.env.CLASH_OF_CLANS_KEY;

export const fetchData = async (path) => {
  const data = await fetch(`https://api.clashofclans.com/v1/${path}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  return data;
};
