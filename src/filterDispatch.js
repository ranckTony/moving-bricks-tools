export default function filterDispatch(list, filterFn = "filterFn") {
  if (!Array.isArray(list)) {
    return list;
  }
  return list.filter((item) => {
    if (typeof item[filterFn] === "function") {
      return item[filterFn]();
    } else {
      return true;
    }
  });
}
