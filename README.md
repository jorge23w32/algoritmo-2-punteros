# 🎉 Algoritmo 2 Punteros

## 🍽️ Problema: Encuentra los Invitados que Pueden Sentarse Juntos

Tienes una lista de invitados ordenada alfabéticamente, y tu tarea es organizar la mesa para una cena. Sin embargo, algunos invitados prefieren sentarse junto a personas cuyo nombre empieza con la misma letra que el suyo.  
**🎯 Objetivo:** encontrar el primer par de invitados consecutivos que puedan sentarse juntos según este criterio.

---

## 📋 Instrucciones para resolver el problema

1. 🔢 Usa un puntero al inicio del arreglo y otro al siguiente elemento.  
2. 🔍 Compara las iniciales de los nombres en las posiciones de ambos punteros.  
3. ✋ Si coinciden, detén la búsqueda y devuelve esos dos nombres.  
4. ▶️ Si no coinciden, avanza ambos punteros (uno paso adelante cada uno) y repite la comprobación.  
5. ⏹️ Si llegas al final de la lista sin encontrar un par, devuelve un resultado vacío o un mensaje indicando que no hay coincidencias.

---

## 💻 Ejemplo de código

Puedes comenzar tu solución consultando este extracto de código de ejemplo:  
🔗 https://gist.github.com/heladio-devf-mx/e091e8dba47d51693cec1154f1cd2ed6

```js
const invitados = ['Ana', 'Beatriz', 'Carlos', 'Camilo', 'David'];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        // Si coinciden, devuelve el par
        // ...

        // TODO: Avanza los punteros si no coinciden
        // ...
    }

    return null; // Si no se encuentra ningún par
}
```

---

## 🏁 Ejecución y Resultado Esperado

```js
const invitados = ['Ana', 'Beatriz', 'Carlos', 'Camilo', 'David'];
console.log(encontrarPareja(invitados));
// ➞ ['Carlos', 'Camilo']
```

---

¡Buena suerte y disfruta implementando tu solución con el enfoque de dos punteros! 🚀  
