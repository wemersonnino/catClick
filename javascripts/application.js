$(document).ready(function() {

var catsImages = [ 
        {
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

$('.catImag img').each(function(i, el) {

 $(this).attr(
     {
            'src': 'catClick/img/' + image[i].src,
            'alt': image[i].alt,
            'data-count': image[i].count
        }
 );

//$(this).after('<figcaption>' + imageObject[i].alt + '</figcaption>');
$(this).after('<span class="count"></span>');

})

$.each($('figure'), function(index, el) {
        $(this).one('click', function(event) {
            / Act on the event /
            $(this).append('<figcaption>' + image[index].alt+ '</figcaption>');
        });
    });// update click name, exibe o nome do cat clicado


$('.catImag ').click(function(){
    let countIni = $(this).children('img').attr('data-count');

    $(this).children('.count').text(countIni = parseInt(countIni, 10) + 1);
    $(this).children('img').attr('data-count',countIni);

    if (countIni == 10) {
        let mediaCalc; 
        mediaCalc = parseInt((countIni) / 5); 
        $(this).after('<p>' + 'Bem Curtido' + '</p>');
    }


    console.log($(this).children('span'));

    })

});