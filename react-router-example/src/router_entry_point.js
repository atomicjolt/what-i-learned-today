"use strict"

import React   from 'react'
import Router  from 'react-router'

import StartHere      from './start_here'
import PostEntries    from './post_entries'
import Comments    from './comments'
import BlogContainer  from './blog_container'


var routes = (
  <Router.Route handler={Router.RouteHandler} path="/">
    <Router.Route name="blogs" handler={BlogContainer}>
      <Router.Route name="entry" path=":entryId" handler={PostEntries} />
      <Router.Route name="comments" path="comments/:commentId" handler={Comments} />
    </Router.Route>
    <Router.DefaultRoute handler={StartHere} />
  </Router.Route>
)

Router.run(routes, (Handler, state) => {
    React.render(<Handler />, document.body)
})
