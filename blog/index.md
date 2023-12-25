---
title: News
nav:
  order: 4
  tooltip: What we are up to
script: "<script>document.body.style.backgroundImage = 'url(/images/background_dalle.jpg)';</script>"
---
<!-- At the top of your publications.md 
<style>
  body {
    background-image: url('/images/background_dalle.jpg');
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>  -->

# {% include icon.html icon="fa-solid fa-feather-pointed" %}News


{% include section.html %}

{% include search-box.html %}

{% include tags.html tags=site.tags %}

{% include search-info.html %}

{% include list.html data="posts" component="post-excerpt" %}
