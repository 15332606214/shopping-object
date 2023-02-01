/* 
临时用户获取唯一标识
*/
import { v4 as uuidv4 } from "uuid";

let TOKEN_KEY = 'TOKEN_KEY'
function getUserTempId() {
    let userTempId = localStorage.getItem('USERTEMPID_KEY')

    if (!userTempId) {
        userTempId = uuidv4();
        localStorage.setItem('USERTEMPID_KEY', userTempId)
    }
    return userTempId
}

// 设置
function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}
// 修改
function getToken() {
    return localStorage.getItem(TOKEN_KEY)
}
// 删除
function removeToken() {
    localStorage.removeItem(TOKEN_KEY)
}

export {
    getUserTempId,
    setToken,
    getToken,
    removeToken
}