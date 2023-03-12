---
layout: page
thumbnail: "/images/pages/archive.jpg"
filled: true
title: "Writing"
permalink: "/writing"
---

<div class="box-collection">
  {% for post in site.posts %}
  <div class="box">
    {% if post.thumbnail %}
    <div class="box-img">
      <img src="{{ post.thumbnail }}">
    </div>
    {% endif %}
    <a href="{{ post.url }}">
      <h4 class="box-title">
        {{ post.title }}
      </h4>
    </a>
    <p class="box-date">
      <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date |
            date_to_long_string:
            "ordinal" }}
          </time>
    </p>
    <p class="box-desc">
      {{ post.excerpt }}
    </p>
  </div>
  {% endfor %}
</div>
