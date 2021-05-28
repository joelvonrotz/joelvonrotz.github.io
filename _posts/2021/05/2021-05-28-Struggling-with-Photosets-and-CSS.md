---
layout: "post"
title: "Struggling with Photosets & CSS"
thumbnail: "/images/posts/struggling_photos_math/thumbnail.jpg"
category: "design"
tags:
- "math"
- "overthinking"
- "struggle"
- "photoset"
---

I'm currently working on a *photostory* template in Jekyll, that allows me to include sets of pictures. As I intend to insert the pictures as photo sets (groups of photos), these photos need to be correctly resized (just like in the thumbnail). This requires me to use my *grandiose* JavaScript & math skills.

<!--more-->

Before going into detail, I need to elaborate on what exactly a photo set is. In my own words, a <span class="green">photo set</span> is a collection of <span class="blue">photos</span>, that are in <span class="red">groups</span> of a random amount of photos. These groups are split into <span class="red">rows</span>. So, a photo set can contain multiple groups, where each row is one group.

{% include figure.html caption="Structure of a Photoset" image="/images/posts/struggling_photos_math/photoset_structure.jpg"%}


## Analyzing an Example

The best way to implement something is to first find a sketch or an already existing example and analyze it. One such example (and also big inspiration) is from the posts of [Bikepacking.com](https://bikepacking.com/), where a lot of the blog posts use a photo set design. Below is an example of the design taken from *Bikepacking.com*.

{% include figure.html caption="Source: https://bikepacking.com/gear/hammock-bikepacking-introduction/" image="/images/posts/struggling_photos_math/bikepacking_photoset.png"%}

In this screenshot you can see two things: two photo set rows (one with only one photo and the other with two photos) & the second row having its photo's sizes adjusted in such a way, that they have one **common height**.

With these facts in my head I started working on it!

## The First Time Never Works

### What I Thought Would Work

I first thought this would be a job with those *recursive* functions, that could potentially calculate everything for me. Fortunately, I didn't know a single thing about those types of function (else this would have escalated completely). I threw that idea out of the window and started with something, without actually expecting anything.

{% include figure.html caption="A photoset series with labels" image="/images/posts/struggling_photos_math/Equation_labelling.jpg"%}

So I started to list up some equations:

$$ r_n = \frac{w_n}{h_n} \rightarrow r_1 = \frac{w_1}{h_1}, r_2 = \frac{w_2}{h_2}$$

$$ w - w_{G} = x_1 + x_2 + x_n$$

Already I thought, how am I gonna turn this into something scalable/dynamic?

### What Didn't Work

I actually don't really know, why exactly it didn't work. When trying to see a pattern in my first idea I always had a thought in the back of my mind, that yelled, this shouldn't be so hard.

I wasn't getting anywhere. Equations cluttered up, turning into more complex equations or simply useless equations that cancel each other out. At one point I put my pen aside, just looked at the equation and said to myself, that this is a waste of my time.


## One Height, Different Widths

After giving up on that mess of equations, I looked at a sketch (similar to the one above with the variable names) and tried to not overthink & focus more on what I wanted to actually achieve. All photos in a row need the same height! What if I first resized the photos to one common height and then adjusted the row to the containers width?

This sounded a lot more realistic (& scalable). By assuming a height (for example $100px$) I can calculate the overall width, that each photo takes up. By adding those widths together and calculating the ratio between said width and the container width, I was able to solve my problem.

{% include figure.html caption="Steps to correctly fit a row into the container width" image="/images/posts/struggling_photos_math/total_steps_calculation.jpg"%}

1. Get the photo row on one line (in a row preferable)
2. Resize each photo to an assumed height (or the height of one of those images).
3. Resize the group by calculating the ratio/factor between the container width & the group width and applying it to the container width.

$$ v = \frac{w_{group}}{w_{container}}$$

$$ x_{n} = v \cdot w_{n}$$

$$ y_{n} = v \cdot h_{n}$$

This works, because resizing the width of a rectangle with fixed ratio, adjusts the height linearly. So we simply adjust each photo to one specific height and then resize the whole group as one to the container width.

{% include figure.html caption="Linearity of a square" image="/images/posts/struggling_photos_math/resize_square_linear.jpg"%}

## Result

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