# Delilah Resto API
Este es el proyecto Delilah resto, un backend orientado a micro-servicios pensado para un negocio restaurante con una aplicación web para administrar los productos del sistema y sus pedidos

##Requisitos
* Base de datos MySQL con una instancia con usuario y contraseña
* Postman
* Node.js V12.13.0 o superior

----
## Instalación
### Configura tus variables de entorno

1. En la raiz de la carpeta crea un archivo de nombre '.env'. 

2. Copia lo que esta en el archivo '.env.example' en el archivo que recien creaste 

3. Cambia las llaves DB_USER, DB_PASSWORD por las de tu instancia local

4. Cambia las llaves DB_HOST y DB_PORT en caso de que sean otras diferentes a las incluidas por defecto en la instalacion de MySQL

5. Se recomienda dejar el resto de variables de entorno iguales

### Configuracion de node

1. En la carpeta raiz abre una terminal y corre el comando 'npm i'


----
## usage
###Correr el proyecto
1. En la carpeta raiz abre una terminal y corre el comando 'node server' y veras un mensaje de conexion a la base de datos y la URI base de los servicios

>[DB] DB delilah conectada con exito! 
>la app esta funcionando en http://localhost:3000/v1

### Probar por postman
1. Si la configuracion de tu archivo '.env' sigue los pasos recomendados puedes abrir tu navegador en [http://localhost:3000](http://localhost:3000) para ver los servicios expuestos
3. Tambien puedes usar el archivo documentation.yml en un interprete de swagger
4. Se recomiena guardar la URI base en una variable de entorno para las pruebas


