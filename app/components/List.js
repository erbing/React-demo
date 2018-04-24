/**
 * 组件: 列表渲染
 * 功能: 测试 React 列表渲染问题
 * 结果: 测试成功
 */

 import React from "react";

 export default class List extends React.Component {
     constructor(props) {
         super(props)
         this.state = {
             curArr: [1,2,3,4,5,6,7,8,9,0]
         }
     }

     render() {
         const items = this.state.curArr.map((item) => 
             <li key={item}>{item * 1.5}</li>
         )
         
         console.log(items)
         return (
             <div className="list">
                <ul>
                    {items}
                </ul>
             </div>
         )
     }
 }