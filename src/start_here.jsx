import React        from 'react'
import Router       from 'react-router'

export default class StartHere{

  render(){
    return <div>
      <Router.Link to="entry" params={{entryId: 1}}>Entry 1</Router.Link>
    </div>
  }
}
