---
layout: page
thumbnail: "/images/pages/archive.jpg"
filled: true
title: "Writing"
permalink: "/writing"
---

{% for post in site.posts %}
{% assign currentdate = post.date | date: "%Y" %}
{% if currentdate != date %}
{% unless forloop.first %}</div>{% endunless %}
<div class="list-block-collection">
  <h2 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h2>
{% assign date = currentdate %}
{% endif %}
  <div class="list-block-element">
    <a href="{{ post.url }}">
      <h4 class="title">
        {{ post.title }}
      </h4>
    </a>
    <p class="date">
    <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date |
          date: "%e.%m." }}
        </time>
    </p>
  </div>
{% if forloop.last %}</div>{% endif %}
{% endfor %}

