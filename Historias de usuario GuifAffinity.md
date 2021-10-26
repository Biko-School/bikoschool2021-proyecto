# Historias de usuario de GuifAffinity

## Historias

### Historia 1
COMO usuario
QUIERO poder ver los memes más recientes
PARA reírme un rato

R1: Muestra los 50 memes más recientes
* Ejemplo 1: "Devuelve 50 memes"
   * Juan entra en la página
   * Hay 50 memes
   * => Se muestran 50 memes
* Ejemplo 2: "Devuelve menos de 50 memes"
   * Juan entra en la página
   * Hay 49 memes
   * => Se muestran 49 memes
* Ejemplo 3: "Devuelve los 50 memes más recientes"
   * Juan entra en la página
   * Hay 51 memes
   * => Se muestran los 50 memes más recientes

### Historia 2
COMO usuario
QUIERO poder buscar memes que me interesan
PARA usarlos en mis redes sociales

R1: La longitud de un término de búsqueda para que devuelva resultados es de 3 caracteres que no sean espacios.
* Ejemplo 1: "El término de búsqueda tiene al menos 3 caracteres"
   * Juan busca por "sol"
   * => La búsqueda devuelve un resultado
* Ejemplo 2: "El término de búsqueda tiene menos de 3 caracteres"
   * Juan busca por "la"
   * => No se ejecuta la búsqueda

R2: Serán parte del resultado de búsqueda aquellos memes con etiqueta idéntica al término de búsqueda.
* Ejemplo 1: "El término de búsqueda coincide con al menos una etiqueta"
   * Juan busca por "sol"
   * Hay un meme con la etiqueta "sol" y otro con la etiqueta "luna"
   * => La búsqueda devuelta tiene memes que contienen la etiqueta "sol"
* Ejemplo 2: "El término de búsqueda no contiene etiquetas existentes"
   * Juan busca por "laringólogo"
   * No hay ninguna etiqueta "laringólogo"
   * => La búsqueda devuelta está vacía

R3: Serán parte del resultado de búsqueda aquellos memes donde la etiqueta coincida parcialmente con el término de búsqueda.
* Ejemplo 1: "El término de búsqueda coincide parcialmente con al menos una etiqueta"
   * Juan busca por "sol"
   * Hay un meme con la etiqueta "sol" y otro con la etiqueta "soleado"
   * => La búsqueda devuelta tiene memes que contienen la etiqueta "sol" y "soleado"
* Ejemplo 2: "El término de búsqueda no coincide parcialmente con ninguna etiqueta"
   * Juan busca por "soli"
   * Hay un meme con la etiqueta "sol" y otro con la etiqueta "soleado"
   * => La búsqueda devuelta está vacía

R4: Se ignoran los espacios laterales y los espacios interiores mayores que 1 del término de búsqueda.
* Ejemplo 1: "El término de búsqueda no tiene espacios"
   * Juan busca por "sol"
   * Hay un meme con la etiqueta "sol" y otro con la etiqueta "soleado"
   * => La búsqueda se ejecuta con el término de búsqueda "sol"
* Ejemplo 2: "El término de búsqueda tiene espacios laterales y 1 caracter que no es espacio"
   * Juan busca por " o "
   * Se ignoran los espacios laterales del término de búsqueda
   * Por tanto, el término a buscar es "o", que tiene menos de 3 caracteres
   * => La búsqueda no se ejecuta
* Ejemplo 3: "El término de búsqueda tiene 2 espacios interiores y 2 caracteres que no son espacios"
   * Juan busca por "e  a"
   * Los dos espacios interiores cuentan como 1
   * Por tanto, el término a buscar es "e a", que tiene 2 caracteres que no son espacios
   * => La búsqueda se ejecuta

R5 Se ignoran las mayúsculas y minúsculas

Bonus pack:

R6 Aquellas palabras declaradas como no permitidas no se usarán para buscar memes

R7 Dependiendo de las coincidencias que tengan las etiquetas de un meme se le asignará un peso:
   * Si el término de búsqueda es idéntico a una etiqueta: +2
   * Si una etiqueta coincide parcialmente con el término de búsqueda: +1

R8a El resultado de búsqueda estará ordenado de más a menos reciente

R8b El resultado de búsqueda estará ordenado de mayor a menor peso primero y de más a menos reciente si el peso es idéntico.

## Glosario

* Meme: objeto compuesto de imagen, fecha y tags
* Término de búsqueda: texto a buscar
