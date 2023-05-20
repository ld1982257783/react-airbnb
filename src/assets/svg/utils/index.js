// 当前函数 用于将 style 字符串类型 装换为 对象类型
function styleStrToObject(styleStr) {
    const obj = {}
    const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
        return g.toUpperCase();
    }).replace(/;\s?$/g, "").split(/:|;/g)
    for (var i = 0; i < s.length; i += 2) {
        obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "")
    }

    return obj
}

export default styleStrToObject
