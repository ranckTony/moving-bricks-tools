function clearObject(obj) {
  for (const attr in obj) {
    obj[attr] = "";
  }
}

export default clearObject;
