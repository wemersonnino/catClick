$(document).ready(function($) {
    let catsImages = [{
            src: 'cat01.jpg',
            alt: 'Cat KiKI',
            count: 0,
        },
        {
            src: 'cat02.jpg',
            alt: 'Cat Edi',
            count: 0,
        },
        {
            src: 'cat03.jpg',
            alt: 'Cat Didi',
            count: 0,
        },
        {
            src: 'cat04.jpg',
            alt: 'Cat Kely',
            count: 0,
        },
        {
            src: 'cat05.jpg',
            alt: 'Cat Vivi',
            count: 0,
        },
    ];

    let image = [...catsImages];



    $('.dl-vertical img').each(function(index, el) {
        $(this).attr({
            src: 'img/' + image[index].src,
            alt: image[index].alt,
            'data': image[index].count
        });
    });

    let t = 0;
    $('img').each(function(index, el) {
        $(this).click(function(i) {
            $('#teste').find('img').attr({
            	'src': 'img/' + image[index].src,
            	'alt': image[index].alt,
            	'data-count':image[index].count
            });
            $('#d').unbind('click');
            let cont = image[index].count ++;
            $('.count').text(cont);
            if (cont > 10) {
            	cont = 10;
            	$('.count').text(cont + ' o mais curtido');
            	$('img').unbind('click');
            }
        }); //event click end
    });



});