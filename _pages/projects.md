---
layout: page
title:  Projects
permalink: "/projects"
---

{% for projects in site.projects %}
  {% include project-preview.html 
      title=projects.title 
      thumbnail=projects.thumbnail
      description=projects.description
      url=projects.url
  %}
{% endfor %}
