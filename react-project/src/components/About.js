import React, { Component } from 'react'

export default class About extends Component {
    render() {
        console.log(this.props);
        // 解构赋值 变量名必须与属性名同
        let { search } = this.props.location;
        let params = new URLSearchParams(search);
        console.log(params.get('id'));
        console.log(params.get('age'));
        return (
            <div>
                <h3>关于我们的事</h3>
            </div>
        )
    }
}
