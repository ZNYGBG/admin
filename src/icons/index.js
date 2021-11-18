/*
 * @Author: your name
 * @Date: 2021-11-18 14:24:39
 * @LastEditTime: 2021-11-18 19:42:14
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \阶段五 Vue.js项目实战开发\HR-saas中台管理项目资料\hrsaas\src\icons\index.js
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
    //以上两行代码含义是将svg目录下所有的.svg后缀的文件全都引入到项目中