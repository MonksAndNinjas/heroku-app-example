import React from 'react';
// connects to store and allows use of functions in /actions
// I place fetch calls here because it avoids duplication of store arrays
import { connect } from 'react-redux';
import { fetchPhotos } from './actions/fetch';  // monksandninjas.github.io

class App extends React.Component {
  render() {
    return (
      <>
      </>
    );
  }
  // fetch data from API's
  componentDidMount() {
    this.props.fetchPhotos()
  }
}

const mapStateToProps = state => {
  return({
    photosData: state.photos,
  })
}

export default connect(mapStateToProps, {fetchPhotos})(App);


//code to be erased
//fetchBlogPosts, fetchGitHubPosts, fetchProjects, fetchProfile 
////import { fetchBlogPosts } from './actions/fetch'; // Rails api, could change BlogPosts; no needed
//import { fetchGitHubPosts } from './actions/fetch'; // monksandninjas.github.io
//import { fetchProjects } from './actions/fetch'; // files in github
//import { fetchProfile } from './actions/fetch'; // Rails api
  //  this.props.fetchBlogPosts()
  // this.props.fetchGitHubPosts()
  //  this.props.fetchProjects()
  //  this.props.fetchProfile()
//  //  postsData: state.posts,
  //  gitPostsData: state.gitPosts,
  //  projectsData: state.projects,
  //  profileData: state.profile
