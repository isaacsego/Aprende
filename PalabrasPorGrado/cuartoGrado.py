#estandares definidos de palabras por minuto de cuarto grado

ppm = 0

if  0 < ppm < 85:
    print("Status: Requiere apoyo")
elif 85 <= ppm < 99:
    print("Status: Se acerca al estandar")
elif 100 <= ppm < 114:
    print("Status: Estandar")
elif ppm >= 114:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")