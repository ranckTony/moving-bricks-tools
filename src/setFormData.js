function setFormData(formData, originData) {
  for (const attr in formData) {
    formData[attr] = originData[attr];
  }
}

export default setFormData;
