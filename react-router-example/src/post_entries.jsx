import React        from 'react'
import Router       from 'react-router'

export default class PostEntries{

  render(){
    return <div>
        <h2>Post Entry {this.props.params.entryId}</h2> 
    </div>
  }
}
