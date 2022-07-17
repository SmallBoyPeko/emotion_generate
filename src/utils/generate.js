/**
 * 获取文件名
 * @param {string} name
 */
function getName(name) {
  return name.split('.')[0]
}
/**
 * 生成twikoo格式json文件
 * @param {Array<string>} nameList
 * @param {{baseUrl:string,prefix:string}} 配置对象
 */
function twikoo(nameList, config) {
  const key = config.twikoo.name
  const result = {
    [key]: {
      type: 'image',
      container: []
    }
  }
  nameList.forEach((name) => {
    result[key].container.push({
      icon: `<img src="${config.baseUrl}/${name}">`,
      text: `${config.prefix}${getName(name)}`
    })
  })
  return result
}

/**
 * 生成valine格式json文件
 * @param {Array<string>} nameList
 * @param {{baseUrl:string,prefix:string}} 配置对象
 */
function valine(nameList, config) {
  const result = {}
  nameList.forEach((name) => {
    result[`${config.prefix}${getName(name)}`] = `${config.baseUrl}/${name}`
  })
  return result
}

/**
 * 生成artalk格式json文件
 * @param {Array<string>} nameList
 * @param {{baseUrl:string,prefix:string}} 配置对象
 */
function artalk(nameList, config) {
  const result = {
    name: config.artalk.name,
    type: 'image',
    items: []
  }
  nameList.forEach((item) => {
    result.items.push({
      key: `${config.prefix}${getName(item)}`,
      val: `${config.baseUrl}/${item}`
    })
  })
  return result
}

const generateUtils = { twikoo, valine, artalk }
module.exports = generateUtils
