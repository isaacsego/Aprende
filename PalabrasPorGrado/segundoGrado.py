
# estandares definidos de palabras por minuto de segundo grado

ppm = 0

if 0 < ppm < 35:
    print("Status: Requiere apoyo")
elif 35 <= ppm < 59:
    print("Status: Se acerca al estandar")
elif 60 <= ppm < 84:
    print("Status: Estandar")
elif ppm >= 85:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")