import React, { Component } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
 
class DjangoContent extends Component { // 通过SearchParams传递参数
  state = {
    searchParams: this.props.params[0], // 获取某个参数
    setSearchParams: this.props.params[1], // 设置链接中的参数，然后重新渲染当前页面
  };
  render() {
    return (
      <React.Fragment>
            <h1>Django - {this.state.searchParams.get('chapter')}</h1>
            <hr />
            <Link to='/django'>返回</Link>
      </React.Fragment>
    );
  }
}
 
export default (props) =>(
    <DjangoContent
        {...props}
        params={useSearchParams()} />
);