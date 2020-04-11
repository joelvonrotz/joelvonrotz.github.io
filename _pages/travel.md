---
layout: page
title:  Travelbook
permalink: "/travelbook"
thumbnail: "/images/thumbnail_travelbook.jpg"
---
Here you get to see all of my journeys, done on foot, by bike or with a car.

## List of all my journeys

{% if site.travel %}
{% for entry in site.travel %}
[{{entry.title}}]({{entry.url}}) **({{entry.distance}})** - {{entry.description}}
{% endfor %}
{% else %}
none :(
{% endif %}
