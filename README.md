# App de Registro de Productos Financieros

Esta es una aplicación para registrar productos financieros, donde puedes crear, editar, eliminar y listar productos. La aplicación sigue principios SOLID y TDD para asegurar la calidad del código. Los estilos se han implementado utilizando CSS, y para las confirmaciones se utiliza SweetAlert. La aplicación está desarrollada en Angular.

## Instalación

1. Clona el repositorio desde: [https://github.com/roberth1927/app-financial-products.git]

2. En la raíz del proyecto, ejecuta el siguiente comando para instalar las dependencias:
   
   `npm install`
   

3. Crea un archivo `environment.ts` en la ruta `/src/environments/` y agrega la variable `authorId`  y la variable `apiUrl` con el valor adecuado. Este archivo debe tener la siguiente estructura:

   ```typescript
   export const environment = {
     production: false,
     apiUrl: 'URL_BASE',
     authorId: 'ID_DE_AUTOR_AQUI'
   };
   

4. Luego, para ejecutar la aplicación en modo de desarrollo, utiliza el siguiente comando:
   
  `ng serve`
   

5. Abre un navegador y navega a `http://localhost:4200/` para acceder a la aplicación.



## Ejecución de Pruebas

1. Asegúrate de haber instalado todas las dependencias del proyecto ejecutando:
   `npm install`

2. Una vez que todas las dependencias estén instaladas, puedes ejecutar las pruebas con el siguiente comando:
  `ng test`
  Esto iniciará el marco de pruebas Karma y ejecutará todas las pruebas en la aplicación.

3. Después de ejecutar las pruebas, verás los resultados en la terminal. Deberías ver una lista de pruebas exitosas y, en caso de que alguna prueba falle, se mostrarán los detalles del fallo.
   

## Versiones

- Angular: 16.1.x


## Contacto

Si necesitas acceder al archivo `environment.ts` o tienes alguna pregunta, no dudes en contactarnos a través del correo electrónico: [robinmoralesquiroz@gmail.com].

