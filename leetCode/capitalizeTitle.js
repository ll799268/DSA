/**
 * 将标题首字母大写
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
  return title.split(' ')
    .map(c => {
      c = c.toLowerCase()
      if (c.length > 2) {
        c = c[0].toUpperCase() + c.slice(1)
      }
      return c
    })
    .join(' ')
};

console.log(capitalizeTitle('capiTalIze tHe titLe'));