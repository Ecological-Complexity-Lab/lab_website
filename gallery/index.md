---
title: gallery
---

# My Gallery

Here is a gallery of my favorite photos:


<head>
    <title>My Photo Gallery</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css" rel="stylesheet">
    <style>
        .gallery img {
            width: 100%;
            height: auto;
            padding: 5px;
        }
    </style>
</head>
<body>

<div class="gallery">
    <a href="https://ecomplab.com/images/background_microbes.jpg" data-lightbox="mygallery" data-title="My Image 1">
        <img src="https://ecomplab.com/images/team_shai.jpg" alt="Thumbnail 1">
    </a>
    <a href="path/to/fullsize-image2.jpg" data-lightbox="mygallery" data-title="My Image 2">
        <img src="path/to/thumbnail-image2.jpg" alt="Thumbnail 2">
    </a>
    <!-- More images -->
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox-plus-jquery.min.js"></script>
</body>

