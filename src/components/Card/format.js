export const formatCreditCardNumber = val => {
  const v = val.replace(/[^0-9]/gi, "");
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || "";
  let parts = [];
  for (i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }
  return parts.length ? parts.join(" ") : val;
};

export const formatExpDate = val => {
  const v = val.replace("/", "");
  const matches = v.match(/\d{3,4}/g);
  const match = (matches && matches[0]) || "";
  let parts = [];
  for (i = 0, len = match.length; i < len; i += 2) {
    parts.push(match.substring(i, i + 2));
  }
  return parts.length ? parts.join("/") : v;
};
