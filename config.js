const estandares = {
    1: { limites: [15, 34, 59], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] },
    2: { limites: [35, 59, 84], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] },
    3: { limites: [60, 84, 99], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] },
    4: { limites: [85, 99, 114], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] },
    5: { limites: [100, 114, 124], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] },
    6: { limites: [115, 124, 134], etiquetas: ["Requiere apoyo", "Se acerca al estandar", "Estandar", "Sobresaliente"] }
};

let reconocimiento;
let inicioTiempo;
let grabando = false;