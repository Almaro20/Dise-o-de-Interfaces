$(document).ready(function () {
    let state = "initial";
    let startTime, endTime, timeout;

    $("#screen").click(function () {
        if (state === "initial") {
            state = "waiting";
            $("#screen").removeClass("initial").addClass("waiting");
            $("#message").text("Espera a que la pantalla se ponga roja...");

            timeout = setTimeout(() => {
                state = "active";
                startTime = new Date().getTime();
                $("#screen").removeClass("waiting").addClass("active");
                $("#message").text("¡Haz clic ahora!");
            }, Math.random() * 2000 + 2000);
        } else if (state === "waiting") {
            clearTimeout(timeout);
            state = "initial";
            $("#screen").removeClass("waiting").addClass("initial");
            $("#message").text("¡Demasiado pronto! Inténtalo de nuevo.");
        } else if (state === "active") {
            endTime = new Date().getTime();
            const reactionTime = endTime - startTime;
            state = "result";
            $("#screen").removeClass("active").addClass("result");
            $("#message").text(`Tu tiempo de reacción: ${reactionTime} ms. Haz clic para intentarlo otra vez.`);
        } else if (state === "result") {
            state = "initial";
            $("#screen").removeClass("result").addClass("initial");
            $("#message").text("Haz clic para empezar");
        }
    });
});
