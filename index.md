---
---

# Welcome to our website

We strive to uncover the complexity underlying ecological systems

{% include section.html %}

{% capture text %}

We characterize the complexity of ecological systems to understand its nature and consequences. We combine modeling, simulations, data analysis and ecological/evolutionary theory.

{%
  include button.html
  link="publications"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{%
  include button.html
  link="research"
  text="See our research directions"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Project stuff
{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

{%
  include feature.html
  image="images/group_photo.jpeg"
  link="team"
  title="Meet our team"
  text="Our team is made up of people all around the globe"
  flip=true
%}

{% endcapture %}
