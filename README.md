# Mi primer proyecto React

## Objetivo de la optimizacion
Mejorar organizacion, rendimiento y mantenimiento de la app aplicando buenas practicas.

## 1. Organizacion del proyecto

### Rutas en archivo independiente
- Se movieron las rutas desde App hacia [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx).
- Se dejo [src/App.jsx](src/App.jsx) solo como layout principal (Header + rutas + Footer).

Justificacion:
- App queda mas limpio y facil de leer.
- Si agrego nuevas paginas, solo toco un archivo de rutas.

### Mejor estructura para datos
- Se creo [src/data/peliculas.js](src/data/peliculas.js) para centralizar el consumo de peliculas.
- Home, Cartelera y Detalle ahora consumen ese modulo, no el JSON directo.

Justificacion:
- Evita repetir logica en varias paginas.
- Facilita cambios futuros (por ejemplo, cambiar JSON por API).

## 2. Buenas practicas aplicadas

### Carga diferida de paginas (lazy loading)
- En [src/routes/AppRoutes.jsx](src/routes/AppRoutes.jsx) se uso `React.lazy` + `Suspense`.

Justificacion:
- La aplicacion no descarga todas las paginas al inicio.
- Mejora el tiempo de carga inicial.

### Eliminacion de codigo innecesario
- Se elimino el componente Button porque solo se usaba una vez.
- [src/components/MovieCard.jsx](src/components/MovieCard.jsx) quedo mas simple.

Justificacion:
- Menos archivos y menos dependencias entre componentes.
- Mantenimiento mas sencillo.

### Uso adecuado de estilos y datos
- Se movieron estilos inline de Cartelera y MovieCard a CSS.
- Se agrego [src/components/MovieCard.css](src/components/MovieCard.css).
- Se agregaron clases nuevas en [src/App.css](src/App.css) para secciones reutilizables.

Justificacion:
- Menos codigo recreado en cada render.
- Mejor separacion entre logica y presentacion.

### Optimizaciones de render
- En Cartelera se memoizo el filtrado y el orden aleatorio (`useMemo`).
- En Home se quito estado/efecto innecesario para peliculas destacadas.

Justificacion:
- Se reducen calculos repetidos en cada render.
- Comportamiento mas predecible y codigo mas claro.

## 3. Resultado
- Proyecto mas ordenado por responsabilidades.
- Mejor rendimiento de carga inicial.
- Componentes con menos ruido y mas faciles de mantener.

## Comandos
```bash
npm install
npm run dev
npm run build
```
