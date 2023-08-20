import dotenv from "dotenv";
dotenv.config();

const key = process.env.CLASH_OF_CLANS_KEY;

export const fetchData = async (path) => {
  const res = await fetch(`https://api.clashofclans.com/v1/${path}`, {
    headers: {
      Authorization: `Bearer ${key}`,
    },
  });

  try {
    if (res.ok) return await res.json();
    else
      return {
        ok: false,
        status: res.status,
        statusText: res.statusText,
      };
  } catch {
    return {
      ok: false,
      status: res.status,
      statusText: res.statusText,
    };
  }
};
