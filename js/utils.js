export const insertMarkup = (res, type) => {
  const markup = [];
  res.map((data, index) => {
    markup.push(
      `<li id=${index + 1}>${
        type === 'users' ? data.name : data.body
      }</li>`
    );
  });
  return markup;
};
