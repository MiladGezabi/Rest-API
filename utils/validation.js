
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

function isValidId(id) {
  let maybeId = Number(id)

  if( isNaN(maybeId )) {
    return false
  }
  return maybeId >= 0
}

function isValidUser(u) {

  if ( (typeof u) !== "object" || u === null ) {
    return false
  }

  let nameIsValid = (typeof u.name) === "string"
  nameIsValid = nameIsValid && u.name !== ""
  let passwordIsValid = (typeof u.password) === "string"
  passwordIsValid = passwordIsValid && u.password !== ""

  if(!nameIsValid){
    return false
  }else if(!passwordIsValid) {
    return false
  }

  return true
}

export {isValidProduct, hasID, isValidId, isValidUser}