export const getLabels = (labels) => {
  return labels.items.map((label) => {
    return { id: label.id, title: label.name, img: label.iconUrls.medium };
  });
};
