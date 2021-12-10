const button = $("#btnSubmit");// buscando o button com jQueyr + js //
const title = $("#title");// buscando o title no html //
const content = $("#picture-video");// buscando a div que vai receber imagem ou video da nasa //
const explain = $("#explain");// buscando a explanation que vai receber do astrônomo //
let obj;


// função que dispara outra função ao clicar, tendo preventDefault para impedir a página de atualizar //
button.on("click", function(event) {
  event.preventDefault();
  request();
});

// função com ajax, para fazer a requisição ao site da Nasa, com minha key gerada no API APOD // 
function request(date) {
  $(`#date`).val(); // data que o usúario inseriu no input //
  console.log($(`#data`).val());
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=pWykQWkPNxl9ZO9GioA41Sr2dO2HAnDYaVKKiLhq&date=` + $(`#date`).val(),

    success: function(result) {
        obj = result;
        title.html(`${obj.title}`);
        title.removeClass("hide");
        explain.html(`${obj.explanation}`);
        explain.removeClass("hide");
        if(obj.media_type != "video") {
            content.html (`<img width = "500px" heigth = "500px" id="picture" src="${obj.url}" alt=""></img>`);
            
        } else {
            content.html(`<iframe id="video" src="${obj.url}" alt=""></iframe`);
        }
    }
  });
}



