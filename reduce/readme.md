# Reduce

Vamos a ver algunos ejemplos que nos permitan ir un poco mas allá de una definición. En la documentación de [mozilla](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce) la función **reduce()** es definida de la siguiente manera:

**El método reduce() aplica una función a un acumulador y a cada valor de una array (de izquierda a derecha) para reducirlo a un único valor.**

Más claro imposible, con esto terminamos el escrito y estoy seguro ya te sentirás un maestro usando la función **reduce()**. Bueno, en realidad la primera vez que leí este concepto no lo entendí. Soy honesto, quizás mi coeficiente intelectual no esta la altura, pero en fin, mis felicitaciones a todos aquellos que con solo leerlo ya saben que hacer.

Para todos aquellos que se identifican conmigo vamos a ver unos ejemplos que nos permitan entender más a fondo como emplear esta función. El primero de ellos el más clásico de los ejemplo:c

```jsx
const suma = [10,20,30].reduce((a,b) => a * b);
console.log(suma); // 60
```

Lo que intentamos hacer es sumar todos los elementos de una array y retornar el total de la suma. Podemos observar que el método **reduce()**, puede ser implementado directamente al array, luego dentro del array voy a invocar a una función que se encargara de procesar la tarea a realizar.

La función utilizada dentro de reduce es el equivalente en ES6 de:

```jsx
const suma = [10, 20, 30].reduce(function(a, b){return a + b});
```

**(a, b)** son los parámetros que recibe la función, es nuestro ejemplo a = 10 y b = 20. Nuestra función retorna la suma de ambos, es decir 30. Debido a que existen más elementos en el array, la función **reduce()** es invocada nuevamente, la diferencia radica en que el **parámetro** “**a”** ahora es igual a 30 (representa el monto acumulado) y **“b”** es el elemento restante en el array, es decir 30. Al concretarse la operación el resultado que será mostrado en consola es ahora igual a **60**.

En el ejemplo siguiente voy a mostrar como podemos contar la cantidad de nombres repetidos en un aula de clase.

```jsx
const nombres = ["Jorge", "Maria", "Jose", "Bob", "Pat", "Maria", "Jose", "Jose"];
const cantidadNombres = nombres.reduce((contantadorNombre, nombre) => {
	contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
	return contadorNombre;
},{})

console.log(cantidadNombres); 
// { Bob: 1, Jorge: 1, Jose: 3, Maria: 2, Pat: 1}
```

En el código anterior tenemos un array de nombres. Para lograr contarlos, llamo a la función **reduce()**  y dentro de ella paso una función como parámetro que a su vez recibirá  ****sus propios parámetros **(contadorNombre, nombre)**, **nombre** representa cada elemento del array y **contadorNombre** será una objeto donde guardaré la cantidad de veces que un nombre se repita. A diferencia del ejemplo anterior donde retornábamos un array, aquí el resultado será un objeto, por lo tanto a la función **reduce**, debo pasarle un parámetro más, que en este caso es un objeto vacío y representa el **estado inicial** de mi contador de nombres.

Cuando la función se ejecuta, seria algo como esto:

```jsx
// Primera ejecución
1.- contadorNombre = {} // Objecto vacío
2.- nombre = Jorge // Primer elemento del array
3.- {Jorge: 1}
4.- Se retorna el objecto existen -> {Jorge: 1}
5.- contadorNombre = {Jorge: 1} // Se repite el ciclo
```

En un ultimo ejemplo vamos a usar lo que se conoce como las **pipe functions**, donde básicamente lo que se hace es llamar a una función, retornar una valor y pasarlo nuevamente a otra función, algo así como encadenar varias funciones a la vez.

```jsx
const suma = (num) => num + 1;
const dobla = (num) => num * 2;
const triplica = (num) => num * 3;

const _pipe = (f, g) => (...args) => g(f(...args));
const pipe = ( ...fns) )> fns.reduce(_pipe);

const funcionesMixtas = pipe(dobla, suma, triplica);
const resultado = funcionesMixtas(3);
console.log(resultado); // 21
```

Los primero que hago es definir tres funciones básicas que me permiten hacer operaciones matemáticas (sumar y multiplicar). Luego, defino una función que recibe dos funciones como parámetros las cuales son pasadas a una nueva función. Los funciones son pasadas como argumentos usando el operador spread de ES6 y son invocadas una dentro de la otra.

```jsx
const _pipe = (f, g) => (...args) => g(f(...args));
const ejemplo = _pipe(suma, dobla);
const resultadoEjemplo = ejemplo(3); 
console.log(resultadoEjemplo); // 8
```

1. Paso las funciones suma y doble a la función _pipe(),
2. Luego estas serán pasadas una a una y luego invocadas.
3. Primero se invoca suma y retornará 3 + 1 = 4
4. El valor de 4 será pasado a la siguiente función, en nuestro caso **dobla()**
5. El resultado será 4 * 2 = 8

Esto funciona muy bien para dos funciones, pero mi objetivo es aplicar el mismo procedimiento a multiple funciones. Aquí es donde la función **reduce()** es útil. En la imagen de arriba, podemos ver que en la línea 6 contamos con el siguiente código:

```jsx
const pipe = (...fns) => fns.reduce(_pipe);
```

Con esto nos aseguramos que podemos pasar cualquier cantidad de funciones **(…fns)**, las cuales serán ejecutadas dentro de **_pipe()** y su valor será retornado y posteriormente pasado a la siguiente función en la lista de argumentos en **(…fns)**. Con esto logramos la meta ya que si creamos lo siguiente función:

```jsx
const funcionesMixtas = pipe(dobla, suma, triplica);
```

Y posteriormente la invocamos con un número cualquiera:

```jsx
const resultado = funcionesMixtas(3)
```

Lo que sucederá es que primero, se invocará a la función **dobla** (3 * 2 = 6). Se pasará el valor a la siguiente función, en nuestro ejemplo es **suma** (6 + 1) y por ultimo se invocará a la tercera función que se encargara de **triplicar** el resultado (7 * 3 = 21).

## Conclusión

La función **reduce()** permite lograr objetivos que generalmente de manera estructurada cuestan un poco de trabajo lograr. El dominio de este tipo de funciones nos permitirán logra una código más limpio y mucho más fácil de leer. Es cierto que a veces vemos ejemplos que por su complejidad parecen muy difíciles de replicar o aprender, en todo caso te invito a seguir practicando y poco a poco te aseguro que lograrás comprender hasta el mas complejo de los ejemplos, después de todo como dicen por allí, **la práctica hace al maestro**.

---

## **Las bondades del método reduce() en JavaScript**

`reduce()` es un método bastante peculiar, ampliamente usado pero al mismo tiempo incomprendido por las comunidades de desarrollo. Junto con `map()` y `filter()` completan lo que me gusta denominar como la **Trinidad de los métodos JavaScript**.

En este pequeño post trataré de resumir y explicar las principales características del método `reduce()` con ejemplos prácticos.

Al igual que `map()` y `filter()`, `reduce()` itera sobre un arreglo dado.

## ****Sintaxis****

```jsx
array.reduce( (acc, item, index, arr)=>{
//cuerpo de la funcion
}, inicilizador del acumulador)
```

`reduce()` recibe un callback con 4 parámetros:

- **acc**: variable acumuladora donde se almacenarán valores parciales en cada iteración del arreglo.
- **item**: elemento actual del arreglo que se itera.
- **index**: posición del elemento anterior mencionando.
- **arr**: arreglo como tal, sobre el cual se trabaja.

En la práctica, casi para cualquier caso se uso se acostumbra solo usar la variable `acc` e `item`, por lo que una sintaxis más resumida se vería de la siguiente manera:

```jsx
array.reduce( (acc, item)=>{
//cuerpo de la funcion
}, inicilizador del acumulador)
```

*El inicializador del acumulador se explicará a detalle con los ejemplos practicos.*

## ****Características de reduce()****

- `reduce()` reduce (valga la redundancia) el arreglo a un solo valor, en otras palabras, devolverá un solo valor.
- Ejecuta un callback para cada elemento del arreglo.
- El valor de retorno de la función se almacena en una variable acumuladora (`acc`).
- No se ejecuta en arreglos vacíos.
- Es inmutable, no altera ni modifica el arreglo original.

Basta de conceptos teóricos, ahora analicemos ejemplos prácticos:

Imaginemos que tenemos un array de números y deseamos sumar todos sus valores, podríamos usar `reduce()` de la siguiente manera:

```jsx
let numeros =[2,9,7,16,3,78];
let suma = numeros.reduce((acc,numero) => acc + numero);
console.log(suma);
//salida: 115
```

Expliquemos a detalle que sucedió acá:

Al no usar un valor de inicialización, `acc = 2`, por ser el primer elemento de nuestro arreglo.La iteración del arreglo, por ende, comenzará desde el index 1, osea, el número 9: `numero = 9`La siguiente tabla explica el flujo del programa:

| Iteración | acc | numero | acc + numero |
| --- | --- | --- | --- |
| 1ra iteración | 2 | 9 | 11 |
| 2da iteración | 11 | 7 | 18 |
| 3ra iteración | 18 | 16 | 34 |
| 4ta iteración | 34 | 3 | 37 |
| 5ta iteración | 37 | 78 | 115 |

Analizando iteración a iteración se comprende mucho mejor de donde sale el resultado final.

Veamos otro ejemplo:Imaginemos que tenemos un arreglo de objetos que contienen pedidos de comida, entonces el chef nos pide que le indiquemos cuantos son los pedidos cuyo plato principal sea "sajta", ¿cómo podríamos hacer esto con `reduce()`? El arreglo de objetos es el siguiente:

```jsx
let pedidos = [
  {entrada:'ensalada de pepinos', principal: 'sajta', postre: "platano"},
  {entrada:'ensalada de tomates', principal: 'silpancho', postre: "helado"},
  {entrada:'ensalada simple', principal: 'sajta', postre: "yogurt"},
  {entrada:'ensalada simple', principal: 'anticucho', postre: "yogurt"},
  {entrada:'ensalada de tomates', principal: 'sajta', postre: null}
];
```

*La sajta es un plato típico boliviano elaborado en base a pollo, ají, papas, y salsa*

Una posible solución es la siguiente:

```jsx
let cantidadSajta = pedidos.reduce((contador,pedido)=>{
  if(pedido.principal === "sajta")
    return contador+1;
  else
    return contador;
},0)
console.log(cantidadSajta); //salida: 3
```

Podemos observar que en este ejemplo si escribimos una inicialización para la variable contador que es 0, (`contador = 0`). Esto hace que el iterador recorra el arreglo desde el índice 0 y no desde el índice 1 como vimos en el anterior ejemplo.

## ****Encontrar el mínimo o máximo****

Los métodos `min()` y `max()` de Math usadas con `reduce()` facilitan encontrar el mínimo y máximo en un arreglo de números:

```jsx
let numeros =[8,3,7,9,4,0];
const max = numeros.reduce((acc,numero) => Math.max(acc,numero))
console.log(max); //salida: 9
```

```jsx
let numeros =[8,3,7,9,4,0];
const min = numeros.reduce((acc,numero) => Math.min(acc,numero))

console.log(min); //salida: 0
```

## ****Trabajar con arreglos anidados****

Imaginemos que contamos con un arreglo anidado y necesitamos convertirlo en un arreglo plano.

```jsx
let numeros =[1,2,[3,4,5],6,7,[8],[9,10]];
const planos = numeros.reduce((acc,item) =>{
  return acc.concat(item)
},[]);

console.log(planos);
//salida: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## ****Conclusiones****

- `reduce()` itera y compara cada elemento de un arreglo, aplicando un callback y devolviendo un solo valor.
- El callback recibe 4 parámetros pero en la práctica solo usamos 2: `acc` e `item`.
- Es un método inmutable.

## Caso Práctico nº 1

Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. `[12, 3, 11, 5, 7]`. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, **si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.**

Crea un programa que le diga **la suma más alta de regalos** que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

```jsx
const getMaxGifts = (giftsCities, maxGifts, maxCities) => {
  return giftsCities
    .sort((cityGiftsA, cityGiftsB) => cityGiftsB - cityGiftsA)
    .reduce((m, g) => {
      if (maxCities !== 0 && m + g <= maxGifts && m + g !== maxGifts - 1) {
        maxCities -= 1;
        m += g;
      }
      return m;
    }, 0);
};

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

getMaxGifts(giftsCities, maxGifts, maxCities); // 20 (12 + 3 + 5)

getMaxGifts([12, 3, 11, 5, 7], 20, 3); // 20
getMaxGifts([50], 15, 1); // 0
getMaxGifts([50], 100, 1); // 50
getMaxGifts([50, 70], 100, 1); // 70
getMaxGifts([50, 70, 30], 100, 2); // 100
getMaxGifts([50, 70, 30], 100, 3); // 100
getMaxGifts([50, 70, 30], 100, 4); // 100
```

A tener en cuenta:

- `maxGifts >= 1`
- `giftsCities.length >= 1`
- `maxCities >= 1`
- El número de `maxCities` puede ser mayor a `giftsCities.length`

## Caso Práctico nº 2

El día se acerca y Papá Noel tiene el almacén de juguetes hecho un desastre. Ayúdale a ordenar los juguetes en el almacén para que pueda encontrarlos más fácilmente.

Para ello, nos dan dos arrays. El primero es un **array de juguetes**, y el segundo es un **array de números que indican la posición de cada juguete en el almacén**.

Lo único a tener en cuenta es que **las posiciones pueden no empezar en 0**, aunque siempre serán números consecutivos y de forma ascendente.

Tenemos que **devolver un array donde cada juguete esté en la posición que le corresponde**.

```jsx
const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

sortToys(toys, positions)
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

sortToys(moreToys, morePositions)
// ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
```

## **A tener en cuenta**

- Siempre habrá el mismo número de juguetes que de posiciones.
- Ni los juguetes ni las posiciones se repiten.

## Solución

```jsx
function sortToys(toys, positions) {
	const minPosition = Math.min(...positions);

	return toys.reduce((orderedToys, toy, index) => {
    orderedToys[positions[index] - minPosition] = toy;
    return orderedToys;
  }, []);
}
```