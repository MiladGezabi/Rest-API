
function isValidProduct(p) {
  if( (typeof p) !== "object" || p === null ) {
    return false
  }

  let nameIsValid = (typeof p.name) === "string"
  nameIsValid = nameIsValid && p.name !== ""
  let priceIsValid = (typeof p.price) === "number"
  priceIsValid = priceIsValid && p.price >= 0
  let imageIsValid = (typeof p.image) === "string"
  imageIsValid = imageIsValid && p.image !== ""
  let tagsIsValid = Array.isArray(p.tags) && p.tags.every(tag => typeof tag === "string" && tag !== "")

  if(!nameIsValid) {
    return false
  }else if(!priceIsValid) {
    return false
  }else if(!imageIsValid) {
    return false
  }else if(!tagsIsValid) {
    return false
  }

  return true
}

function hasID(object) {
  let idIsValid = (typeof object.id) === "number"
  idIsValid = idIsValid && object.id >= 0
  
  return idIsValid
}

export {isValidProduct, hasID}