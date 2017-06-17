window.sr = ScrollReveal();
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});
sr.reveal('.showcase-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});
sr.reveal('.showcase-btn', {
    duration: 2000,
    delay: 2000,
    origin: 'bottom'
});
sr.reveal('#testimonial div', {
    duration: 2000,
    origin: 'bottom'
});
sr.reveal('.info-left', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.info-right', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    viewFactor: 0.2
});
// Allow the pages to scroll smoothly to an anchor on the same page.
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Image variables needed for the modal to go to another page.
var links = {
    Image1: "http://animatescroll.s3-website-us-west-2.amazonaws.com",
    Image2: "https://amjohnson38.github.io/American-Florist-Website/"
};

var currentImage;

// Makes the cards on the service page the same height no matter the amount of content
$(document).ready(function () {
    var heights = $(".thumbnail").map(function () {
        return $(this).height();
    }).get(),

        maxHeight = Math.max.apply(null, heights);

    $(".thumbnail").height(maxHeight);

    // Displays the thumbnail image to the modal
    $('.thumbnail').click(function () {
        $('.modal-body').empty();
        var title = $(this).parent('a').attr("title");
        $('.modal-title').html(title);
        $($(this).parents('div').html()).appendTo('.modal-body');
        $('#myModal').modal({ show: true });
    });

// Redirects the modal to the thumbnails website on another page.

    $('.thumbnails').click(function (event) {
        currentImage = event.currentTarget.id;
    });
    $('.vs').click(function(event) {
        window.open(links[currentImage]);
        return false;
    });
});

