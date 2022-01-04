//1
const phone = {
  name: "IPhone X",
  price: 2000,
  discount: null,
  quantity: 1,
  weight: null,
};

function createObjWithoutNull(phone) {
  objPhone = Object.assign({}, phone),
  arrayKeyValue = Object.entries(objPhone);
  let arr = arrayKeyValue.filter((key) => key[1] !== null)
  return Object.fromEntries(arr)
}
createObjWithoutNull(phone);

//1.1
const phone = {
  name: "IPhone X",
  price: 2000,
  discount: null,
  quantity: 1,
  weight: null,
};

function createObjWithoutNullDestructuring(phone) {
  let { ...newObjPhone } = phone,
  arrayKeyValue = Object.entries(newObjPhone);
  let arr = arrayKeyValue.filter((key) => key[1] !== null)
  return Object.fromEntries(arr)
}
createObjWithoutNullDestructuring(phone)
