#estandares definidos de palabras por minuto de quinto grado

ppm = 0

if 0 < ppm < 100:
    print("Status: Requiere apoyo")
elif 100 <= ppm < 114:
    print("Status: Se acerca al estandar")
elif 115 <= ppm < 124:
    print("Status: Estandar")
elif ppm >= 124:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")