let reconocimiento;
let grabando = false;
let temporizador;
let tiempoRestante = 60;

function determinarStatus(ppm, grado) {
    const { limites, etiquetas } = estandares[grado];
    if (ppm < limites[0]) return etiquetas[0];
    if (ppm < limites[1]) return etiquetas[1];
    if (ppm < limites[2]) return etiquetas[2];
    return etiquetas[3];
}

function actualizarRubrica(grado) {
    const rubricaContainer = document.getElementById('rubrica');
    rubricaContainer.innerHTML = `
        <h3>Estándares para ${grado}° grado:</h3>
        <ul>${estandares[grado].rubrica.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
}

function iniciarCronometro() {
    tiempoRestante = 60;
    const cronometro = document.getElementById('cronometro');

    temporizador = setInterval(() => {
        tiempoRestante--;
        const minutos = Math.floor(tiempoRestante / 60);
        const segundos = tiempoRestante % 60;
        cronometro.textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        if (tiempoRestante <= 0) {
            clearInterval(temporizador);
            finalizarPrueba();
        }
    }, 1000);
}

function finalizarPrueba() {
    reconocimiento.stop();
    const nombre = document.getElementById('nombre').value;
    const palabras = document.querySelector('#metricas p:first-child').textContent.split(': ')[1];
    const status = document.querySelector('#metricas p:last-child').textContent.split(': ')[1];

    localStorage.setItem('resultados', JSON.stringify({
        nombre: nombre,
        palabras: palabras,
        status: status
    }));

    window.location.href = 'datos.html';
}

document.getElementById('grado').addEventListener('change', (e) => {
    actualizarRubrica(e.target.value);
});

document.getElementById('btnGrabar').addEventListener('click', () => {
    if (!grabando) {
        if (!document.getElementById('nombre').value) {
            alert("Por favor ingresa tu nombre");
            return;
        }
        iniciarReconocimiento();
    } else {
        reconocimiento.stop();
        clearInterval(temporizador);
        document.getElementById('btnGrabar').textContent = "Iniciar Grabacion";
        grabando = false;
    }
});

function iniciarReconocimiento() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Lo siento, tu navegador no soporta la API de reconocimiento de voz.");
        return;
    }

    reconocimiento = new SpeechRecognition();
    reconocimiento.lang = 'es-ES';
    reconocimiento.interimResults = true;
    reconocimiento.continuous = true;

    reconocimiento.onstart = () => {
        inicioTiempo = Date.now();
        grabando = true;
        document.getElementById('transcripcion').innerHTML = '';
        iniciarCronometro();
    };

    reconocimiento.onresult = (event) => {
        let transcripcionCompleta = '';
        let transcripcionIntermedia = '';

        for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                transcripcionCompleta += transcript + ' ';
            } else {
                transcripcionIntermedia = transcript;
            }

            const cajaTranscripcion = document.getElementById('transcripcion');
            cajaTranscripcion.innerHTML = `
            <span style="color: #333">${transcripcionCompleta}</span>
            <span style="color: #888">${transcripcionIntermedia}</span>
            `;

            if (transcripcionCompleta) {
                const tiempo = (Date.now() - inicioTiempo) / 60000;
                const palabras = transcripcionCompleta.trim().split(/\s+/).length;
                const ppm = Math.round(palabras / tiempo);
                const grado = document.getElementById('grado').value;

                document.getElementById('metricas').innerHTML = `
                    <p>Palabras: ${palabras}</p>
                    <p>PPM: ${ppm}</p>
                    <p>Status: ${determinarStatus(ppm, document.getElementById('grado').value)}</p>
                `;
            }
        }
    };

    reconocimiento.onerror = (event) => {
        console.error('Error de reconocimiento:', event.error);
    };

    reconocimiento.start();
    document.getElementById('btnGrabar').textContent = "Detener Grabacion";
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarRubrica(document.getElementById('grado').value);
});