# Polite

Polite es una aplicación web desarrollada con [Next.js](https://nextjs.org), diseñada para gestionar empleados, licencias y recibos de manera eficiente. El proyecto utiliza TypeScript, Redux Toolkit y una arquitectura modular para facilitar el mantenimiento y la escalabilidad.

## Características

- Gestión de empleados y licencias.
- Panel de control y perfiles.
- Interfaz moderna y responsiva.
- Componentes reutilizables y hooks personalizados.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone <https://github.com/juansaintgenez-eng/politehr.git>
   cd polite
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```

## Uso

Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del proyecto

```
src/
  app/           # Páginas y layouts principales
  components/    # Componentes reutilizables
  hooks/         # Hooks personalizados
  store/         # Estado global (Redux)
  types/         # Tipos TypeScript
  utils/         # Utilidades
  MOK/           # Datos mock
public/          # Recursos estáticos
```

## Tecnologías

- Next.js
- React
- TypeScript
- Redux Toolkit
- Tailwind
