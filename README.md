
# Proyecto de Desafíos Lógicos

Este proyecto tiene como objetivo proporcionar una plataforma para resolver desafíos de programación en JavaScript. Los usuarios pueden escribir su código, ejecutar pruebas y ver los resultados. Además, pueden obtener ayuda contextual para resolver los desafíos.

## Tecnologías utilizadas

- **Next.js**: Framework de React para el desarrollo de la aplicación.
- **TypeScript**: Para garantizar un desarrollo más seguro y con tipado estático.
- **Shadcn UI**: Librería de componentes UI de alta calidad.
- **Lucide React**: Iconos interactivos utilizados en la interfaz.
- **SyntaxHighlighter**: Para mostrar el código con resaltado de sintaxis.
- **Tailwind CSS**: Framework para el diseño de la interfaz de usuario.

## Estructura del Proyecto

- **`components/`**: Contiene los componentes reutilizables como `ChallengeCard` y otros componentes de UI.
- **`data/`**: Contiene los datos de los desafíos que los usuarios resolverán.
- **`hooks/`**: Hooks personalizados como `use-toast` para mostrar notificaciones.
- **`pages/`**: Contiene las páginas de la aplicación.
- **`public/`**: Archivos públicos, como imágenes y fuentes.
- **`styles/`**: Archivos CSS para personalizar el diseño de la aplicación.

## Descripción de Funcionalidades

### Desafíos Lógicos

El usuario puede seleccionar un desafío de la lista, ver su descripción y escribir una solución en el área de texto proporcionada. Luego, puede ejecutar las pruebas, y el sistema verificará si la solución es correcta o no. Si la solución pasa todas las pruebas, se muestra un mensaje de éxito y el usuario avanza al siguiente desafío.

### Progreso

El progreso de los desafíos se visualiza en una barra de progreso. A medida que el usuario resuelve los desafíos, su progreso se actualiza. Al completar todos los desafíos, el sistema muestra un mensaje de felicitación.

### Ayuda

Cada desafío tiene una opción de ayuda donde el usuario puede obtener un consejo útil para resolver el desafío. Esto se puede activar o desactivar con un botón.

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/desafios-logicos.git
```

2. Instala las dependencias:

```bash
cd desafios-logicos
npm install
```

3. Ejecuta la aplicación:

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, puedes hacer un fork del repositorio y enviar un pull request con tus cambios.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
