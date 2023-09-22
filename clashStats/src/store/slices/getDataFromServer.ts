//запрос на сервер
export const getDataFromServer = async <T>(
  path: string
): Promise<T | Error> => {
  const res = await fetch(`http://localhost:8000/${path}`);

  try {
    if (res.ok) {
      const data: T = await res.json();
      return data;
    } else return new Error(res.statusText);
  } catch {
    return new Error(res.statusText);
  }
};
