const estandares = {
    1: {
        limites: [15, 34, 59],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 15 palabras por minuto.",
            "Se acerca al estandar: Entre 15 y 34 palabras por minuto.",
            "Estandar: Entre 35 y 59 palabras por minuto.",
            "Sobresaliente: Mayor a 59 palabras por minuto."
        ]
    },
    2: {
        limites: [35, 59, 84],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 35 palabras por minuto.",
            "Se acerca al estandar: Entre 35 y 59 palabras por minuto.",
            "Estandar: Entre 60 y 84 palabras por minuto.",
            "Sobresaliente: Mayor a 84 palabras por minuto."
        ]
    },
    3: {
        limites: [60, 84, 99],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 60 palabras por minuto.",
            "Se acerca al estandar: Entre 60 y 84 palabras por minuto.",
            "Estandar: Entre 85 y 99 palabras por minuto.",
            "Sobresaliente: Mayor a 99 palabras por minuto."
        ]
    },
    4: {
        limites: [85, 99, 114],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 85 palabras por minuto.",
            "Se acerca al estandar: Entre 85 y 99 palabras por minuto.",
            "Estandar: Entre 100 y 114 palabras por minuto.",
            "Sobresaliente: Mayor a 114 palabras por minuto."
        ]
    },
    5: {
        limites: [100, 114, 124],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 100 palabras por minuto.",
            "Se acerca al estandar: Entre 100 y 114 palabras por minuto.",
            "Estandar: Entre 115 y 124 palabras por minuto.",
            "Sobresaliente: Mayor a 124 palabras por minuto."
        ]
    },
    6: {
        limites: [115, 124, 134],
        etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"],
        rubrica: [
            "Requiere apoyo: Menor a 115 palabras por minuto.",
            "Se acerca al estandar: Entre 115 y 124 palabras por minuto.",
            "Estandar: Entre 125 y 134 palabras por minuto.",
            "Sobresaliente: Mayor a 134 palabras por minuto."
        ]
    }
};

/*
function determinarStatus(ppm, grado) {
    switch (grado) {
        case 1:
            if (ppm < 15) return "Requiere apoyo";
            if (ppm >= 15 && ppm < 35) return "Se acerca al estandar";
            if (ppm >= 35 && ppm < 60) return "Estandar";
            if (ppm >= 60) return "Sobresaliente";
            break;
        case 2:
            if (ppm < 35) return "Requiere apoyo";
            if (ppm >= 35 && ppm < 60) return "Se acerca al estandar";
            if (ppm >= 60 && ppm < 85) return "Estandar";
            if (ppm >= 85) return "Sobresaliente";
            break;
        case 3:
            if (ppm < 60) return "Requiere apoyo";
            if (ppm >= 60 && ppm < 85) return "Se acerca al estandar";
            if (ppm >= 85 && ppm < 100) return "Estandar";
            if (ppm >= 100) return "Sobresaliente";
            break;
        case 4:
            if (ppm < 85) return "Requiere apoyo";
            if (ppm >= 85 && ppm < 100) return "Se acerca al estandar";
            if (ppm >= 100 && ppm < 115) return "Estandar";
            if (ppm >= 115) return "Sobresaliente";
            break;
        case 5:
            if (ppm < 100) return "Requiere apoyo";
            if (ppm >= 100 && ppm < 115) return "Se acerca al estandar";
            if (ppm >= 115 && ppm < 125) return "Estandar";
            if (ppm >= 125) return "Sobresaliente";
            break;
        case 6:
            if (ppm < 115) return "Requiere apoyo";
            if (ppm >= 115 && ppm < 125) return "Se acerca al estandar";
            if (ppm >= 125 && ppm < 135) return "Estandar";
            if (ppm >= 135) return "Sobresaliente";
            break;
        default:
            return "Grado no válido";
    }
}

 */