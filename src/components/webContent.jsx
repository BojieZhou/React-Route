import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

class WebContent extends Component {    // 通过useParams传递参数
    state = {  } 
    render() { 
        return (
          <React.Fragment>
            <h1>Web - {this.props.params.chapter}</h1>
            <p>content</p>
          </React.Fragment>
        );
    }
}
 
export default (props) => ( // 通过此方法读取参数信息
    <WebContent
        {...props}
        params={useParams()}
    />
);