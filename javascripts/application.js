$(document).ready(function() {
    /*let nameCat = ['Cat KiKI', 'Cat Edi', 'Cat Didi', 'Cat Kely', 'Cat Vivi'];
    let catImg = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];*/
    const catsImages = ['cat01.jpg', 'cat02.jpg', 'cat03.jpg', 'cat04.jpg', 'cat05.jpg'];
    const catsName = ['Cat KiKI', 'Cat Edi', 'Cat Didi', 'Cat Kely', 'Cat Vivi'];

    let image = [...catsImages];
    let name = [...catsName];

    console.log(image);
    console.log(name);

    let count = 0;

    let $span = $('img').append('<span>' + count + '</span>');

    $.each($('.catImag img'), function(index) {
        $(this).attr({
            src: image[index],
            alt: name[index]
        });
    }); //Update Cat

    $.each($('figure'), function(index, el) {
    	
    	$(this).one('click', function(event) {
    		/* Act on the event */
    		$(this).append('<figcaption>' + name[index] + '</figcaption>');
    	});

    });// update click name

    // acho que tem quer criar uma função para contar o click
    


});