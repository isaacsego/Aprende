#definir una funcion para contar las palabras de un texto
#tratar de no hacer uso los archivos dentro de esta Carpeta

texto = ("Cuando un animal o una planta deja de vivir, usualmente no queda rastro de él, "
         "ya sea por otro animal que lo come o por pudrirse en el suelo o en el agua. "
         "Pero a veces el animal o planta es enterrado en arena o lodo antes de ser destruido. "
         "Cuando eso sucede y las condiciones son adecuadas, la forma del animal o planta se conserva como fósil.")

def contar_palabras(texto):
    # Convertir el texto a minúsculas
    texto = texto.lower()
    # Dividir el texto en palabras
    palabras = texto.split()
    # Contar las palabras
    contador = len(palabras)
    return contador

# Llamar a la función y mostrar el resultado
resultado = contar_palabras(texto)
print(f"El texto contiene {resultado} palabras.")
