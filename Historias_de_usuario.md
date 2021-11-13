# Historias de usuario de GuifAffinity

- COMO usuario
- QUIERO poder ver los memes más recientes
- PARA reirme un rato

> R1 Muestra los 50 memes más recientes

· _Antecedentes:_
Pablo es un usuario.

**Ejemplo R1:**

- Se muestran los 50 memes más recientes.

- Pablo accede a GuifAffinity. => Se ven los 50 memes más recientes

- [x] Hecho

**Ejemplo R1:**

- No se muestran los 50 memes más recientes.

- Pablo accede a GuifAffinity. => Se muestra un error.
- [x] Hecho

> R1 La longitud de un término de búsqueda para que devuelva resultados es de 3 caracteres

> R2 Serán parte del resultado de búsqueda aquellos memes con etiqueta idéntica al término de búsqueda

> R3 Serán parte del resultado de búsqueda aquellos memes donde la etiqueta coincida parcialmente con el término de búsqueda

> R4 Se ignoran los espacios laterales y los espacios interiores mayores que 1 del término de búsqueda.

> R5 Se ignoran las mayúsculas y minúsculas

> R8a El resultado de búsqueda estará ordenado de más a menos reciente

> R9 Gestión errores de búsqueda

Bonus pack:

> R6 Aquellas palabras declaradas como no permitidas no se usarán para buscar memes

> R7 Dependiendo de las coincidencias que tengan las etiquetas de un meme se le asignará un peso:

- Si el término de búsqueda es idéntico a una etiqueta: +2

- Si una etiqueta coincide parcialmente con el término de búsqueda: +1
  > R8b El resultado de búsqueda estará ordenado de mayor a menor peso primero y de más a menos reciente si el peso es idéntico.

**Ejemplo R1:**

- El término de búsqueda tiene una longitud superior o igual a 3 caracteres.

- Pablo escribe ‘hol’ en el buscador => Se muestran los memes que coincidan con la búsqueda.

**Ejemplo R1:**

- El término de búsqueda es inferior a 3 caracteres.
- Pablo escribe ‘ho’ en el buscador

  => Se le notifica a Pablo que la longitud mínima son 3 caracteres.
  => Se muestran los 50 memes más recientes.

**Ejemplo R2:**

- Se muestran los memes cuya etiqueta coincide exactamente con el término de búsqueda
- Pablo escribe ‘hola’ en el buscador
  => Se devuelven los memes cuya etiqueta coincida exactamente con ‘hola’

**Ejemplo R2:**

- No hay memes cuya etiqueta coincida exactamente con el término de búsqueda
- Pablo escribe ‘hola’ en el buscador
  => Se notifica a Pablo que no se encuentran resultados

**Ejemplo R3:**

- Se muestran los memes cuya etiqueta coincide parcialmente con el término de búsqueda
- Pablo escribe ‘hola’ en el buscador
  => Se devuelven los memes cuya etiqueta coincida parcialmente con ‘hola’
  **Ejemplo R3:**
- No hay memes cuya etiqueta coincida parcialmente con el término de búsqueda
- Pablo escribe ‘hola’ en el buscador => Se notifica a Pablo que no se encuentran resultados

**Ejemplo R4:**

- Se muestran los memes cuya etiqueta coincida sin tener en cuenta los espacios laterales o interiores superiores a 1.
- Pablo escribe ‘ hola hola ’ => Se muestran los memes que coincidan con ‘hola hola’

**Ejemplo R4:**

- los espacios laterales o interiores superiores a 1 no cuentan como caracteres para calcular la longitud de la cadena de búsqueda.
- Pablo escribe ‘···h··’
  => Se le notifica a Pablo que la longitud mínima son 3 caracteres.
  => Se muestran los 50 memes más recientes.

**Ejemplo R4:**

- los espacios laterales o interiores superiores a 1 no cuentan como caracteres para calcular la longitud de la cadena de búsqueda.
- Pablo escribe ‘···h····o····’
  => Se muestran los memes que coincidan con ‘h o’
