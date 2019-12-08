import Mock from "mockjs"

const Random = Mock.Random
const operate = (url: string, methods: string, data: any) => Mock.mock(RegExp(`/mock/${url}.*`), methods, data)

const result: any = {
  code: 1,
  msg: "success",
  data: {}
}

// let template = {
//   'Boolean': Random.boolean, // 可以生成基本数据类型
//   'Natural': Random.natural(1, 10), // 生成1到100之间自然数
//   'Integer': Random.integer(1, 100), // 生成1到100之间的整数
//   'Float': Random.float(0, 100, 0, 5), // 生成0到100之间的浮点数,小数点后尾数为0到5位
//   'Character': Random.character(), // 生成随机字符串,可加参数定义规则
//   'String': Random.string(2, 10), // 生成2到10个字符之间的字符串
//   'Range': Random.range(0, 10, 2), // 生成一个随机数组
//   'Date': Random.date(), // 生成一个随机日期,可加参数定义日期格式
//   'Image': Random.image(Random.size, '#02adea', 'Hello'), // Random.size表示将从size数据中任选一个数据
//   'Color': Random.color(), // 生成一个颜色随机值
//   'Paragraph': Random.paragraph(2, 5), //生成2至5个句子的文本
//   'Name': Random.name(), // 生成姓名
//   'Url': Random.url(), // 生成web地址
//   'Address': Random.province() // 生成地址
// }

function login() {
  let res = JSON.parse(JSON.stringify(result))
  res.msg = "登陆成功"
  return res
}

function logout() {
  let res = JSON.parse(JSON.stringify(result))
  res.msg = "注销成功"
  return res
}

function helpContentList() {
  let res = JSON.parse(JSON.stringify(result))
  res.data.list = []
  for (let i = 0; i < Random.integer(30, 60); i++) {
    res.data.list.push(`${i + 1}、 ${Random.cparagraph(2, 5)}`)
  }
  return res
}

function projectItemList() {
  let res = JSON.parse(JSON.stringify(result))
  res.data.list = []
  for (let i = 0; i < Random.integer(9, 20); i++) {
    res.data.list.push({
      id: i,
      title: Random.cword(2, 5),
      date: Random.date(),
      description: Random.cparagraph(3, 6)
    })
  }
  return res
}

function projectItem() {
  let res = JSON.parse(JSON.stringify(result))

  res.data.title = Random.cword(2, 5)
  res.data.date = Random.date()
  res.data.description = Random.cparagraph(3, 6)

  return res
}

operate("login", "post", login())
operate("logout", "post", logout())

operate("helpContentList", "get", helpContentList())
operate("projectItemList", "get", projectItemList())
operate("projectItem", "get", projectItem())
