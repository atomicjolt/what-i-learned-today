import React        from 'react'
import Router       from 'react-router'

export default class Comments{

  render(){
    return <div>
        <h2>Comments {this.props.params.commentId}</h2> 
    </div>
  }
}
