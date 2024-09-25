const courses = [
  {
    id: 10,
    name: "React.js",
    description:
      "¡Bienvenido al curso de React! En este curso aprenderás a desarrollar aplicaciones web dinámicas y modernas utilizando una de las bibliotecas de JavaScript más populares y poderosas. React te permite construir interfaces de usuario eficientes, componibles y fáciles de mantener, facilitando el desarrollo de proyectos escalables. A lo largo de este curso, exploraremos los fundamentos de React, incluyendo componentes, estados, props, manejo de eventos, y la creación de aplicaciones interactivas. No importa si eres nuevo en React o tienes algo de experiencia, ¡este curso te ayudará a convertirte en un desarrollador React experto!",
    features: [
      {
        id: 10,
        feature:
          "Componentes Reutilizables: React permite la creación de componentes modulares que se pueden reutilizar en diferentes partes de tu aplicación, mejorando la eficiencia y el mantenimiento del código.",
      },
      {
        id: 20,
        feature:
          "Actualizaciones Eficientes: Gracias a su virtual DOM, React actualiza solo las partes de la interfaz que han cambiado, lo que hace que las aplicaciones sean más rápidas y reactivas.",
      },
      {
        id: 30,
        feature:
          "Gran Comunidad y Ecosistema: React cuenta con una vasta comunidad de desarrolladores y una gran cantidad de librerías y herramientas que facilitan la creación de aplicaciones complejas.",
      },
      {
        id: 40,
        feature:
          "Desarrollo Fácil de Aplicaciones Web y Móviles: Con herramientas como React Native, puedes desarrollar aplicaciones móviles utilizando los mismos principios y conocimientos que usas en la web.",
      },
    ],
    topics: [
      {
        id: 1,
        name: "Introducción a React",
        description:
          "Fundamentos de React, incluyendo qué es, cómo funciona y cómo configurar un proyecto básico.",
        level: "básico",
      },
      {
        id: 2,
        name: "JSX (JavaScript XML)",
        description:
          "Aprender la sintaxis de JSX que permite combinar HTML y JavaScript para crear componentes de forma clara.",
        level: "básico",
      },
      {
        id: 3,
        name: "Componentes Funcionales y de Clase",
        description:
          "Crear y entender los componentes de clase y funcionales, incluyendo sus diferencias y usos.",
        level: "básico",
      },
      {
        id: 4,
        name: "Props y Estado",
        description:
          "Gestión de propiedades y estado en los componentes para manejar datos y actualizar la UI de forma dinámica.",
        level: "básico",
      },
      {
        id: 5,
        name: "Ciclo de Vida de los Componentes",
        description:
          "Comprender los métodos del ciclo de vida de los componentes y cómo usarlos para controlar la actualización y desmontaje.",
        level: "intermedio",
      },
      {
        id: 6,
        name: "Hooks",
        description:
          "Introducción a los hooks, incluyendo useState, useEffect y otros hooks personalizados para manejar lógica de estado en componentes funcionales.",
        level: "intermedio",
      },
      {
        id: 7,
        name: "Manejo de Formularios",
        description:
          "Cómo crear y gestionar formularios en React, validaciones, y control de entradas de usuario.",
        level: "intermedio",
      },
      {
        id: 8,
        name: "React Router",
        description:
          "Navegación y enrutamiento en aplicaciones React para crear rutas y gestionar vistas.",
        level: "intermedio",
      },
      {
        id: 9,
        name: "Context API",
        description:
          "Gestión de estado global usando Context API para compartir datos entre componentes sin prop drilling.",
        level: "intermedio",
      },
      {
        id: 10,
        name: "Renderizado Condicional y Listas",
        description:
          "Cómo renderizar contenido de forma condicional y manejar listas de datos en la interfaz.",
        level: "básico",
      },
      {
        id: 11,
        name: "Optimización de Rendimiento",
        description:
          "Mejorar el rendimiento de las aplicaciones con técnicas como memoización, lazy loading y react.memo.",
        level: "avanzado",
      },
      {
        id: 12,
        name: "Manejo de Estado con Redux",
        description:
          "Integración de Redux para una gestión avanzada de estado en aplicaciones grandes y complejas.",
        level: "avanzado",
      },
      {
        id: 13,
        name: "Testing en React",
        description:
          "Escribir pruebas para componentes de React utilizando Jest, React Testing Library o Enzyme.",
        level: "avanzado",
      },
      {
        id: 14,
        name: "React con TypeScript",
        description:
          "Uso de TypeScript en React para agregar tipado estático y mejorar la mantenibilidad del código.",
        level: "avanzado",
      },
    ],
  },
  {
    id: 20,
    name: "Node.js",
    description:
      "¡Bienvenido al curso de Node.js! En este curso aprenderás a construir aplicaciones web del lado del servidor utilizando JavaScript. Node.js es una plataforma poderosa y eficiente basada en el motor de JavaScript V8 de Google, que te permitirá crear aplicaciones escalables y rápidas. A lo largo de este curso, exploraremos los conceptos clave de Node.js, desde la creación de servidores y manejo de rutas, hasta el uso de bases de datos, autenticación y seguridad. Este curso es ideal para aquellos que quieren llevar sus habilidades de desarrollo web al siguiente nivel.",
    features: [
      {
        id: 50,
        feature:
          "JavaScript en el Backend: Con Node.js puedes utilizar el mismo lenguaje, JavaScript, tanto en el frontend como en el backend, lo que facilita el desarrollo full-stack.",
      },
      {
        id: 60,
        feature:
          "Alta Escalabilidad: Gracias a su arquitectura basada en eventos y un modelo de E/S no bloqueante, Node.js permite manejar múltiples conexiones concurrentes de forma eficiente.",
      },
      {
        id: 70,
        feature:
          "Gran Ecosistema: Node.js cuenta con un vasto ecosistema de librerías y paquetes a través de npm (Node Package Manager), lo que facilita la integración de funcionalidades adicionales a tus proyectos.",
      },
      {
        id: 80,
        feature:
          "Desarrollo de APIs Rápido y Eficiente: Node.js es ideal para crear APIs RESTful, lo que permite desarrollar servicios backend ligeros y eficientes.",
      },
    ],
    topics: [
      {
        id: 1,
        name: "Introducción a Node.js",
        description:
          "Conceptos básicos de Node.js, cómo funciona, y cómo configurar un entorno de desarrollo.",
        level: "básico",
      },
      {
        id: 2,
        name: "Módulos en Node.js",
        description:
          "Cómo utilizar y crear módulos en Node.js para organizar y reutilizar código.",
        level: "básico",
      },
      {
        id: 3,
        name: "Manejo de Archivos",
        description:
          "Leer y escribir archivos en Node.js utilizando el módulo `fs` (file system).",
        level: "básico",
      },
      {
        id: 4,
        name: "Servidores HTTP",
        description:
          "Crear y gestionar servidores HTTP utilizando Node.js, además de manejar peticiones y respuestas.",
        level: "básico",
      },
      {
        id: 5,
        name: "Express.js",
        description:
          "Introducción a Express.js, un framework minimalista para construir aplicaciones web y APIs.",
        level: "intermedio",
      },
      {
        id: 6,
        name: "Bases de Datos con Node.js",
        description:
          "Conectar Node.js a bases de datos como MongoDB y MySQL para realizar operaciones CRUD.",
        level: "intermedio",
      },
      {
        id: 7,
        name: "Autenticación y Autorización",
        description:
          "Implementar autenticación de usuarios mediante JWT o sesiones, y manejar la autorización en rutas.",
        level: "intermedio",
      },
      {
        id: 8,
        name: "Manejo de Errores y Middleware",
        description:
          "Aprender a manejar errores de forma eficiente en aplicaciones Node.js y usar middleware en Express.",
        level: "intermedio",
      },
      {
        id: 9,
        name: "Despliegue de Aplicaciones Node.js",
        description:
          "Cómo desplegar aplicaciones Node.js en servidores y plataformas como Heroku o DigitalOcean.",
        level: "intermedio",
      },
      {
        id: 10,
        name: "Seguridad en Node.js",
        description:
          "Buenas prácticas de seguridad para proteger aplicaciones Node.js de vulnerabilidades comunes.",
        level: "avanzado",
      },
      {
        id: 11,
        name: "Sockets en Tiempo Real",
        description:
          "Implementar comunicación en tiempo real utilizando WebSockets en aplicaciones Node.js.",
        level: "avanzado",
      },
      {
        id: 12,
        name: "Testing en Node.js",
        description:
          "Escribir pruebas automatizadas para aplicaciones Node.js utilizando Mocha, Chai o Jest.",
        level: "avanzado",
      },
      {
        id: 13,
        name: "Optimización y Escalabilidad",
        description:
          "Técnicas para mejorar el rendimiento y la escalabilidad de las aplicaciones Node.js.",
        level: "avanzado",
      },
    ],
  },
];

module.exports = courses;
