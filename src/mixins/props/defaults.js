
const arrays = function (...props) {
  const objects = {}
  Array.from(props).forEach((element) => {
    objects[element] = {
      type: Array,
      default: () => {}
    }
  })
  return {
    props: objects
  }
}

const objects = function (...props) {
  const objects = {}
  Array.from(props).forEach((element) => {
    objects[element] = {
      type: Object,
      default: () => {}
    }
  })
  return {
    props: objects
  }
}

const strings = function (...props) {
  const objects = {}
  Array.from(props).forEach((element) => {
    objects[element] = {
      type: String,
      default: ''
    }
  })
  return {
    props: objects
  }
}

const booleans = function (...props) {
  const objects = {}
  Array.from(props).forEach((element) => {
    let defaultVal = false
    if (element.startsWith('!')) {
      defaultVal = true
      element = element.substr(1)
    }
    objects[element] = {
      type: Boolean,
      default: defaultVal
    }
  })
  return {
    props: objects
  }
}

export {arrays, objects, strings, booleans}
