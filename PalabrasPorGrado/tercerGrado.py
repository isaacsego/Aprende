#estandares definidos de palabras por minuto de tercer grado

ppm = 0

if 0 < ppm < 60:
    print("Status: Requiere apoyo")
elif 60 <= ppm < 84:
    print("Status: Se acerca al estandar")
elif 85 <= ppm < 99:
    print("Status: Estandar")
elif ppm >= 99:
    print("Status: Sobresaliente")
else:
    ppm = 0
    print("Status: Error")