const GAP = 10
photosets = document.querySelectorAll("section.photoset")

function adjustPhotoSizes(params) {
  photosets.forEach(photoset => {
    rows = photoset.querySelectorAll("div.photoset-row")
    
    rows.forEach(row => {
      photos = Array.from(row.querySelectorAll("img"))
      items = Array.from(row.querySelectorAll("div.photoset-item"))

      // STEP ONE: resize to h1
      let height_1 = photos[0].naturalHeight
      
      let result = photos.map(photo => {
        return (photo.naturalWidth/photo.naturalHeight) * height_1
      })

      // STEP ONE.ONE: calculate max width
      gap = GAP * (photos.length - 1)
      main_width = photoset.clientWidth - gap

      // STEP TWO: calculate ratio between width of photo group & max-width
      main_ratio = main_width / result.reduce((a, b) => a + b, 0)

      // STEP THREE: calculate photo widths & height
      let result_widths = result.map(value => value * main_ratio)
      let result_height = height_1 * main_ratio
    
      // STEP FOUR: apply widths & height to photoset items
      for (let index = 0; index < items.length; index++) {
        const item = items[index];
        item.style.width = result_widths[index] + "px"
        item.style.height = result_height + "px"
      }
    });
  });
}


window.addEventListener("load", adjustPhotoSizes)
window.addEventListener("resize", adjustPhotoSizes)
