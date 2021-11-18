/*
 * @Author: your name
 * @Date: 2021-11-18 14:24:39
 * @LastEditTime: 2021-11-18 19:26:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \阶段五 Vue.js项目实战开发\HR-saas中台管理项目资料\hrsaas\src\store\getters.js
 */
const getters = {
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
}
export default getters