import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Course extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            list: []
        }
    
        // this.handleEvent = this.handleEvent.bind(this)
    }
    componentDidMount(){
        fetch('/data/courseList.json')
        .then(response=>{
            return response.json()
        })
        .then(res=>{
            if(res.errno*1 === 0){
                this.setState({
                    list: res.data
                })
            }
        }).catch(err=>console.log(err))
    }
    
    render() {
        return (
            <div>
                <h3>课程列表</h3>
                <div>
                    {
                        this.state.list.map(obj=>(
                            <p key={obj.id}>
                            <Link to={`/course/${obj.id}`}>{obj.title}</Link>
                            </p>
                        ))
                    }
                </div>
            </div>
        )
    }
}
