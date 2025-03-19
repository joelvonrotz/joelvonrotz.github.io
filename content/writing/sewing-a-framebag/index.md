---
title: Sewing a Frame Bag
description: The MYOG trend is one of my favourite trends, since it puts self-made things into the spotlight. In this post I'll show you my slightly modified version of the framebag from Bikepacking.com.
date: 2025-03-18
draft: true

taxonomies:
  categories:
    - travel
  tags:
    - sewing
    - myog
    - bicycle
    - framebag
    - wicked-cool

extra:
  thumbnail: 'thumbnail.jpg'
  titleinside: false
  thumbnailstyle: "background-size: contain; background-repeat: no-repeat;"
---

Before getting into too much detail, this guide is heavily based on the original frame bag guide  [DIY: How to Make A Simple Frame Bag](https://bikepacking.com/gear/how-to-make-a-bikepacking-framebag-krampus/). Instead of using Velcro on all of the sides, I instead replaced the top side with laces, like shoe laces!

# List of Materials

{% callout(type="tools" title="Equipment & Tools") %}

- <u>Sewing machine</u> (capable of at least straight stitching ; cool if it also can do _Triple straight stitching_)
- <u>Pair of fabric scissors</u> _or_ a <u>fabric rotary cutter</u>
- <u>Jeans sewing needles</u> (**Recommended**)
- <u>Sewing pins</u> _and/or_ <u>sewing clips</u>
- <u>Cutting board</u>
- <u>Quilt ruler</u> (**Recommended**)
- <u>Measurement tape</u>

---

- <u>A cardboard cutout of the bike frame</u> $\rightarrow$ don't forget to include markings of the screws inside and outside of the frame. If you've got a _Trek 920_, this is your lucky day: <p>{{ button (text="Download Design Pattern" link="fullframebag_trek920.pdf" type="pdf") }}</p>
All sides have seam allowances of ca. $1\text{cm}$ added!

{% end %}


{% callout(type="wood" title="Material") %}
- <u>Outside fabric</u> $\rightarrow$ Protective layer of the bag, usually something sturdy. I used a nylon fabric with a plasticised layer to have some weather protection.
- <u>Stiffner material</u> $\rightarrow$ used for the side walls to give them shape.
- <u>Inside fabric</u> $\rightarrow$ to hide the stiffener material and make the inside nice to look at.
- <u>Velcro</u>  $\rightarrow$ any type is usable, as long as it's sew-able.
- <u>Nylon based string</u> $\rightarrow$ to lace up the frame bag to the top bar of my bicycle.
- <u>Polyester sewing thread</u>
{% end %}


# Sewing Steps



[](#cut-fabric)

## Creating the Design Pattern

Although I've got no photos of this step, I hope at least the written guide here is enough! It's easy!

1. Get a large enough cardboard for the inner frame
    - If you don't know where to get large cardboard, look for a company which packages their product in cardboard such as a cereal factory. They usually have misprints, which they might give away for free for hobbyists!
2. Tape it onto the frame
3. Grab a pen or felt pen and draw the outline of the inner frame
    - don't forget to also mark where the bolts for the bottle holder are located
4. Cut it out and there you go!

{% callout(type="wood" title="Extra Fancy") %}

To go a little further and have a reusable and nicer looking design pattern, redraw the pattern in a CAD tool. Why a CAD software? Because most have constraints tool, which makes creating the pattern easier. I've created mine first in *Fusion360* and then exported the sketch into *Inkscape* to clean it up.

1. Simplify the shape and measure the lengths $\rightarrow$ no rounded angles, as these will be added later on
    - For example I was able to reduce my frame to four lines (it wasn't a perfect triangle)
2. Draw the shape in the CAD's _Sketch_ mode
3. (**Recommended**) add some rounded corners to make sewing a little bit easier 
    - reduces the amount of stops required
4. Add seam allowance using the *Offset* tool (in *Fusion360* it's under *Modify* $\rightarrow$ *Offset*)
    - I added an allowance of $\approx 1\text{cm}$
5. Export the sketch as a `.dxf` and import it into *Inkscape*
6. Clean up the sketch and add some labels and information
7. Go to your nearest architecture plan printing place and let them print it for you!
8. (**Recommended**) Glue the pattern onto cardboard to make it more robust 


{% end %}

## Cut Fabric

![](step_sidepanel_cuts.jpg)
![](step_sidepanel_zipper_cut.jpg)
![](step_small_fabric_cut.jpg)

## Combine Outer and Inner Layer and Stiffener

![](step_sidepanel_almost_closed.jpg)

## Prepare Lace Loops

![](step_laceloops_fold1.jpg)
![](step_laceloops_fold2.jpg)
![](step_laceloops_sewn.jpg)


## Sew Zipper to Sidepanel

![](step_zipper1.jpg)
![](step_zipper2.jpg)
![](step_zipper3.jpg)
![](step_zipper4.jpg)
![](step_zipper5_finished.jpg)

![](step_zipper_to_uppersidepanel.jpg)
![](step_zipper_to_uppersidepanel_zippermove.jpg)
![](step_zipper_to_lowersidepanel_dontforgetloop.jpg)

![](step_zipper_done.jpg)

## Velcro Pieces

The frame bag is put on the bottom bar and sidebar using custom-made Velcro straps. These consist of four pieces: both Velcro sides and two pieces of fabric.

To measure the length of the fabric pieces, grab your measurement tape and measure a **U**-shape loop around the frame bar, where the straps will be used + add an overlap which is equal to the Velcro's width. I found my lengths through trial and error after two tries. But to give a more exact plan:

1. Each strap consists of two pieces: a long piece and a short piece. When both are connected to one another, then the total length should be equal to the measured **U**-shape around the frame bar ($l_{\text{total}} = l_{\text{1}} + l_{\text{2}} + l_{\text{velcro}}$). What exactly the lengths of these two pieces are, is your choice!

<img src="total_length.drawio.svg" style="width: 65%;">


{% callout(type="warning" title="Different bar sizes on frame") %}

Each side of the frame might have different diameters/sizes, so be sure to measure twice before cutting your fabric!

{% end %}

2. First do the side folds, then the top fold. The bottom one is not needed, as it will be sewn later on.
    - To make life easier, sew the side fold's edges for a nicer look and easier handling for the top fold.
    - When doing the top fold, directly sew the Velcro strip to it.

$$
l_{\text{height,n}} = 2 \cdot l_{\text{seam}} + l_{\text{n}} + l_{\text{velcro}} \qquad l_{\text{width,1}} = l_{\text{width,2}} = 2 \cdot l_{\text{seam}} + l_{\text{3}}
$$

![](pattern_velcro.drawio.svg)

3. Now do this for

![](step_velcro_loops.jpg)

## Sew Everything together

![](step_belt_connect.jpg)
![](step_velcro_sewing_pattern.jpg)

![](step_together1.jpg)
![](step_together2.jpg)
![](step_together_lookinside.jpg)
![](step_together_loopcheck.jpg)
![](step_together_end_clipped.jpg)
![](step_together_end1.jpg)
![](step_together_oneside-done.jpg)
![](step_together_done.jpg)