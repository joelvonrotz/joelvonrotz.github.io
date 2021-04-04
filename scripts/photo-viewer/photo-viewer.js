class Viewer {
  prev_index = 0;
  next_index = 0;
  curr_index = 0;
  list_size = 0;
  list = [];

  obj_viewer = null;
  obj_image = null;
  obj_title = null;
  obj_desc  = null;
  obj_close = null;

  constructor(photo_list) {
    this.curr_index = 0;

    this.obj_viewer = document.querySelector("div.photo-viewer");

    this.obj_viewer.querySelector("span.vw-next").addEventListener("click", (e) => { this.next() });
    this.obj_viewer.querySelector("span.vw-prev").addEventListener("click", (e) => { this.previous() });
    this.obj_viewer.querySelector("span.vw-close").addEventListener("click", (e) => { this.close() });
    this.obj_viewer.querySelector("span.vw-stat").addEventListener("click", (e) => {
      this.obj_info.classList.toggle("inactive")
    });

    
    this.obj_image = this.obj_viewer.querySelector("img.vw-image");
    this.obj_info = this.obj_viewer.querySelector("div.vw-info");
    this.obj_title = this.obj_viewer.querySelector("h2.vw-title");
    this.obj_desc = this.obj_viewer.querySelector("p.vw-desc");


    this.list_size = photo_list.length;
    this.list = photo_list;
    //by default, the viewer will always use
    

    if(this.list_size > 1) {
      this.next_index = 1;
      this.prev_index = this.list_size - 1;
    }
    else {
      this.next_index = 0;
      this.prev_index = 0;
    }
  }
  
  getIndexByID(photo_id) {
    for (let index = 0; index < this.list.length; index++) {
      const element = this.list[index];
      
      if(photo_id == element.dataset.id) {
        return index;
      }
    }
  }
  
  getNeighborIndex(photo_index) {
    let next_index = 0;
    let prev_index = 0;

    //selection is done by index, instead by id.
    if(photo_index == (this.list_size - 1)) {
      next_index = 0;
      prev_index = photo_index - 1;
    }
    else if(photo_index == 0) {
      next_index = photo_index + 1;
      prev_index = this.list_size - 1;
    }
    else {
      next_index = photo_index + 1;
      prev_index = photo_index - 1;
    }
    return [prev_index,next_index]
  }

  renderImage(photo) {
    this.obj_image.src = photo.dataset.url;
    this.obj_title.innerHTML = photo.dataset.title;
    this.obj_desc.innerHTML = photo.dataset.desc;
  }

  next() {
    if (this.curr_index == (this.list_size - 1)) {
      this.curr_index = 0;
    }
    else {
      this.curr_index += 1;
    }

    let neighbor = this.getNeighborIndex(this.curr_index);
    this.prev_index = neighbor[0]
    this.next_index = neighbor[1]

    this.renderImage(this.list[this.curr_index]);
  }

  previous() {
    if (this.curr_index == 0) {
      this.curr_index = this.list_size - 1;
    }
    else {
      this.curr_index -= 1;
    }

    let neighbor = this.getNeighborIndex(this.curr_index);
    this.prev_index = neighbor[0]
    this.next_index = neighbor[1]

    this.renderImage(this.list[this.curr_index]);
  }

  open(photo_id) {
    this.attachKeyHandler();
    this.obj_viewer.classList.toggle("inactive");

    this.curr_index = this.getIndexByID(photo_id)
    let neighbor = this.getNeighborIndex(this.curr_index);
    this.prev_index = neighbor[0]
    this.next_index = neighbor[1]

    this.renderImage(this.list[this.curr_index]);
  }

  close(event) {
    this.detachKeyHandler();
    this.obj_viewer.classList.toggle("inactive");
  }

  attachKeyHandler() {
    // save the function that will be bound to the event, so you can remove it later
    this.keyHandlerFunction = this.keyHandler.bind(this)
    document.addEventListener("keydown", this.keyHandlerFunction);
  }

  detachKeyHandler() {
    document.removeEventListener("keydown", this.keyHandlerFunction);
  }

  keyHandler(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    
    switch (event.key) {
      case "h":
      case "H":
        if(!event.repeat) {
          this.obj_info.classList.toggle("inactive")
        }
        event.preventDefault();
        break;
      
      case "Escape":
        if(!event.repeat) {
          this.close()
        }
        event.preventDefault();
        break;
    
      case "Left":
      case "ArrowLeft":
        if(!event.repeat) {
          this.previous()
        }
        event.preventDefault();
        break;
    
      case "Right":
      case "ArrowRight":
        if(!event.repeat) {
          this.next()
        }
        event.preventDefault()
        break;

      default:
        break;
    }
  }
}