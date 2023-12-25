---
title: Publications
nav:
  order: 2
  tooltip: Published works
---
<style>
    .page-content {
        background-image: url('https://ecomplab.com/images/background_dalle.jpg');
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
    }
</style>

# {% include icon.html icon="fa-solid fa-book-open" %}Publications

<style>
.publications-page {
    background-image: url('https://ecomplab.com/images/background_dalle.jpg');
    /* Other background properties as needed */
}
</style>


{% include section.html %}

{% include search-box.html %}

<!-- {% include tags.html tags=site.tags %} -->

{% include search-info.html %}

## Highlighted

{% include citation.html lookup="EMLN" style="rich" %}
{% include citation.html lookup="Conceptualizing" style="rich" %}
{% include citation.html lookup="CRISPR" style="rich" %}
{% include citation.html lookup="The multilayer nature of ecological networks" style="rich" %}

{% include section.html %}

## All

{% include search-box.html %}

{% include search-info.html %}

{% include list.html data="citations" component="citation" style="rich" %}

