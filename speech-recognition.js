function determinarStatus(ppm, grado) {
    const { limites, etiquetas } = estandares[grado];
    if (ppm <= 0) return "Error";
    if (ppm < limites[0]) return etiquetas[0];
    if (ppm < limites[1]) return etiquetas[1];
    if (ppm < limites[2]) return etiquetas[2];
    return etiquetas[3];
}

function iniciarReconocimiento() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("El reconocimiento de voz no es soportado en este navegador.");
        return;
    }

    reconocimiento = new SpeechRecognition();
    reconocimiento.lang = 'es-ES';
    reconocimiento.interimResults = true;
    reconocimiento.continuous = true;

    reconocimiento.onstart = () => {
        inicioTiempo = Date.now();
        grabando = true;
        document.getElementById('transcripcion').textContent = '';
    };


    reconocimiento.onresult = (event) => {
 let transcripcionCompleta = "";
        let transcripcionIntermedia = "";

        // Procesar todos los resultados
        for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                transcripcionCompleta += transcript + " ";
            } else {
                transcripcionIntermedia = transcript;
            }
        }

        // Actualizar la visualización
        const cajaTranscripcion = document.getElementById('transcripcion');
        cajaTranscripcion.innerHTML = `
            <span style="color: #333">${transcripcionCompleta}</span>
            <span style="color: #888">${transcripcionIntermedia}</span>
        `;

        // Calcular métricas solo con el texto finalizado
        if (transcripcionCompleta) {
            const tiempoTranscurrido = (Date.now() - inicioTiempo) / 1000 / 60;
            const palabras = transcripcionCompleta.trim().split(/\s+/).length;
            const ppm = Math.round(palabras / tiempoTranscurrido);
            const grado = document.getElementById('grado').value;

            document.getElementById('metricas').innerHTML = `
                <p>Palabras detectadas: ${palabras}</p>
                <p>PPM: ${ppm}</p>
                <p>Status: ${determinarStatus(ppm, grado)}</p>
            `;
        }
    };

    reconocimiento.onerror = (event) => {
        console.error("Error en reconocimiento:", event.error);
    };

    reconocimiento.start();
}

document.getElementById('btnGrabar').addEventListener('click', () => {
    if (!grabando) {
        iniciarReconocimiento();
        btnGrabar.textContent = "Detener Grabación";
    } else {
        reconocimiento.stop();
        btnGrabar.textContent = "Iniciar Grabación";
        grabando = false;
    }

});