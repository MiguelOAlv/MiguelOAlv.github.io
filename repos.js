$(document).ready(function () {
    let url_api = "https://api.github.com/users/MiguelOAlv/repos";
    let datos = "";
    $.ajax({
        url: url_api,
        dataType: "text",
        success: function (data) {
            console.log(data);
            generarProyectos(data);
        }
    });
});


function generarProyectos(data) {
    let html_proyectos = "";
    data = $.parseJSON(data);
    $.each(data, function(i, item) {
        if(item.name=="MiguelOAlv.github.io" || item.name=="Java_Algorithms"){
            return 0;
        }
        html_proyectos+=`<div class="card"><div class="project-img"><img src="content/main.png" alt="tribute page"></div><div class="desc"><h3 class="project-tile"><a target="_blank" href="${item.html_url}">${item.name}<a></h3><p>${item.description}</p>`;
        if(item.homepage!="" && item.homepage!=null){
            html_proyectos+=`<br><p style="color: #011640; text-align:center;font-weight: bold;"><a target="_blank" href="${item.homepage}">Ver web</a></p>`;
        }
        html_proyectos+= '</div></div>';
    });
    $("#proyectos").html(html_proyectos);
}

