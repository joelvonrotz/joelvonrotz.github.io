
var index = 0;
var max_index = 0;
var images = document.querySelectorAll("#site-container img");
var source_list = [];

var main_image = document.getElementById("gallery-image");
var gallery = document.getElementById("gallery");
var gallery_close = document.getElementById("gallery-close");
var gallery_next = document.getElementById("gallery-inc");
var gallery_previous = document.getElementById("gallery-dec");

for(var i = 0; i < images.length; i++) {
  images[i].dataset.index = i;
  images[i].onclick = photo_start_at_image;
  images[i].classList.toggle('indexed');
  source_list.push(images[i].src);
  max_index = source_list.length;
}

function photo_start_at_image(event) {
  index = parseInt(event.target.dataset.index);
  main_image.src = source_list[index];

  gallery.classList.add('active');
  addEventListener("keydown", func_keydown);
  
  gallery_close.onclick = photo_close;
  gallery_next.onclick = photo_load_next;
  gallery_previous.onclick = photo_load_previous;
}

function photo_close(event) {
  gallery.classList.remove('active');
  removeEventListener("keydown", func_keydown);
}

function photo_load_next(event) {
  index = (index + max_index + 1) % max_index;
  main_image.src = source_list[index];
}

function photo_load_previous(event) {
  index = (index + max_index - 1) % max_index;
  main_image.src = source_list[index];
}

function func_scroll(event) {

}

function func_keydown(event) {
  if (event.key === "Escape") {
    photo_close(event);
  } else if (event.key === "ArrowRight") {
    photo_load_next(event);
  } else if (event.key === "ArrowLeft") {
    photo_load_previous(event);
  }
}
