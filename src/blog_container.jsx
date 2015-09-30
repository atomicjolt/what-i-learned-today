import React        from 'react'
import Router       from 'react-router'

export default class BlogContainer{

  render(){
    return <div>
      <h1>Blog Header</h1>
      <Router.RouteHandler {...this.props.params} />
    </div>
  }
}
