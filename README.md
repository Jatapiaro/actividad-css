

# Actividad Hojas de Estilo

Debido al comentario:

> Jacobo, en tu código fuente o incluyes más que una pantalla con un
> encebezado, no aparece la información que se ve en el video. Hace
> referencia a documentos de java script,que no son el tema que se está
> evaluando en este curso. Falto hacer énfasis en los temas vistos.

El cual fue puesto como comentario en la entrega de la tarea y en la que se me fue asignada una calificación de 5. He decidido actualizar este README, pues puede ser que no haya sabido leer todo el código que hay, leer instrucciones o ver un video de manera atenta.
A continuación, refutare cada parte del comentario:

# ¿No incluyó más que una pantalla con encabezado y no aparece la información del video?
Como se específica en la sección ahora denominada **Descripción anterior**, hay unas letras en negritas especificando, que para visualizar todo de manera correctamente, se puso un servidor con la página. Si se quisiera correrlo de manera local, existen instrucciones precisas al final de este documento. Esto porque React hace Client Side Rendering en lugar de Server Side Rendering. 
Ahora, en el video que adjunto, exactamente en el minuto [10:00,](https://youtu.be/AguOjUaDg8k?t=601) se dice claramente que de querer abrir el archivo directamente **NO VA A FUNCIONAR**. Ahora si quisiera correrlo así tal cual con un clic, pues bueno:

 1. Instale AMPPS ya trae todo
 2. Abra los archivos de la aplicación AMMPS y busqué la carpeta www
 3. Ponga la carpeta del código en la carpeta www
 4. En la interfaz de AMMPS de clic en el icono del Mundo
 5. Navegue a `el_proyecto/public/index.html`
 6. Funcionará (ya trae el `.htaccess` para que funcione y lo trajo desde su entrega)

Si no es el caso, simplemente vaya al final de este README y encontrará la forma de correrlo usando webpack.

# Hace  referencia a documentos de javascript que no son el tema que se está  evaluando en este curso.
Precisamente por eso hice el video, porque sabía que podría traer problemas. Desde que escuche decir que usted usaba Bootstrap y no Webpack (module bundler), me dio a entender que desconoce muchas cosas actuales sobre desarrollo. Así que por eso hice el video, para que viera que ahí hay HTML, que hay Javascript pero que lo importante seguían siendo el CSS. Para eso se hizo el video, para que no se dijera que no hay nada de contenido HTML, y para enfatizar que aunque había JS, lo importante era CSS. Parte de hacerlo así es separar los archivos, tener un mejor orden, y no importar un montón de archivos a un documento.**Así que sí, sé que JS no es el tema de esta clase aunque la clase se llame "Lenguajes", pero lo que se pidió de CSS está ahí**. A fin de cuentas, yo sabía que JS no se iba a evaluar, solo expliqué cómo se había usado y ya, precisamente para que, si es una tarea de CSS, pues se evaluaran los estilos de CSS. 

> ¿no?

# Falto hacer énfasis en los temas vistos.
Bien, ya que se habla de que falto hacer énfasis en los temas vistos, iremos paso a paso, presentación por presentación. Y descubriremos juntos, si se hizo énfasis o no.
> ¿no?

## 1. Sesión_10.pdf
Comenzaremos por la sesión 10. Donde habló de los editores de texto. Yo ocupe **VS Code**, así que considero que el siguiente criterio de evaluación de la tarea, fue satisfactorio:

> Se valorará el uso adecuado de editores de texto como pueden ser:
> Notepad++, Sublime Text, CoffeCup Free Editor o hasta el mismo blog de
> notas.

¿Me pregunto qué habría pasado si todo lo hubiera hecho con **vi**? ¿Me habría ido peor?

Pero hagamos **énfasis** en los temas vistos:

### 1.1 Etiquetas de HTML
 Tenemos muchos, empezando por todo lo que hay dentro de `src/components` y `src/pages` |
### 1.2 Estructura de HTML 
Tan solo revise `public/index.html`
### 1.3 HTML5
A fin de cuentas escribí HTML5, lo que sabía de HTML aplicaba en react salvo porque `class` en los tags debe cambiarse a `className` 
### 1.4 DOCTYPE 
Tan solo revise `public/index.html`
### 1.5 Atributos
Atributos globales como id, se pueden encontrar en `public/index.html`, en la línea 12, con el contenido `<div id="app"></div>`. 
Otro ejemplo esta en `src/components/Navbar.js` en la línea 25 y con contenido `<input type="checkbox" id="menuButton"/>`. 
Atributos `class` hay muchísimos, revise `src/components` y `src/pages`. 
Otros atributos como meta están en `public/index.html` en la línea 5 y 6 con contenido:

    <meta charset="UTF-8*">
    <meta name="viewport" content="width=device-width, initial-scale=1">
### 1.6 Etiquetas de HTML 
Tenemos muchos, empezando por todo lo que hay dentro de `src/components` y `src/pages`

### 1.7 Reglas de estructura

 1. Etiquetas de cierre automático. Si hay, en `components/navbar.js` de las líneas 20-21 están `<span /><span /><span />`
 2. Etiquetas insensibles a mayúsculas o minúsculas: Irrelevante pero están en minúsculas
 3. Atributo de manifiesto: no hay en el proyecto.

### 1.8 HEAD
Pues si, hay un HEAD en `public/index.html`, que contiene un 

 1. Título
 2. Meta
 3. Link

Lo que no tiene es un Script, porque generalmente se cargan al final. Tampoco tiene un style porque se ve cochino. Y no tiene un base.

### 1.9 Title
De nuevo: `public/index.html` línea 7 `<title>Actividad CSS</title>`

### 1.10 Meta
De nuevo: `public/index.html` línea 5 y 6 :

    <meta charset="UTF-8*">
    <meta name="viewport" content="width=device-width, initial-scale=1">

### 1.11 HTTP-EQUIV 
No hay, lo acepto

### 1.12 Script
De nuevo: `public/index.html` línea 13 `<script charset="utf-8" src="./bundle.js"></script>`

### 1.13 Link
De nuevo: `public/index.html` línea 8 `<link rel="stylesheet" type="text/css" href="./styles.css"/>`

### 1.14 Style 
No hay, que cochino poner styles así.

### 1.15 Elemento base
No hay

### 1.16 Secciones, encabezados y encabezado y pie de página
Esto ya se volvió tedioso, así que vamos a acelerarlo un poco.

 1. Secciones, puede encontrar un claro ejemplo de esto en `src/components/Card.js`
 2. Encabezados, puede ver `src/pages/*.js` -> `<h1>Guardianes de la galaxia</h1>`
 3. Encabezado: `src/components/navbar.js`
 4. Pie de página `src/components/footer.js`

### 1.17 Blockquote
No hay

### 1.18 Details
No hay

### 1.19 Figure
No hay

### 1.20 Agrupando elementos
Pues no hay ningún `<pre />`, ni `<ul>`, u `<ol>` ni `<cite />` De ahí en fuera si hay lo demás. 
Digo, si no se iban a ocupar pues como que no había que meterlos con calzador. En dado caso hubiera especificado **Quiero los siguientes elementos: **.

> ¿No?

Además hicimos una tarea de posibles elementos a usar, no siempre se deben usar todos:
> ¿No?

### Conclusión de Sesión_10.pdf
**No me pondré un 100%, pero digamos que entre el 85% - 90% de lo que se habla en esta presentación, esta presente en la tarea**

## 2. Sesión_11a.pdf

### 2.1 Formato en algunas palabras
Ok en `src/components/Cards.js` línea 33 `<b> Personajes del cómic: </b>`. 

### 2.2 Selectores
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

### 2.3 Unidades
Solamente use las relativas y los pixeles.

    body { 
        font-size: 16px;
    }
Y ya todo lo demás sería relativo a esto.

### 2.4 Viewport
En `public/index.html` en la línea 6 `<meta name="viewport" content="width=device-width, initial-scale=1">`

### 2.5 VM y otras medidas
En `src/styles/components/_navbar.css`:

    .nav  >  #menuButton:checked  +  .nav-links {
	    height: calc(100vh  -  50px);
	    overflow-y: auto;
    }

### 2.6 Uso de %
Hay muchos ejemplos, uno de ellos en `src/styles/components/_banner-image.css`: 

    .banner-image {
	    height: auto;
	    max-height: 475px;
	    width: 100%;
    }

### 2.7 Color
Ni se diga, busque, hay muchos. En cada archivo de `src/styles` hay al menos uno.

### 2.8 Padding y margin
Igual, hay muchos , si bien no se ocuparon al mismo tiempo, existen.
En `src/styles/base/_base.css`:

    body {
	    margin:0;
	    padding:0;
    }
En `src/styles/components/_card.css` hay muchos ejemplos, si bien no se uso directo `margin`, se ocupo cosas como `margin-top` o `margin-bottom.`
De los paddings ni se diga hay en `src/styles/components/_card.css`, `src/styles/base/_base.css` y `src/styles/components/_navbar.css`

### 2.9 Haciendo énfasis en un proveedor

No hay

### 2.10 Archivos de hojas de estilo
Todo lo que hay en `src/styles` más el generado en `public/styles.css`.

### 2.11 Selectores

 1. De atributo no hay ninguno
 2. De elemento si hay, muchos en `src/styles/components/_card.css`.
 3. De clase, hay un montón en todo `src/styles`
 4. De id, hay en `src/styles/components/_navbar`, revise la línea 51 por ejemplo, `.nav  >  #menuButton`.
 5. Selectores de pseudoclase, hay muchos, por ejemplo en `src/styles/components/_card.css` línea 106 `.card:hover`.
 6. Y de los siguientes hay algunos como :first-child.

### 2.12 Conclusión de Sesión_11a.pdf
Así que de nuevo podemos decir que de esta sección entre el **90%-95 ** de lo visto en clase estuvo presente.

## 3. Sesión12Unir.pdf

### 3.1 Span 
Si hay span, lamento decírselo pero en `src/components/Card.js` en la línea 15-16.

    <span class="tooltiptext">
	    {`${c.name}: ${c.description}`}
    </span>

### 3.2 Modelo de caja
Pues la clase `src/styles/components/_card.css` me parece un ejemplo perfecto de lo que es un modelo de caja. 
Si bien el box-sizing se uso solo en `src/styles/base/_base.css`, se uso.

Creo que con eso se cumple el otro criterio a evaluar:

> Se valorará el modelo de cajas.

### 3.3 Organización de contenidos
Si aquí se refería al uso de `display`, pues `src/styles/components/_navbar.css` tiene muchos ejemplos de esto, donde se usa `inline`, `inline-block`, `none`.

### 3.4 Alinear elementos con diferentes atributos. 
Pues me parece que si está, el ejemplo son algunos paddings y eso.

### 3.5 Selector element > element
Realmente no lo use como tal, pero hay muchos ejemplos de `.classA > .classB > p`

### 3.6 Float
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

### 3.7 Clear
No se uso

### 3.8 nth-of-type
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

## 4. Sesión13_1.pptx

### 4.1 Contenido básico
Otra vez `public/index.html`, y si aquí se refiere a las fuentes, todas las fuentes las importe en `src/styles/base/_base.css` al principio del documento.

### 4.2 Contenido básico - main
Pues no ocupe el tag main.

### 4.3 Barra de navegación y un pie de página
Presentes, y ambos están

 1. Navbar donde el HTML está en `src/components/Navbar.js` y sus estilos en  `src/styles/components/_navbar.css`
 2. Footer donde el HTMl está en `src/components/Footer.js` y sus estilos en `src/styles/components/_footer.css`

Ambos engloban todas y cada una de las páginas, como se muestra en `src/components/Wrapper`.

    <Navbar />
        <!-- Aquí va todo el contenido -->
    <Footer />

¿O qué, se imaginaban repetir ese código en cada página?

### 4.4 Buscamos un tipo de fuente
Pues tal cual de google fonts saque mis fuentes, observad las líneas 1 y 2 de `src/styles/base/_base.css`.

    @import  url('https://fonts.googleapis.com/css?family=Poppins');
    @import  url('https://fonts.googleapis.com/css?family=Gloria+Hallelujah');

Ahí están ambos, que no los haya puesto como la maestra no significa que estén mal. 

### 4.5 Formato a los hypervínculos:

Dar un vistazo a `src/styles/components/_navbar.css` en las líneas 39-45:

    .nav > .nav-links > a {
        color: #fff;
        border-right: 1px solid #fff;
        font-size: 1.2rem;
        padding: 13px 15px 13px 15px;
        text-decoration: none;
    }
    
    .nav > .nav-links > a:hover {
        background-color: rgba(226, 54, 54, 0.5);
    }
Ahí le di estilo a un hypervínculo.

### 4.6 Formato del menú de navegación.
Dar un vistazo a `src/styles/components/_navbar.css`
Ahí está eso.

### 4.7 Figure
No se uso.

### 4.8 Repaso de content-box
Se habla en la sección anterior.

### 4.9 Background
Revise `src/styles/components/_card.css` y ahí hay:

 1. background-color
 2. background-position
 3. background-repeat
 4. background-size
 
 Y como extra porque cada tarjeta tenía una imagen diferente en las líneas 23-24 de `src/components/Card.js` se tiene:

     <div style={{ backgroundImage: `url(${this.props.comic.images[0]})` }} className="image"/>
    <div style={{ backgroundImage: `url(${this.props.comic.images[0]})` }} className="image-hover"  />

Si esto se hizo así fue porque no iba a hacer una clase para cada comic con la imagen.

### 4.10 Position fixed
En algún momento agregue un fixed al header. Pero me pareció que se comportaba raro. Por eso lo quite, pero el commit sigue ahí por si gusta verlo: [Commit 01bc6e400325abbe6b497e8bc0e7acc0882a0ead](https://github.com/Jatapiaro/actividad-css/commit/01bc6e400325abbe6b497e8bc0e7acc0882a0ead#diff-68a24e81d6ce7c0f5d6b1e8c1625c2ff) 

### Conclusión de Sesión13_1.pptx
Podemos decir que de está sección tuve entre el **97%-98% del contenido mostrado**.


## 5. Sesión14_1.pptx

### 5.1 Repaso del box-sizing
Sí, ya se entendió, las propiedades, pero de verdad si no se iban a usar en lo que hice, no le vi la necesidad.

### 5.2 Propiedad text-decoration
En `src/styles/components/_navbar.css` en la línea 13-19 tenemos un ejemplo, al igual que de la 39-45. Como podemos ver:

    .nav > .nav-header > .nav-title {
        color: #fff;
        display: inline-block;
        font-size: 1.5rem;
        padding: 10px 10px 10px 10px;
        text-decoration: none;
    }
 De nuevo, si no ví la necesidad del uso de otros estilos, no los usas.
 
### 5.3 Repaso de Background
Esto de abajo es copy paste de lo de arriba.
Revise `src/styles/components/_card.css` y ahí hay:

 1. background-color
 2. background-position
 3. background-repeat
 4. background-size

### 5.4 Sus otros ejemplos
Ahí tiene hasta el text transform y el uso de fuentes en `src/styles/components/_card.css`

    .card > .info > .title {
        font-family: 'Gloria Hallelujah', cursive;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

### 5.4 Prueba GRID
No use grid.

### 5.5 Flex
Use bastante flex, solo revise `src/styles/components/*.css`. Y verá que header, footer y el navbar usan flex.

### 5.6 @Media
De igual forma.
Revise `src/styles/components/*.css`. Y verá que header, footer y el navbar usan @media. Así que aquí se cumple otro punto de su evaluación:

> Se valorará favorablemente la realización de hojas de estilos alternativas para la impresión y dispositivos móviles

### Conclusión de Sesión14_1.pptx
Usted evalúe, pero creo que aquí también hay bastante de lo visto en clase.

## 6. Otros puntos de la evaluación

### 6.1 Ya vamos en CSS3 y se pide:
    

> Se valorará el adecuado uso de propiedades y valores de las
> referencias CSS 2.1

 Híjole, pues en esto ni usted cumplió en clase. Insistió mucho con el `box-sizing` y esto no esta disponible en esa versión de CSS. Ya vamos en CSS3, digo, si va a evaluar a todos con CSS 2.1, pues creo que todos vamos a tener errores. Utilice el evaluador de CSS de W3C que puso en la tarea y evaluando el `public/styles.css` con 2.1 lanza 49 errores. Pero evaluando en 3, todo está bien.

### 6.2 Evaluación de fuentes y colores

    Se valorará el buen uso de fondo, fuentes, y color que se asigne a las hojas de estilo.

Pues creo que se ve bien, pero debería evaluarlo usted. Los colores contrastan y permiten ver el contenido. Quizás falla un poco en el tooltip de la información de cada héroe. 

## Comentarios adicionales

Empecemos por los objetivos:

 1. -   **Ser capaz de integrar los contenidos teóricos expuestos en los temas 4:**  Ya lo demostré en los puntos anteriores.
 2. -   **Ser capaz de utilizar las hojas de estilo válido y enlazarlo con los documentos HTML:** Esto también lo demostré, y si siguen sin creerme vean `public/index.html`.

Ahora marquemos cada parte de los criterios a evaluar:

 1. **Se valorará favorablemente la realización de hojas de estilos alternativas para la impresión y dispositivos móviles:** Me parece que demuestro esto en la sección 5.6 así que se cumple. :white_check_mark:
 2.  **Se valorará el modelo de cajas:** Esto lo demostré en la sección 3.2 :white_check_mark:
 3. **Se valorará el uso adecuado de editores de texto como pueden ser: Notepad++, Sublime Text, CoffeCup Free Editor o hasta el mismo blog de notas:** Hasta en el video se ve que uso VS Code. :white_check_mark:
 4. **Se valorará el buen uso de fondo, fuentes, y color que se asigne a las hojas de estilo:** Lo dejo a su criterio. Ya mencione en la sección **6.2** lo que puede ser que este mal.  :warning:
 5. **Se valorará el adecuado uso de propiedades y valores de las referencias CSS 2.1:** Pues esta es imposible de cumplir para cualquiera. Ya explique porque, en la sección **6.1**. Ni en clase esto se cumplió pues tan solo `box-sizing` no está disponible en esa versión. :white_check_mark::warning::x::confused: 

Para hacer todo el research y ver que las cosas si se cumplen, baje sus presentaciones y fui diapositiva por diapositiva, verificando lo que se decía, y **haciendo uso adecuado de VS code** fui buscando cada propiedad.
¿Cómo?. Pues simplemente fui a la sección search y buscaba. Ahí veía cada archivo. Le daba clic y veía las cosas,
En dado caso de que se quisiera ir directo a un archivo el comando **Ctrl+P** o **Cmd+P** le permite buscar un archivo rápidamente e ir a él.

Creo que lo de JS debió ser lo menos importante. Me gusta entregar tareas que al menos hagan algo. Aquí al menos aprendí a ver como funcionaba el API de Marvel. Quería traer datos reales, y ver una forma interesante de desplegarlo. 

Además quiero aclarar que si quería algo 100% especifico, lo ponga tal cual en la tarea. Desde día uno, las tareas de esta materia tienen ese problema, no se entiende ni se específica exactamente qué se quiere, debemos esperar a que en la clase se diga que es y esto impide adelantar a veces un poco de las mismas. Por no decir que puede llevar a hacer las cosas a tontas a locas y a ciegas. 

En la sesión 14 se dijo algo similar a esto:

**Profesora:** Hacer una página principal, que tenga algunos hypervinculos, pero repasar los selectores y como se aplican. 

En la  grabación 11_sesión 13: 

**Profesora (1:05:15)** Que tienen que hacer como tarea. Pues es diseñar una página. Ok prácticamente incluyendo hojas de estilo, incluyendo a los elementos que solicita. Lo pueden hacer como quieran, ya sea como documento embebido o como un documento css adicional. Manejar sobre todo algunos de los formatos que hemos vistos hasta el momento. Puede ser la página sencilla lo importante es ir enriqueciendo los contenidos, aquí...uy la batería se esta agotando.

**Pregunta**  Profesora, tengo tres preguntas de la tarea. ¿Exactamente qué hay que hacer?, la segunda ¿Es obligatorio utilizar CSS o podemos utilizar SCSS (a fin de cuentas se transpila a CSS)? También he escuchado que ha hablado de que después va a mostrar algunas plantillas. Significa que ¿va a mostrar bootstrap? ¿en la tarea se puede hacer uso de Bootstrap? **Por cierto ¿cuáles son los elementos que solicita?**

**Profesora (1:06:57) [Respondiendo a la pregunta anterior]**:  Es CSS... o sea si pero es CSS lo que vamos a ocupar......(Responde a la pregunta ¿cuáles son los elementos que solicita?):  **No especifica ahí los elementos que solicita, ok, pero al menos incluir algún encabezado, un pie de página, un cuerpo, ok y elementos prácticamente de los que hemos visto en las sesiones. **

Entonces, ¿ya leyeron lo que hay arriba? Me van a decir que después de todo esto que acabo de documentar, **no cumplí con los elementos  de la tarea**. Creo que en lo que documentó se ve claramente que use el contenido de las presentaciones.

Realmente si después de esto sigue habiendo dudas, con gusto seguiré aclarando más cosas.
 
# Descripción anterior
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



