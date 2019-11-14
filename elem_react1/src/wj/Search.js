import React, { Component } from 'react'
// import { i } from 'element-react';

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="search">
                {/* 头部 */}
                <header>
                <i className="el-icon-arrow-left"></i>
                    搜索
                </header>
            </div>
        )
    }
}

export default Search
