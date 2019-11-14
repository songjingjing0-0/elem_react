import React, { Component } from 'react'
import "./main.css"
// import { Button } from 'element-react';

import 'element-theme-default';
export class main extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
             hot:[],
             all:Object,
             head_title:[]
        }
        this.getRequest = this.getRequest.bind(this);
        this.getRequest_hot = this.getRequest_hot.bind(this);
    }
    
    componentWillMount(){
        this.getRequest();
        this.getRequest_hot();
    }
    static propTypes = {

    }
    //获取所有的城市方法
    getRequest(){
        // fetch 下的get请求 fetch（）方法 参数1：请求地址 参数2：请求方式
        //   https://elm.cangdu.org/v1/cities?type=guess 例如get的接口
          fetch(
            "https://elm.cangdu.org/v1/cities?type=group",
              {method:"get"}
              ).then((res)=>{
                  // fetch发起请求之后，需要对得到的相应对象调用json方法才能得到返回的数据
              // console.log(res);
              return res.json();
          }).then((data)=>{//参数data接收第一个then方法返回的数据
              console.log(data);
              this.setState({
                all:data
            })
            this.state.head_title= Object.keys(this.state.all).sort();
            console.log(this.state.all);
          }).catch((err)=>{
              console.log(err);
          })
      }
      //获取热门城市方法
    getRequest_hot(){
        // fetch 下的get请求 fetch（）方法 参数1：请求地址 参数2：请求方式
        //   https://elm.cangdu.org/v1/cities?type=guess 例如get的接口
          fetch(
            "https://elm.cangdu.org/v1/cities?type=hot",
              {method:"get"}
              ).then((res)=>{
                  // fetch发起请求之后，需要对得到的相应对象调用json方法才能得到返回的数据
              // console.log(res);
              return res.json();
          }).then((data)=>{//参数data接收第一个then方法返回的数据
            //   console.log(data);
              this.setState({
                hot:data
            })
            // console.log(this.state.hot);
          }).catch((err)=>{
              console.log(err);
          })
      }
    render() {
        return (
            <div>
                 {/* <h1>这是首页的内容</h1> */}
                 <div id='head'>
                <span className="head_span">ele.me</span>
                 <span className="head_span1">登录|注册</span>
                 </div>
                 <div className='tools'>
                 </div>
                 <div className='right_Now'> <span className='right_Now_span1'>当前定位城市</span><span className='right_Now_span2'>定位不准时，请在城市列表中选择</span></div>
                 <div className='right_Now'> <span className='right_Now_span1_2'>郑州</span><span className='right_Now_span2'> <i className="el-icon-arrow-right"></i></span></div>
                 <div id='lists_citys'>
                     <p className="hot">热门城市</p>
                     <ul className='lists_citys_ul'>
                         {/* <li className='lists_citys_li'>123</li>
                         <li>123</li>
                         <li>123</li>
                         <li>123</li>
                         <li>123</li>
                         <li>123</li>
                         <li>123</li>
                         <li>123</li> */}
                         {
                             this.state.hot.map((v,i)=>{
                                 return <li className='lists_citys_li' key={i}>{v.name}</li> 
                             })
                         }
                     </ul>
                 </div>
                 <div className='all_citys'>
                     {
                         this.state.head_title.map((v,i)=>{
                       return <div key={i} id='haha'>
                           <p className='all_citys_p1' key={i}>{v}</p>
                       <ul className='lists_citys_ul'>
                           {
                               this.state.all[v].map((vv,ii)=>{
                                return <li id='lists_citys_li111' key={ii}>{vv.name}</li>
                               })
                           }
                        
                       </ul>
                       </div>
                       
                        })
                        
                    }    
                     
                 </div>
            </div>
        )
    }
}

export default main
