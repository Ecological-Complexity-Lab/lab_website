---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

We are a diverse group of dedicated and passionate researchers excited to explore ecological systems. Our team comprises talented individuals across all academic levels and from multiple countries and backgrounds. Each of us brings a unique perspectives to our research. With interests spanning ecology & evolution, data science, and complex system modeling, our team excels in groundbreaking synergistic research. We also enjoy a rich tapestry of hobbies, including photography, music, outdoor activities, and arts, which enrich our collaborative environment.

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}

{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}

{% include section.html background="images/background.jpg" dark=true %}

We work with a wide range of outstanding groups from around the world, and we’re always on the lookout for new and unique perspectives. We want to push the frontier of data science and train the next generation of data scientists.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
