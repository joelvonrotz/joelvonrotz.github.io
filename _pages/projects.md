---
layout: page
title: "Projects"
permalink: "/projects"
thumbnail: "/images/pages/projects.jpg"
filled: true
---

{% if site.projects %}
<div class="box-collection">
  {% for project in site.projects %}
  <div class="box">
    <a href="{{ project.url }}">
      <h4 class="box-title">
        {{ project.title }}
      </h4>
    </a>
    <p class="box-desc">
      {{ project.excerpt }}
    </p>
  </div>
  {% endfor %}
</div>
{% endif %}

## Summaries

### Bachelor &ndash; Electrical Engineering

<div class="box-collection">
  <div class="box">
  <a href="/downloads#semester-1">
    <h4 class="box-title">
      Semester 1
    </h4></a>
    <p class="box-desc">
      My summaries from my first semester of the bachelor of electrical engineering at HSLU Lucerne.
    </p>
  </div>

  <div class="box">
  <a href="/downloads#semester-2">
    <h4 class="box-title">
      Semester 2
    </h4></a>
    <p class="box-desc">
      My summaries from my second semester of the bachelor of electrical engineering at HSLU Lucerne.
    </p>
  </div>

  <div class="box">
  <a href="/downloads#semester-3">
    <h4 class="box-title">
      Semester 3
    </h4></a>
    <p class="box-desc">
      Our summaries from my third semester of the bachelor of electrical engineering at HSLU Lucerne.
    </p>
  </div>

  <div class="box">
  <a href="/downloads#semester-4">
    <h4 class="box-title">
      Semester 4
    </h4></a>
    <p class="box-desc">
      Our summaries from my fourth semester of the bachelor of electrical engineering at HSLU Lucerne.
    </p>
  </div>
</div>

## Bike Touring

> Genau wenn man irgendwo im nirgendwo ist, die Regenkleider völlig durchnässt und das Ziel viel zu weit weg gesetzt hat, dann erlebt man das Abenteuer.
> > Me!

<div class="box-collection">
  <div class="box">
    <div class="box-img">
      <img src="/images/projects/touring/project_suisse_de_tour.jpg">
    </div>
    <h4 class="box-title">
      Suisse de Tour
    </h4>
    <p class="box-desc">
      A four week tour I've done during the summer of 2021. I explored my home country thoroughly by visiting all the main cities of each canton.
    </p>
    <div class="box-links">
      <a href="https://blog.veloplus.ch/2022/01/31/suisse-de-tour-eine-reise-durch-die-schweiz/">Tour-Report (🇩🇪)</a>
      <span>/</span>
      <a href="https://flic.kr/s/aHBqjzAD3F">Photos</a>
    </div>
  </div>
</div>



<!--
- Sewing
- Travel
- Electronics
-->