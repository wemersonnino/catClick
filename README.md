# Cat Click
![black_cat](https://user-images.githubusercontent.com/5173977/50284182-59f21980-043f-11e9-8fd2-c2fa60ffb846.jpg)

*Um projeto para contabilizar a quantidade de click em uma imagem*

As imagens são carregadas por um array de objetos, neste formato pode-se
carregar via banco, se o banco gerar um json no formato estrutural semelhante
ao do array, poderia conter mais imagens dinamicamente.
**Obs**
>Para conter mais imagens dinamicamente, deverá gerar
>as tags <figure> dinamicamente via jquery

```
$.each($('figure'), function(index, el) {
        $(this).one('click', function(event) {
            / Act on the event /
            $(this).append('<figcaption>' + image[index].alt+ '</figcaption>');
        });
    });// update click name, exibe o nome do cat clicado
```

Existe uma variável que poderá ser usada para enviar dados de quais imagens 
foram mais curtidas e quantas curtidas ela recebeu, usando o name da imagem 
da pra registrar via BD 

*Contatos para contribuição*
[Twitter](https://mobile.twitter.com/WemersonNino)
_Portfólio_
[behance](https://www.behance.net/Wemerson)
[dribbble](https://dribbble.com/WemersonNino)
