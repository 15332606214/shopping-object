/* 
表单验证插件
*/
import Vue from "vue";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate)

// 提示文本本地化中文还有更改某些=验证规则的提示信息
import zh_CN from "vee-validate/dist/locale/zh_CN"; //引入中文message

VeeValidate.Validator.localize('zh_CN', {
    messages: {
        ...zh_CN.messages,
        is: (field) => `${field}必须与密码相同`  //修改内置规则的messa
    },
    attributes: {    //给校验的field属性名映射中文名称
        phone: '手机号',
        code: '验证码',
        password: '密码',
        password2: '确认密码',
        isCheck: '阅读协议'
    }
})

VeeValidate.Validator.extend('agree', {
    validate: value => {
        return value
    },
    getMessage: field => filed + '必须同意'
})