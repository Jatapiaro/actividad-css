# Actividad Hojas de Estilo

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

[![Vídeo explicación](https://img.youtube.com/vi/AguOjUaDg8k/0.jpg)](https://youtu.be/AguOjUaDg8k)

# Como instalar

 1. Instalar node
 2. Instalar yarn `npm i yarn -g`
 3. Descargar el proyecto con `git clone https://github.com/Jatapiaro/actividad-css`
 4. Entrar en la carpeta del proyecto `cd actividad-css`
 5. Dentro de la carpeta del proyecto instalar los módulos necesarios `yarn install`
 6. Correr con  `yarn serve`
