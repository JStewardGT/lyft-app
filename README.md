# Lyft

Lyft es una aplicación de servicio de taxi a través de dispositivos móviles.

![Aplicación Lyft](https://user-images.githubusercontent.com/32287220/36370614-59223366-152d-11e8-8da4-767479e80ff6.png)

## Desarrollado para

[Laboratoria](http://laboratoria.la)


## Descripción del proyecto:

El siguiente proyecto es el desarrollo de la aplicación móvil Lyft, un servicio de taxi. 
La aplicación muestra el proceso de registro del usuario y la verificación de los datos proporcionados.

## Flujo del Proyecto:

### Vista index:
La primera vista es un splash con una animación al logotipo de la marca. Luego de un transcurso de tiempo, este de redirecciona a la página principal.

### Vista home:
Esta vista es donde se da opción al usuario de registrarse o ingresar si es que ya cuenta con una cuenta. 
El usuario puede regresar a la vista anterior, presionando el logo de la marca"

### Vista log-in:
El usuario ingresa su correo electrónico. Si coincide con la data, se muestra un saludo de bienvenida a Lyft

### Vista register:
En esta vista, el usuario debe seleccionar al país que pertenece y brindar su número telefónico. Una vez verificado que se han ingresado los 10 dígidos pedidos, se habilita el botón: next. Y se envia al usuario mediante un modal, su código de registro.
Al aceptar, se muestra la siguiente vista.
Los datos del usuario son almacenados en el local storage, para que pueda iniciar sesión posteriormente.
El usuario puede regresar a la vista anterior, presionando el botón "volver"

### Vista verify:
En esta vista se verifica el código que se envió al usuario, pues este debe ser ingresado. Si este coincide con el dado, el botón "next" se activa. 
El usuario tiene la opción de pedir un nuevo código mediante el botón de reenvío. Este será mostrado con un modal.
Una vez que el código este verificado, el botón "next", muestra la siguiente vista.
El usuario puede regresar a la vista anterior, presionando el botón "volver"

### Vista user-register:
El usuario ingresa sus datos: nombre, apellido y correo electrónico.
Los inputs se encuentran deshabilitados a menos que se llene el anterior correctamente.
Además el usuario debe marcar un checkbox, mediante el cual acepta las condiciones de Lyft.
Una vez todos los campos estén llenados correctamente el botón "next" se activa y lleva al usuario a la siguiente vista.
El usuario puede regresar a la vista anterior, presionando el botón "volver"

### Vista final-check:
En esta vista se muestra el logo de la marca y un ícono que indica al usuario que el proceso se ha producido correctamente.
El logo es navegable y lleva al usuario a la vista anterior.


## Herramientas utilizadas:

1. HTML5

2. CSS3

3. Javascript

4. jQuery

5. Bootstrap.