$(document).ready(function () {
    const images = ["../gato.png", "../gato.png", "../gato.png", "../gato.png", "../gato.png"];
    const container = $(".elements-container");

    $("#changeBackground").click(function () {
        const color = $("#colorPicker").val();
        $("body").css("background-color", color);
        $(".element").css("background-color", color);
    });

    $("#addElement").click(function () {
        const img = images[Math.floor(Math.random() * images.length)];
        const element = `
            <div class="element">
                <img src="${img}" alt="Elemento">
                <button class="changeImage">Cambiar</button>
                <button class="deleteElement">Borrar</button>
            </div>
        `;
        container.append(element);
    });

    $("#reset").click(function () {
        container.empty();
        $("body").css("background-color", "#f9f9f9");
    });

    container.on("click", ".changeImage", function () {
        const img = images[Math.floor(Math.random() * images.length)];
        $(this).siblings("img").attr("src", img);
    });

    container.on("click", ".deleteElement", function () {
        $(this).parent().remove();
    });
});
