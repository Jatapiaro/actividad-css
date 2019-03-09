# Actividad Hojas de Estilo

Debido al comentario:

> Jacobo, en tu código fuente o incluyes más que una pantalla con un
> encebezado, no aparece la información que se ve en el video. Hace
> referencia a documentos de java script,que no son el tema que se está
> evaluando en este curso. Falto hacer énfasis en los temas vistos.

El cual se me fue hecho en la entrega de la tarea, en la cual, se me fue asignada una calificación de 5, he decidido actualizar este README, pues puede ser que a pesar del grado académico, no sepa leer código, leer instrucciones o ver un video de manera atenta.
A continuación, refutare cada parte del comentario:

# ¿No incluyó más que una pantalla con encabezado y no aparece la información del video?
Como se específica en la sección ahora denominada **Descripción anterior**, hay unas letras en negritas especificando, que para visualizar todo de manera correctamente, se puso un servidor con la página. Si se quisiera correrlo de manera local, existen instrucciones precisas al final de este documento. Esto porque React hace Client Size Rendering en lugar de Server Side Rendering. 
Ahora, en el video que adjunto, exactamente en el minuto [10:00,](https://youtu.be/AguOjUaDg8k?t=601) se dice claramente que de querer abrir el archivo directamente **NO VA A FUNCIONAR**. Ahora si quisiera correrlo así tal cual con un clic, pues bueno:

 1. Instale AMPPS ya trae todo
 2. Abra los archivos de la aplicación AMMP y busqué la carpeta www
 3. Ponga la carpeta del código
 4. Entre a `public` y de clic en `index.html` y funcionará (ya trae el `.htaccess` para que funcione y lo trajo desde su entrega)

Si no es el caso, simplemente vaya al final de este README y encontrará la forma de correrlo usando webpack.

# Hace  referencia a documentos de javascript que no son el tema que se está  evaluando en este curso.
Precisamente por eso hice el video, porque sabía que podría traer problemas. Desde que escuche decir que usted usaba Bootstrap y no Webpack, me dio a entender que desconoce muchas cosas actuales sobre desarrollo. Así que por eso hice el video, para que viera que ahí hay HTML, que hay Javascript pero que lo importante seguían siendo el CSS. Para eso se hizo el video, para que no se dijera que no hay nada de contenido HTML, y para enfatizar que aunque había JS, lo importante era CSS. Parte de hacerlo así es separar los archivos, tener un mejor orden, y no importar un montón de archivos a un documento.**Así que sí, se que JS no es el tema de esta clase aunque se llame "Lenguajes", pero lo que se pidió CSS está ahí**. A fin de cuentas, yo sabía que JS no se iba a evaluar, solo expliqué como se había usado y ya, si es una tarea de CSS, pues se leen los estilos de CSS. 

> ¿no?

# Falto hacer énfasis en los temas vistos.
Bien, ya que se habla de que falto hacer énfasis en los temas vistos, iremos paso a paso, presentación por presentación. Y descubriremos juntos, si se hizo énfasis o no.
> ¿no?

## Sesión_10.pdf
Comenzaremos por la sesión 10. Donde habló de los editores de texto. Yo ocupe **VS Code**, así que considero que el siguiente criterio de evaluación de la tarea, fue satisfactorio:

> Se valorará el uso adecuado de editores de texto como pueden ser:
> Notepad++, Sublime Text, CoffeCup Free Editor o hasta el mismo blog de
> notas.

¿Me pregunto qué habría pasado si todo lo hubiera hecho con **vi**? ¿Me habría ido peor?

Pero hagamos **énfasis** en los temas vistos:

### Etiquetas de HTML
 Tenemos muchos, empezando por todo lo que hay dentro de `src/components` y `src/pages` |
### Estructura de HTML 
Tan solo revise `public/index.html`
### HTML5
A fin de cuentas escribí HTML5, lo que sabía de HTML aplicaba en react salvo porque `class` en los tags debe cambiarse a `className` 
### DOCTYPE 
Tan solo revise `public/index.html`
### Atributos
Atributos globales como id, se pueden encontrar en `public/index.html`, en la línea 12, con el contenido `<div id="app"></div>`. 
Otro ejemplo esta en `src/components/Navbar.js` en la línea 25 y con contenido `<input type="checkbox" id="menuButton"/>`. 
Atributos `class` hay muchísimos, revise `src/components` y `src/pages`. 
Otros atributos como meta están en `public/index.html` en la línea 5 y 6 con contenido:

    <meta charset="UTF-8*">
    <meta name="viewport" content="width=device-width, initial-scale=1">
### Etiquetas de HTML 
Tenemos muchos, empezando por todo lo que hay dentro de `src/components` y `src/pages`

### Reglas de estructura

 1. Etiquetas de cierre automático. Si hay, en `components/navbar.js` de las líneas 20-21 están `<span /><span /><span />`
 2. Etiquetas insensibles a mayúsculas o minúsculas: Irrelevante pero están en minúsculas
 3. Atributo de manifiesto: no hay en el proyecto.

### HEAD
Pues si, hay un HEAD en `public/index.html`, que contiene un 

 1. Título
 2. Meta
 3. Link

Lo que no tiene es un Script, porque generalmente se cargan al final. Tampoco tiene un style porque se ve cochino. Y no tiene un base.

### Title
De nuevo: `public/index.html` línea 7 `<title>Actividad CSS</title>`

### Meta
De nuevo: `public/index.html` línea 5 y 6 :

    <meta charset="UTF-8*">
    <meta name="viewport" content="width=device-width, initial-scale=1">

### HTTP-EQUIV 
No hay, lo acepto

### Script
De nuevo: `public/index.html` línea 13 `<script charset="utf-8" src="./bundle.js"></script>`

### Link
De nuevo: `public/index.html` línea 8 `<link rel="stylesheet" type="text/css" href="./styles.css"/>`

### Style 
No hay, que cochino poner styles así.

### Elemento base
No hay

### Secciones, encabezados y encabezado y pie de página
Esto ya se volvió tedioso, así que vamos a acelerarlo un poco.

 1. Secciones, puede encontrar un claro ejemplo de esto en `src/components/Card.js`
 2. Encabezados, puede ver `src/pages/*.js` -> `<h1>Guardianes de la galaxia</h1>`
 3. Encabezado: `src/components/navbar.js`
 4. Pie de página `src/components/footer.js`

### Blockquote
No hay

### Details
No hay

### Figure
No hay

### Agrupando elementos
Pues no hay ningún `<pre />`, ni `<ul>`, u `<ol>` ni `<cite />` De ahí en fuera si hay lo demás. 
Digo, si no se iban a ocupar pues como que no había que meterlos con calzador. En dado caso hubiera especificado **Quiero los siguientes elementos: **.

> ¿No?

Además hicimos una tarea de posibles elementos a usar, no siempre se deben usar todos:
> ¿No?

### Conclusión de Sesión_10.pdf
**No me pondré un 100%, pero digamos que entre el 85% - 90% de lo que se habla en esta presentación, esta presente en la tarea**

## Sesión_11a.pdf

### Formato en algunas palabras
Ok en `src/components/Cards.js` línea 33 `<b> Personajes del cómic: </b>`. 

### Selectores
Como los que muestra tenemos muchísimos, por ejemplo:
De la línea 8 a la 17 de `src/styles/base/_base.css` tenemos:

    body {
	    background-color: #212121;
	    color: #fff;
	    font-family: 'Poppins', sans-serif;   
	    font-size: 16px;
	    height:100%;
	    letter-spacing: 2px;
	    margin:0;
	    padding:0;
    }
¿Sigue sin ser suficiente?

En `src/styles/components/_footer.css` en la línea 13 a la 14:

    .footer  >  p {
	    margin-left: 5%;
    }
Y si quiere ver más revise todo `src/styles/components/_card.css`, ahí encontrará muuuuchos.

### Unidades
Solamente use las relativas y los pixeles.

    body { 
        font-size: 16px;
    }
Y ya todo lo demás sería relativo a esto.

### Viewport
En `public/index.html` en la línea 6 `<meta name="viewport" content="width=device-width, initial-scale=1">`

### VM y otras medidas
En `src/styles/components/_navbar.css`:

    .nav  >  #menuButton:checked  +  .nav-links {
	    height: calc(100vh  -  50px);
	    overflow-y: auto;
    }

### Uso de %
Hay muchos ejemplos, uno de ellos en `src/styles/components/_banner-image.css`: 

    .banner-image {
	    height: auto;
	    max-height: 475px;
	    width: 100%;
    }

### Color
Ni se diga, busque, hay muchos. En cada archivo de `src/styles` hay al menos uno.

### Padding y margin
Igual, hay muchos , si bien no se ocuparon al mismo tiempo, existen.
En `src/styles/base/_base.css`:

    body {
	    margin:0;
	    padding:0;
    }
En `src/styles/components/_card.css` hay muchos ejemplos, si bien no se uso directo `margin`, se ocupo cosas como `margin-top` o `margin-bottom.`
De los paddings ni se diga hay en `src/styles/components/_card.css`, `src/styles/base/_base.css` y `src/styles/components/_navbar.css`

### Haciendo énfasis en un provedor

No hay

### Archivos de hojas de estilo
Todo lo que hay en `src/styles` más el generado en `public/styles.css`.

### Selectores

 1. De atributo no hay ningúno
 2. De elemento si hay, muchos en `src/styles/components/_card.css`.
 3. De clase, hay un montón en todo `src/styles`
 4. De id, hay en `src/styles/components/_navbar`, revise la línea 51 por ejemplo, `.nav  >  #menuButton`.
 5. Selectores de pseudoclase, hay muchos, por ejemplo en `src/styles/components/_card.css` línea 106 `.card:hover`.
 6. Y de los siguientes hay algunos como :first-child.

### Conclusión de Sesión_11a.pdf
Así que de nuevo podemos decir que de esta sección entre el **90%-95 ** de lo visto en clase estuvo presente.

## Sesión12Unir.pdf

### Span 
Si hay span, lamento decírselo pero en `src/components/Card.js` en la línea 15-16.

    <span class="tooltiptext">
	    {`${c.name}: ${c.description}`}
    </span>

### Modelo de caja
Pues la clase `src/styles/components/_card.css` me parece un ejemplo perfecto de lo que es un modelo de caja. 
Si bien el box-sizing se uso solo en `src/styles/base/_base.css`, se uso.

### Organización de contenidos
Si aquí se refería al uso de `display`, pues `src/styles/components/_navbar.css` tiene muchos ejemplos de esto, donde se usa `inline`, `inline-block`, `none`.

### Alinear elementos con diferentes atributos. 
Pues me parece que si está, el ejemplo son algunos paddings y eso.

### Selector element > element
Realmente no lo use como tal, pero hay muchos ejemplos de `.classA > .classB > p`

### Float
Hay ejemplos en

`src/styles/components/_navbar.css`, en la línea 34-37:

    .nav  >  .nav-links {
        display: inline-flex;
        float: right;
    } 

`src/styles/components/_card.css`, en la línea 80-88:

    .card > .info > .heroes-info > .character-info:nth-child(odd) > img {
        float: left;
        margin-right: 10px;
    }
    
    .card > .info > .heroes-info > .character-info:nth-child(even) > img {
        float: right;
        margin-left: 10px;
    }

### Clear
No se uso

### nth-of-type
En `src/styles/components/_card.css` de la línea 80-87

    .card > .info > .heroes-info > .character-info:nth-child(odd) > img {
        float: left;
        margin-right: 10px;
    }
    
    .card > .info > .heroes-info > .character-info:nth-child(even) > img {
        float: right;
        margin-left: 10px;
    }

### Conclusión de Sesión12Unir.pdf
**De esta presentación no podemos dudar que del 97%-98% de lo que se mostró está presente.**


## Descripción anterior
Este repositorio esta hecho para la tarea de hojas de estilo. Recomiendo leer este documento en su totalidad, pues ayudará a comprender cómo se realizó. **Como aclaración importante, para poder visualizar correctamente todo se puso en un servidor la página. En dado caso de querer correrlo localmente, hasta abajo hay instrucciones de como hacerlo.**

[Link a la página](http://actividadcss.totoringo.com/)

O en dado caso de no querer leer, favor de revisar el siguiente [vídeo](https://youtu.be/AguOjUaDg8k).

## Se utilizó ReactJs

Es decir, hay un documento HTML en `public/index.html` el cual tiene un `div` que funge como nuestro template para hacer el render de todo el contenido. Como se puede apreciar,  se enlaza en dicho documento el archivo de hojas de estilo. Además se enlaza el archivo `.js` que es el que hace todo el render del contenido.
Use react para solo tener un archivo de `html` y sobretodo para ejemplificar mejor las hojas de estilo, pues cada componente tiene su hoja de estilo. Para hacer esto, utilice `webpack` teniendo archivos independientes para cada componente y al finar unirlos en un solo `.css` de producción. 
En la sección de abajo explicó el uso de `webpack`.


## Uso de Webpack.

Webpack nos ayuda a no tener cientos de archivos en un documento `.html`. Es decir, en lugar de hacer varias llamadas a distintas hojas de estilo o scripts; hacemos un compilado de todo lo que necesitamos en un solo archivo.
De esta forma tengo un documento `.css` con todo lo que necesito y un `.js` con todo lo que se necesita.
Por lo tanto, dentro de `src` creamos todo nuestro código y en la configuración de `webpack.config.js` le decimos cual es el archivo de entrada con todo lo que necesitamos, y en dónde va a colocar posteriormente el archivo de producción. Es por eso que nos genera el archivo `bundle.js` en la carpeta `public`. 
Podemos definir a `public` como la carpeta donde va el contenido de producción.
Sin embargo, ¿cómo leemos el archivo css?...bueno, lo explicó en la siguiente sección.

## Como leer el archivo .css

Si no hubiéramos utilizado ninguna librería externa, el archivo `styles.css` que esta dentro de nuestra carpeta `public` sería tal cual todos nuestros estilos. Sin embargo, yo utilice una librería [Normalize.css](https://necolas.github.io/normalize.css/) la cual, únicamente nos ayuda a corregir estilos para que todo lo que hagamos sea lo más consistente entre todos los navegadores, pero no nos brinda plantillas o estilos ya hechos.
**Yo revise el archivo `public/styles.css` y encontré que a partir de la línea `352` el código es todo lo que yo cree.  Todo lo anterior a esa línea es de `normalize.css`. Excepto por las dos primeras líneas, que son los imports de las fuentes que utilice.**
Por lo tanto, todo el código de `css` por separado está en la carpeta `src/styles`.
En dicha carpeta tenemos varios componentes para organizarnos mejor.

 1. Base: En esta carpeta se suele poner lo que se va a usar en todo el proyecto. Lo más general, como las fuentes, cuestiones del `body`, `html` o las fuentes. Si estuviéramos trabajando con `.scss` , este también sería el lugar para un archivo de variables.
 2. Components: En esta carpeta definimos en un archivo por separado cada uno de nuestros componentes. Por ejemplo un archivo para que solo tenga el estilo del navbar, otro que solo tenga el estilo de una tarjeta, etc.
 3. `styles.css`: El archivo principal. Aquí juntamos todos los archivos de todas las carpetas en uno solo. Realmente aquí solo hacemos imports, no declaramos ningún código. Por lo que en él se declaran los imports de librerías externas, así como de todos los archivos dentro de base y de components en el orden correcto.
 
 Ahora bien, este archivo de styles, es el que se toma como entrada y se genera finalmente en `public/styles.css`.
Para leer el código podemos ir a `src/styles` e ir checando en cada carpeta el código de cada componente. De igual forma, al hacer todo con `ReactJS`, me permitió crear componentes pequeños. Y como podrá darse cuenta hay una relación entre `src/components/SomeFile.js` con su estilo en `src/styles/componentes/_some-file.css`. 

En la siguiente sección explico más de que hice para la página y porqué use `React`

## ¿Por qué use React?

La página que hice toma datos de internet. Originalmente los iba a tomar en tiempo real pero el API de marvel solo permite 3000 peticiones al día, por lo tanto solo hice las que necesitaba, procese la información y coloque el JSON que necesitaba en otro lado. Con `React` puedo crear mini componentes a los cuales solo pasarles la información con las que se van a llenar, y en una iteración de los datos, generar cada elemento para ser desplegado. De esta forma el código queda más pequeño y legible, permitiendo reutilizar mucho código.

En la carpeta `public` quedó un archivo `.htaccess`, esto porque React hace `Client Side Rendering`, entonces para que apache pueda utilizar el router de `React` se agregó dicho archivo.

Sin embargo, si aún quedan dudas, en la sección de abajo dejo un pequeño video.

## Video del proyecto y explicación

[![Vídeo explicación](https://img.youtube.com/vi/AguOjUaDg8k/1.jpg)](https://youtu.be/AguOjUaDg8k)

# Como instalar

 1. Instalar node
 2. Instalar yarn `npm i yarn -g`
 3. Descargar el proyecto con `git clone https://github.com/Jatapiaro/actividad-css`
 4. Entrar en la carpeta del proyecto `cd actividad-css`
 5. Dentro de la carpeta del proyecto instalar los módulos necesarios `yarn install`
 6. Correr con  `yarn serve`


