#estandares definidos de palabras por minuto de quinto grado

ppm = 0

if 0 < ppm < 115:
    print("Status: Requiere apoyo")
elif 115 <= ppm < 124:
    print("Status: Se acerca al estandar")
elif 125 <= ppm < 134:
    print("Status: Estandar")
elif ppm >= 134:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")