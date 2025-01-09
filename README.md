# Tracker-Api
前端流量统计和埋点分析系统api服务。

技术栈:
* nestjs
* clickhouse
* 接口文档：swagger

## 本地开发
```shell
# 使用pnpm安装所有依赖包
pnpm install
# 本地开发，支持热更新
yarn start
yarn start:debug 
```


## 环境变量
本地开发环境变量存在.env.local中，
所有环境变量取值统一通过 /utils/get-env中获取

| 变量 | 备注 | 测试环境
|--|--|--| 
| CLICKHOUSE_HOST | clickhose地址 | |
| CLICKHOUSE_PORT | clickhose端口 ||
| CLICKHOUSE_DB | clickhose数据库名称 | |
| CLICKHOUSE_USERNAME | clickhose用户  ||
| CLICKHOUSE_PASSWORD | clickhose密码  ||

## 身份校验
### authorization
在headers添加`authorization`安全校验，应用列表如下：

## HTTP状态码说明
### 200
请求成功返回示例：
```json
{
  "code": 200,
  "message": "请求成功",
  "timestamp": "2024-10-24 16:06:46"
}
```

### 401
未授权返回示例：
```json
{
  "message": "未授权",
  "error": "Unauthorized",
  "statusCode": 401
}
```