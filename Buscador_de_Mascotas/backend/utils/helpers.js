function formatDate(date) {
  if (!date) {
    return ""; 
  }
  return formatDateToString(date);
}

function ifCond(v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
}

function formatDateToString(date) {
  if (!date) {
    return ""; 
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

module.exports = { formatDate, ifCond };
