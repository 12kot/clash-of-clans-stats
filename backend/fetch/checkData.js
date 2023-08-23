export const checkData = async (data, res) => {
  if (!data.ok)
    return res.status(data.status).json({
      message: data.statusText,
    });
  else return res.send(await data.json());
};
