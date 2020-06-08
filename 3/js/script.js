$(document).ready(() => {
    document.getElementById('icon-nav').addEventListener('click', (event) => {
        let menu = document.querySelector('.menu');
        (!menu.style.display || menu.style.display === 'none') ? menu.style.display = 'flex' : menu.style.display = 'none';
    });
    window.addEventListener("resize", () => {
        let menu = document.querySelector('.menu');
        (window.innerWidth > 790) ? menu.style.display = 'flex' : menu.style.display = 'none';
    });
    $('#carousel1').owlCarousel({
        items: 1,
        loop: true
    });
    $('#carousel2').owlCarousel({
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            791: {
                items: 2
            },
            1200: {
                center: true,
                items: 3
            }
        }
    });
    checkClasses();
    $(".next").click(() => {
        $('#carousel2').trigger("next.owl.carousel");
        checkClasses();
    });
    $(".prev").click(() => {
        $('#carousel2').trigger("prev.owl.carousel");
        checkClasses();
    });

});

let checkClasses = () => {
    $('.owl-stage .owl-item').removeClass('firstActiveItem');
    $('.owl-stage .owl-item.active').each(function (index) {
        if (index === 1)
            $(this).addClass('firstActiveItem');
    });
};
