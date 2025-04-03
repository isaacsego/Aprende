
# estandares definidos de palabras por minuto de segundo grado

ppm = 0

if 0 < ppm < 15:
    print("Status: Requiere apoyo")
elif 15 <= ppm < 34:
    print("Status: Se acerca al estandar")
elif 35 <= ppm < 59:
    print("Status: Estandar")
elif ppm >= 59:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")