---
layout: page
permalink: "/travel"
title: "Traveling"
thumbnail: "/images/thumbnails/pages/chris-lawton-o0l-M8W_7wA-unsplash.jpg"
---

Welcome to my travel page, where you can see where I went.
For now this is quite in development, but I'm going to use this space to make a couple of notes.

## Goal of this Page

The idea of this page is easily display travel reports, which means that I should be able to use collections & simple post tags.

### Inspiration

- [Paul Stamatiou - Photos](https://paulstamatiou.com/photos/)

### Collection Structure

The **collection**/**group** would contain a short description on what I was doing during that trip, for example:

> During Summer 2021 I've biked through the vast landscapes of Japan. Alone & some basic notes for communication...

In said collection you would also define the collection name, for example `bike-japan-2021`. This variable could then be used to acquire the right posts & to easily link the travel report (URL could look something like this: "/travel/bike-japan-2021").

### Collection Frontmatter

```yaml
---
layout: travel
title: "Travelling Japan"
...
group: "bike-japan-2021"
---
```

Should I create a new template or use an existing one?

### Photo / Story Frontmatter

```yaml
---
layout: post
title: "Travelling Japan - Day 0"
...
group: "bike-japan-2021"
---
```

<section class="photoset">
  <div class="photoset-row">
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821498171_0912afaa82_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48731428377_433d03ef9b_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821812942_9f1f74db83_b.jpg">
    </div>
  </div>
  <div class="photoset-row">
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48730919858_46a88e497f_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49820960158_3989d497e8_b.jpg">
    </div>
  </div>
  <div class="photoset-row">
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821498171_0912afaa82_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48731428377_433d03ef9b_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821812942_9f1f74db83_b.jpg">
    </div>
  </div>
  <div class="photoset-row">
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821498171_0912afaa82_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48731428377_433d03ef9b_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49821812942_9f1f74db83_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48730919858_46a88e497f_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49820960158_3989d497e8_b.jpg">
    </div>
  </div>
</section>

Proident excepteur dolor ipsum sit ea. Ut officia ea do veniam fugiat velit cillum. Consequat dolor consequat duis aliqua. Enim enim duis culpa anim cupidatat. Lorem veniam nostrud sit duis excepteur aliqua Lorem velit est exercitation.

<section class="photoset">
  <div class="photoset-row">
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/48730919858_46a88e497f_b.jpg">
    </div>
    <div class="photoset-item">
      <img src="https://live.staticflickr.com/65535/49820960158_3989d497e8_b.jpg">
    </div>
  </div>
</section>

Dolore consectetur est aliqua labore do mollit aliquip reprehenderit. Velit excepteur consequat excepteur elit dolor ea elit deserunt dolor laborum consectetur sint. Ex officia officia fugiat proident culpa esse proident aliquip ipsum ea minim. Pariatur excepteur veniam cillum cillum nulla. Occaecat elit enim velit fugiat dolore ut sint eu sunt dolor. Et ullamco ea duis et cillum officia adipisicing occaecat sint minim adipisicing voluptate.

<script src="/scripts/photoset.js"></script> 
