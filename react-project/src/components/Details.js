import React, { Component } from 'react'

export default class Details extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: {}
        }
    
        // this.handleEvent = this.handleEvent.bind(this)
    }
    // 渲染
    render() {
        let { data } = this.state
        console.log("render");
        return (
            <div>
                <h2>课程详情</h2>
                <p>课程ID： {data.id} </p>
                <p>课程名称： {data.title} </p>
                <p>授课教师： {data.teacher} </p>
                <p>课程简介： {data.intro} </p>
            </div>
        )
    }
    // 在首次渲染后立即执行
    componentDidMount(){
        console.log("componentDidMount");
        // 注意斜杠的方向
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response=>{
                return response.json()
            })
            .then(res=>{
                if(res.errno === 0){
                    this.setState({
                        data: res.data
                    })
                }else{
                    alert(res.errmsg);
                }

            }).catch(err=>{console.log(err)})
    }
    // 在每次更新前执行（props、state改变）
    shouldComponentUpdate(nextProps,nextState){
        // 由URL路由传参传来的id
        return (nextProps.match.params.id != this.props.match.params.id || nextState.data.id != this.state.data.id)
    }
    
    // 更新后立即执行
    componentDidUpdate(preProps,preState){
        fetch(`/data/course${this.props.match.params.id}.json`)
            .then(response=>{
                return response.json()
            })
            .then(res=>{
                if(res.errno === 0){
                    this.setState({
                        data: res.data
                    })
                }else{
                    alert(res.errmsg);
                }

            }).catch(err=>{console.log(err)})
    }
}
