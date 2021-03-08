// should photos be displayed?
export const displayPhotos = (photosData) => {
    let photos = photosData.photos

    return (photos.drawings.length > 0 && photos.digital.length > 0 && photos.signature.length > 0 && photos.paintings.length > 0)
  }

  export const display = (propsData) => {
    let photosData = propsData.photosData;

    return (displayPhotos(photosData)) ? true : false
  }
