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
  toc: true
---

Before getting into too many details, this guide is heavily based on the original frame bag guide [DIY: How to Make A Simple Frame Bag](https://bikepacking.com/gear/how-to-make-a-bikepacking-framebag-krampus/). Instead of using velcro on all the sides, I instead replaced the top side with laces, like shoelaces!

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

- <u>A cardboard cutout of the bike frame</u> $\rightarrow$ don't forget to include markings of the screws inside and outside the frame. If you've got a _Trek 920_, this is your lucky day: <p>{{ button (text="Download Trek 920 Design Pattern" link="fullframebag_trek920.pdf" type="pdf") }}</p>
All sides have seam allowances of ca. $1\text{cm}$ added!

{% end %}


{% callout(type="wood" title="Material") %}
- <u>Outside fabric</u> $\rightarrow$ Protective layer of the bag, usually something sturdy. I used a nylon fabric with a plasticized layer to have some weather protection.
- <u>Stiffener material</u> $\rightarrow$ used for the side walls to give them shape.
- <u>Inside fabric</u> $\rightarrow$ to hide the stiffener material and make the inside nice to look at.
- <u>velcro</u> $\rightarrow$ any type is usable, as long as it's sew-able.
- <u>Nylon based string</u> $\rightarrow$ to lace up the frame bag to the top bar of my bicycle.
- <u>Zipper</u> $\rightarrow$ long enough to put your stuff into.
- <u>Nylon Cord</u> $\rightarrow$ For the zipper ends (not needed, but useful for water bladder bags) $\approx 2\times 8\text{cm}$.
- <u>Polyester sewing thread</u>
{% end %}


# Sewing Steps

## Creating the Design Pattern

Although I've got no photos of this step, I hope at least the written guide here is enough! It's easy!

1. Get a large enough cardboard for the inner frame
    - If you don't know where to get large cardboard, look for a company which packages their product in cardboard such as a cereal factory. They usually have misprints, which they might give away for free for hobbyists!
2. Tape it onto the frame
3. Grab a pen or felt pen and draw the outline of the inner frame
    - don't forget to also mark where the bolts for the bottle holder are located
4. Cut it out and there you go!
    - Also include other elements such as the zipper, velcro straps
    - don't forget to measure the outline for a long piece of fabric used to connect the two side panels!

{% callout(type="wood" title="Extra Fancy") %}

To go a little further and have a reusable and nicer looking design pattern, redraw the pattern in a CAD tool. Why a CAD software? Because most have constraints tool, which makes creating the pattern easier. I've created mine first in *Fusion360* and then exported the sketch into *Inkscape* to clean it up.

1. Simplify the shape and measure the lengths $\rightarrow$ no rounded angles, as these will be added later on
    - For example I was able to reduce my frame to four lines (it wasn't a perfect triangle)
2. Fusion360 Workflow
    - Draw the shape in the CAD's _Sketch_ mode
    - (**Recommended**) add some (large enough) rounded corners to make sewing a little bit easier 
        - reduces the amount of stops required
    - Add seam allowance using the *Offset* tool (in *Fusion360* it's under *Modify* $\rightarrow$ *Offset*)
        - I added an allowance of $\approx 1\text{cm}$
    - Include the zipper line (see my template in the <a href="#list-of-materials">List of Materials</a>)
    - Export the sketch as a `.dxf` and import it into *Inkscape*
3. Clean up the sketch and add some labels and information
4. Go to your nearest architecture plan plotting place and let them print it for you!
5. (**Recommended**) Glue the pattern onto cardboard to make it more robust

{% end %}

## Cut Fabric

With the design pattern done, next step is to create a _Mise en Place_ with the fabric.

- `6×` side panels (using the design pattern) &ndash; one is mirrored to the other!
    - `2×` Outside fabric
    - `2×` Stiffener fabric 
        - **IMPORTANT**: make the stiffener smaller for it to fit in between $\rightarrow$ reducing the seam allowance by $\approx 1.5\text{cm}$ on the outlines did the job for me
    - `2×` Inside fabric
- `2×` fabric pieces **per** velcro strap (see <a href="#velcro-pieces">Velcro Pieces</a> for sizes) + velcro Strips
- `12×` Square fabric pieces for the lace loops (size: $6\times 6\text{cm}$)
- `1×` long piece of fabric used for combining the side panels
    - it's one long piece, which will be used in the last step!


{% figure(caption="Side panel (_Panel #1_) without the zipper") %}
![](step_sidepanel_cuts.jpg)
{% end %}

{% figure(caption="The other side panel (_Panel #2_), cut apart for the zipper") %}
![](step_sidepanel_zipper_cut.jpg)
{% end %}


{% figure(caption="Smaller pieces of fabric for the velcro straps (top half) and the lace loops (bottom half)") %}
![](step_small_fabric_cut.jpg)
{% end %}

## Combine Outer and Inner Layer and Stiffener

For inserting the stiffener, the outer and inner layer are sewn together, except for one side, where the stiffener will be inserted:

1. Sew outer and inner layer together, except for one side
2. insert stiffener in said open side
3. finish it by sewing the open side

{% figure(caption="Leave enough space for the stiffener to be inserted!") %}
![](step_sidepanel_almost_closed.jpg)
{% end %}

## Prepare Lace Loops

The lace loops are a bit tricky, mostly because I wanted to be sturdy!

{% figure(caption="Fold two opposing sides inwards (about $4-5\text{mm}$)") %}
<img src="step_laceloops_fold1.jpg">
{% end %}

{% figure(caption="Then fold the whole fabric in half (in line with the folds)") %}
<img src="step_laceloops_fold2.jpg">
{% end %}


{% figure(caption="Sew the first folds together") %}
<img src="step_laceloops_sewn.jpg">
{% end %}


## Sew Zipper to Sidepanel

To sew the zipper onto the cut side panel, first cut two pieces of outer fabric. The width are the same as the zipper. The length should long enough, for the whole thing to over the edge of the side panel (after the zipper is sewn on, the rest can be cut away).


{% figure(caption="Sew the fabric into the zipper") %}
<img src="step_zipper1.jpg">
{% end %}

{% figure(caption="Fold the fabric at the `hidden` line ($\approx 2\text{cm}$)") %}
<img src="step_zipper2.jpg">
{% end %}

{% figure(caption="Snuggle the nylon cord to the zipper...") %}
<img src="step_zipper3.jpg">
{% end %}

{% figure(caption="...and sew the fold and zipper together (including the nylon cord)") %}
<img src="step_zipper4.jpg">
{% end %}

{% figure(caption="Finished seam!") %}
<img src="step_zipper5_finished.jpg">
{% end %}

Do the exact same on the other side! Afterwards, attach the zipper to one of the side panel pieces. While sewing, you might need to move the zipper itself away from the presser foot (as seen in the <a href="#zippermove">image below</a>). Since the length of the zipper + fabrics are going over the edge, cut them away after you've sewn all side panel things together!


{% figure(caption="I first attached the smaller side panel piece to the zipper. Look out for the correct side of the pieces!") %}
<img src="step_zipper_to_uppersidepanel.jpg">
{% end %}

{% figure(caption="Might need to move the presser foot away while sewing.") %}
<img src="step_zipper_to_uppersidepanel_zippermove.jpg" id="zippermove">
{% end %}
{% figure(caption="Don't forget to move the nylon cord loop away") %}
<img src="step_zipper_to_lowersidepanel_dontforgetloop.jpg">
{% end %}

{% figure(caption="After the zipper is sewn on, cut the rest of the fabric off!") %}
<img src="zippercut.drawio.svg" id="anchor-zipper">
{% end %}

{% figure(caption="If desired, sew the fabric edge to the zipper tape using the zipper presser foot.") %}
<img src="step_zipper_done.jpg">
{% end %}

## Velcro Pieces

The frame bag is put on the bottom bar and sidebar using custom-made velcro straps. These consist of four pieces: both velcro sides and two pieces of fabric.

To measure the length of the fabric pieces, grab your measurement tape and measure a **U**-shape loop around the frame bar, where the straps will be used + add an overlap which is equal to the velcro's width. I found my lengths through trial and error after two tries. But to give a more exact plan:

1. On the created design pattern of the frame bag, mark where you want your velcro straps to go and how wide they should be!
2. Each strap consists of two pieces: a long piece and a short piece. When both are connected to one another, then the total length should be equal to the measured **U**-shape around the frame bar ($l_{\text{total}} = l_{\text{1}} + l_{\text{2}} + l_{\text{velcro}}$). What exactly the lengths of these two pieces are, is up to you!


{% figure(caption="**U**-shaped loop and a possible way on how the straps connect with each other.") %}
<img src="total_length.drawio.svg" style="width: 65%;">
{% end %}

{% callout(type="warning" title="Different bar sizes on frame") %}

Each side of the frame might have different diameters/sizes, so be sure to measure twice before cutting your fabric!

{% end %}

3. First do the side folds, then the top fold. The bottom one is not needed, as it will be sewn later on.
    - To make life easier, sew the side fold's edges for a nicer look and easier handling for the top fold.
    - When doing the top fold, directly sew the velcro strip to it.

$$
l_{\text{height,n}} = 2 \cdot l_{\text{seam}} + l_{\text{n}} + l_{\text{velcro}} \qquad l_{\text{width,1}} = l_{\text{width,2}} = 2 \cdot l_{\text{seam}} + l_{\text{3}}
$$


{% figure(caption="Design pattern of the velcro straps with folding guide included") %}
<img src="pattern_velcro.drawio.svg">
{% end %}

4. Now do this for all the other straps. It's a lot of work, but it will be worth it :)

{% figure(caption="One pair of finished velcro straps out of a couple more.") %}
<img src="step_velcro_loops.jpg">
{% end %}

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