---
layout: page
thumbnail: "/images/pages/archive.jpg"
filled: true
title: "Posts"
permalink: "/posts"
---

<section class="post-collection">
  {% for post in site.posts %}
  {% if post.thumbnail %}
  {% include post_article.html url=post.url thumbnail=post.thumbnail title=post.title excerpt=post.excerpt
  date=post.date
  %}
  {% else %}
  {% include post_article.html url=post.url title=post.title excerpt=post.excerpt date=post.date %}
  {% endif %}
  {% endfor %}
</section>