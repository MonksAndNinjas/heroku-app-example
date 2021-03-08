// fetches photos of artwork from GITHUB
export function fetchPhotos() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PHOTOS_DATA' });
    // fetches all photos within directory
    return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img', {
      accept: 'application/json',
    }).then(response => response.json())
      .then((data) => {
        //console.log(data)
        let photoPromises = data.map((photos) => {
          dispatch({ type: 'LOADING_PHOTOS' })
          // makes individual calls to retrieve data for photo
          return fetch('https://api.github.com/repos/MonksAndNinjas/MonksAndNinjas.github.io/contents/img/' + photos.name, {
            accept: 'application/json',
          }).then(response => response.json())
            .then(photo => dispatch({ type: 'FETCH_PHOTOS', name: photos.name, payload: photo }))
        })
        // makes sure all promises have been complete before continuing
        return Promise.all(photoPromises)
      }).then(photos => dispatch({ type: 'FETCH_PHOTOS_DATA', payload: photos }))
  }
}
