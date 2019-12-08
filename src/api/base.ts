import Axios from "axios"
import { message } from "antd"

class Http {
  http: any

  constructor(rootUrl: string) {
    this.http = Axios.create({
      baseURL: rootUrl,
      withCredentials: true
    })
  }

  check() {
    this.http.interceptors.request.use(
      (config: any) => {
        return config
      },
      (error: any) => {
        // Do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
      }
    )

    this.http.interceptors.response.use(
      (response: any) => {
        return response
      },
      (err: any) => {
        // 请求失败时，即status!=200
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = "错误请求"
              break
            case 401:
              err.message = "未授权，请重新登录"
              break
            case 403:
              err.message = "禁止访问"
              break
            case 404:
              err.message = "请求错误,未找到该资源"
              break
            case 405:
              err.message = "请求方法未允许"
              break
            case 408:
              err.message = "请求超时"
              break
            case 413:
              err.message = "上传文件过大"
              break
            case 415:
              err.message = "请求格式未允许"
              break
            case 500:
              err.message = "服务器端出错"
              break
            case 501:
              err.message = "网络未实现"
              break
            case 502:
              err.message = "网络错误"
              break
            case 503:
              err.message = "服务不可用"
              break
            case 504:
              err.message = "网络超时"
              break
            case 505:
              err.message = "http版本不支持该请求"
              break
            default:
              err.message = `连接错误,${err.response.msg}`
          }
        } else {
          err.message = "当前网络状态不佳"
        }
        message.error(err.message)
        return Promise.reject(err)
      }
    )
  }

  fillter(res: any, full: boolean) {
    if (res.data.code === 1) {
      if (!full) {
        return res.data.data
      } else {
        return res.data
      }
    } else {
      message.error("未知错误")
    }
  }

  async get(url: string, params?: any, full = false) {
    this.check()
    const res = await this.http.get(url, { params })
    return Promise.resolve(this.fillter(res, full))
  }

  async post(url: string, data?: any, full = false) {
    this.check()
    const res = await this.http.post(url, { data })
    return Promise.resolve(this.fillter(res, full))
  }

  async delete(url: string, data?: any, full = false) {
    this.check()
    const res = await this.http.delete(url, { data })
    return Promise.resolve(this.fillter(res, full))
  }

  async put(url: string, data?: any, full = false) {
    this.check()
    const res = await this.http.put(url, { data })
    return Promise.resolve(this.fillter(res, full))
  }
}

const http = new Http("/mock/")
// const http = new Http('/api')

export default http
