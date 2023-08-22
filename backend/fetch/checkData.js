export const checkData = (data, res) => {
  if (data.ok === false)
    return res.status(data.status).json({
      message: data.statusText,
    });
  else return res.send(data);
};
