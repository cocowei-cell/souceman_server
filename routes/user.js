/*
 * @Descripttion:
 * @Author: zzz
 * @Date: 2020-09-08 09:14:59
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-09-15 12:13:22
 */
const user = require("express").Router();

// 登录
user.post("/login", require("./user/login"));
//注册
user.post('/regester',require("./user/regester"));
//得到qq邮箱验证码
user.post('/getqqcode',require("./user/getqqCode"));
//忘记密码
user.post('/losspass',require("./user/losspass"));
//修改密码
user.post('/modifypass',require("./user/modifyPass"));

module.exports = user;
