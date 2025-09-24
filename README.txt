Sorteo de "Amigo secreto" 
Este proyecto crea un sorteo de "amigo secreto" usando HTML y JavaScript. La aplicación permite añadir una lista de participantes y luego seleccionar uno de ellos de forma aleatoria para revelar el resultado.

¿Cómo funciona?
La aplicación funciona utilizando código JavaScript. Cuando un usuario escribe un nombre y lo agrega, JavaScript lo captura y lo guarda en una lista interna. Esta función se conoce como "array". Luego, el código actualiza la página web, mostrando el nuevo nombre junto a los que ya estaban. Este proceso se repite por cada amigo añadido, manteniendo la lista visible siempre.

Una vez que se agregan los nombres de los amigos, se procede a presionar el botón "Sortear". Aquí, el programa calcula cuántas personas hay en la lista y genera un número aleatorio para usarlo como índice. Con ese número, selecciona al afortunado ganador de la lista y crea un nuevo elemento en la página para anunciar "Tu amigo secreto es...", mostrando el nombre sorteado.

Funciones clave del código_

agregarAmigo(): Se encarga de validar que el campo no esté vacío, tomar el nombre del input y añadirlo a la lista de amigos.

inyectarNombres(): Borra la lista anterior y vuelve a mostrarla en la pantalla cada vez que se añade un nuevo participante. Esto evita nombres duplicados.

sortearAmigo(): Contiene la lógica principal para realizar la selección aleatoria y presentar el resultado final en la pantalla.

Instrucciones de uso
1. Abre el archivo index.html en cualquier navegador web.

2. Ingresa los nombres de los participantes uno por uno usando el campo de texto.

3. Cuando todos estén en la lista, haz clic en el botón "Sortear".

4. Y listo, ¡la aplicación dirá quién te ha tocado!

EL SIGUIENTE ENLACE TIENE UN VIDEO EXPLICATIVO DE LO REALIZADO! https://drive.google.com/file/d/1M5cdxEwCqUfZPy3IpgGFsm036CT3T_jC/view?usp=sharing
