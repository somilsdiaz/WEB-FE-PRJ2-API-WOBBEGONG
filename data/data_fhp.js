const productos = [
    {
        id: 1,
        nombre: "Airpods Pro 2da Gen",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-airpods.png',
        precioNormal: 1600000,
        precioDescuento: 1280000,
        descuento: 20,
        ruta: "/producto/1",
        descripcion: "Los AirPods Pro de segunda generación ofrecen una experiencia de audio inmersiva con cancelación activa de ruido mejorada y un ajuste personalizable para un confort óptimo durante todo el día. Con su chip H2 y controladores de audio rediseñados, estos auriculares brindan un sonido excepcional y una conectividad perfecta con tus dispositivos Apple.",
        specTitle: ["Autonomía", "Conectividad", "Resistencia al agua", "Cancelación de ruido", "Audio espacial", "Chip", "Carga", "Compatibilidad", "Control", "Peso"],
        specValue: ["Hasta 6 horas", "Bluetooth 5.3", "IPX4", "Adaptativa", "Personalizado con seguimiento dinámico de la cabeza", "H2 de Apple", "MagSafe, Lightning y estuche con altavoz", "iOS, iPadOS, macOS, watchOS", "Táctil con sensor de presión", "5.3 gramos por auricular"],
        subcategory: "Audio"
    },
    {
        id: 2,
        nombre: "Airpods Pro Max",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-airpodspm.png',
        precioNormal: 2400000,
        precioDescuento: 2160000,
        descuento: 10,
        ruta: "/producto/2",
        descripcion: "Los AirPods Max redefinen los auriculares over-ear con un sonido de alta fidelidad, cancelación activa de ruido y un diseño elegante en aluminio que proporciona una experiencia auditiva excepcional. Cada componente está cuidadosamente diseñado para ofrecer un rendimiento acústico sin igual.",
        specTitle: ["Duración de batería", "Material", "Chip", "Micrófonos", "Peso", "Audio espacial", "Controles", "Sensores", "Resistencia", "Carga"],
        specValue: ["20 horas", "Aluminio anodizado", "Apple H1", "8 para cancelación de ruido, 1 para voz", "384.8 gramos", "Con seguimiento dinámico de la cabeza", "Digital Crown y botón de control de ruido", "Óptico, Posición, Detección en oreja, Acelerómetro", "No resistente al agua", "Cable Lightning a USB-C"],
        subcategory: "Audio"
    },
    {
        id: 3,
        nombre: "Apple Watch Ultra",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-applew.png',
        precioNormal: 1280000,
        precioDescuento: 1024000,
        descuento: 20,
        ruta: "/producto/3",
        descripcion: "El Apple Watch Ultra es el reloj más robusto y capaz jamás creado por Apple. Con una caja de titanio de 49 mm, batería de larga duración y el botón de Acción personalizable, está diseñado para la exploración, la aventura y la resistencia.",
        specTitle: ["Pantalla", "Material", "Resistencia al agua", "GPS", "Batería", "Sensores", "Conectividad", "Sistema operativo", "Almacenamiento", "Compatibilidad"],
        specValue: ["Retina OLED LTPO de 49mm", "Titanio aeroespacial", "100 metros, EN13319 para buceo", "Doble frecuencia L1 y L5", "Hasta 36 horas, 60 en bajo consumo", "Temperatura, Altitud, Profundidad", "Celular opcional, WiFi, Bluetooth 5.3", "watchOS 9", "32GB", "iPhone 8 o posterior con iOS 16"],
        subcategory: "Smartwatch"

    },
    {
        id: 4,
        nombre: "Galaxy Tab S6",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-galaxytabs6.png',
        precioNormal: 2200000,
        precioDescuento: 1540000,
        descuento: 30,
        ruta: "/producto/4",
        descripcion: "La Galaxy Tab S6 es una tableta versátil y potente que combina la productividad de una laptop con la movilidad de una tablet. Con su S Pen incluido y la posibilidad de usar DeX, es perfecta tanto para trabajo como para entretenimiento.",
        specTitle: ["Pantalla", "Procesador", "Memoria RAM", "Almacenamiento", "Cámara trasera", "Cámara frontal", "Batería", "Sistema operativo", "Conectividad", "Accesorios incluidos"],
        specValue: ["10.5\" Super AMOLED", "Snapdragon 855", "6GB", "128GB ampliable", "Dual 13MP + 5MP", "8MP", "7040mAh", "Android 10 con One UI", "Wi-Fi 6, Bluetooth 5.0", "S Pen"],
        subcategory: "Tabletas"
    },
    {
        id: 5,
        nombre: "Galaxy Watch FE",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-samsumgsw.png',
        precioNormal: 1200000,
        precioDescuento: 1140000,
        descuento: 5,
        ruta: "/producto/5",
        descripcion: "El Galaxy Watch FE ofrece lo mejor de la tecnología wearable de Samsung a un precio accesible. Con seguimiento de salud avanzado, diseño elegante y una interfaz intuitiva, es el compañero perfecto para tu día a día.",
        specTitle: ["Pantalla", "Tamaño", "Batería", "Sensores", "Resistencia al agua", "Sistema operativo", "Conectividad", "Compatibilidad", "Materiales", "Funciones especiales"],
        specValue: ["Super AMOLED", "44mm", "340mAh", "Ritmo cardíaco, SpO2", "5ATM + IP68", "Wear OS", "Bluetooth 5.0, Wi-Fi", "Android 6.0 o superior", "Aluminio y cristal", "Samsung Pay, Bixby"],
        subcategory: "Smartwatch"

    },
    {
        id: 6,
        nombre: "iMac 24 pulgadas",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-imac.png',
        precioNormal: 12000000,
        precioDescuento: 9600000,
        descuento: 20,
        ruta: "/producto/6",
        descripcion: "El iMac de 24 pulgadas con chip M1 redefine el ordenador de escritorio todo en uno. Con su diseño increíblemente fino, pantalla 4.5K Retina deslumbrante y colores vibrantes, es tan capaz como hermoso.",
        specTitle: ["Procesador", "Memoria RAM", "Almacenamiento", "Pantalla", "Cámara", "Puertos", "GPU", "Audio", "Conectividad", "Sistema operativo"],
        specValue: ["Apple M1 8 núcleos", "8GB unificada", "256GB SSD", "24\" 4.5K Retina", "FaceTime HD 1080p", "2 Thunderbolt / USB 4", "GPU 7 núcleos", "Sistema de 6 altavoces", "Wi-Fi 6, Bluetooth 5.0", "macOS Monterey"],
        subcategory: "Computadores"
    },
    {
        id: 7,
        nombre: "iPad Pro",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-ipadpro.png',
        precioNormal: 2800000,
        precioDescuento: 2380000,
        descuento: 15,
        ruta: "/producto/7",
        descripcion: "El iPad Pro con chip M2 ofrece un rendimiento revolucionario, pantallas increíblemente avanzadas y conexiones inalámbricas ultrarrápidas. Con compatibilidad con Apple Pencil, es la herramienta definitiva para creativos y profesionales.",
        specTitle: ["Chip", "Pantalla", "Capacidad", "Cámaras", "Face ID", "Conexión", "Apple Pencil", "Batería", "Puertos", "Dimensiones"],
        specValue: ["Apple M2", "11\" Liquid Retina", "128GB", "Gran angular 12MP, Ultra gran angular 10MP", "Avanzado", "Wi-Fi 6E", "2ª generación", "Hasta 10 horas", "USB-C Thunderbolt", "247.6 x 178.5 x 5.9 mm"],
        subcategory: "Tabletas"
    },
    {
        id: 8,
        nombre: "iPhone 15",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-iphone15p.png',
        precioNormal: 3996000,
        precioDescuento: 3596000,
        descuento: 10,
        ruta: "/producto/8",
        descripcion: "El iPhone 15 presenta un sistema de cámara dual avanzado, Dynamic Island y un rendimiento excepcional con el chip A16 Bionic. Su diseño en vidrio tintado y aluminio resistente lo hace tan duradero como elegante.",
        specTitle: ["Pantalla", "Chip", "Cámara", "Resistencia", "Sistema operativo", "Batería", "Carga", "Memoria", "Conectividad", "Autenticación"],
        specValue: ["Super Retina XDR OLED 6.1\"", "A16 Bionic", "48MP Principal, 12MP Ultra gran angular", "Ceramic Shield", "iOS 17", "Hasta 20 horas de video", "MagSafe, USB-C", "128GB", "5G, Wi-Fi 6", "Face ID"],
        subcategory: "Celulares"
    },
    {
        id: 9,
        nombre: "iPhone 15 Pro Max",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-iphone15pm.png',
        precioNormal: 4396000,
        precioDescuento: 4176000,
        descuento: 5,
        ruta: "/producto/9",
        descripcion: "El iPhone 15 Pro Max representa lo último en innovación de Apple. Con su diseño en titanio, chip A17 Pro y un sistema de cámara profesional, establece nuevos estándares para lo que un smartphone puede hacer.",
        specTitle: ["Material", "Procesador", "Cámara", "Zoom", "Pantalla", "RAM", "Almacenamiento", "Puerto", "Botón de Acción", "Peso"],
        specValue: ["Titanio grado aeroespacial", "A17 Pro", "48MP Principal, 12MP Ultra angular, 12MP Teleobjetivo", "5x óptico", "6.7\" ProMotion", "8GB", "256GB", "USB-C Thunderbolt", "Personalizable", "221 gramos"],
        subcategory: "Celulares"
    },
    {
        id: 10,
        nombre: "Galaxy S24",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-samsungs24.png',
        precioNormal: 3996000,
        precioDescuento: 3200000,
        descuento: 20,
        ruta: "/producto/10",
        descripcion: "El Galaxy S24 combina inteligencia artificial avanzada con un hardware potente para ofrecer una experiencia móvil extraordinaria. Su pantalla Dynamic AMOLED 2X y sistema de cámara mejorado capturan la vida con una claridad impresionante.",
        specTitle: ["Procesador", "Pantalla", "Memoria RAM", "Almacenamiento", "Cámara principal", "Batería", "Sistema operativo", "Resistencia", "Seguridad", "Carga rápida"],
        specValue: ["Snapdragon 8 Gen 3", "6.2\" Dynamic AMOLED 2X", "8GB", "256GB", "50MP con OIS", "4000mAh", "Android 14 con One UI 6.1", "IP68", "Ultrasonic Fingerprint", "25W"],
        subcategory: "Celulares"
    },
    {
        id: 11,
        nombre: "Galaxy S24 Ultra",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-samsungs24ultra.png',
        precioNormal: 4796000,
        precioDescuento: 3356000,
        descuento: 30,
        ruta: "/producto/11",
        descripcion: "El Galaxy S24 Ultra es la culminación de la innovación en smartphones. Con su S Pen integrado, marco de titanio y capacidades de IA revolucionarias, redefine lo que es posible hacer con un teléfono móvil.",
        specTitle: ["Material", "Pantalla", "Procesador", "Cámara principal", "Zoom", "Batería", "S Pen", "RAM", "Almacenamiento", "Conectividad"],
        specValue: ["Marco de titanio", "6.8\" QHD+ Dynamic AMOLED 2X", "Snapdragon 8 Gen 3", "200MP con OIS", "10x óptico", "5000mAh", "Integrado", "12GB", "256GB", "5G, Wi-Fi 7"],
        subcategory: "Celulares"
    },
    {
        id: 12,
        nombre: "Vision Pro ",
        imagen: 'https://web-fe-html-css-prj2-wobbegong.onrender.com/pd-visionpro.png',
        precioNormal: 13996000,
        precioDescuento: 12596000,
        descuento: 10,
        ruta: "/producto/12",
        descripcion: "Apple Vision Pro es un revolucionario dispositivo de computación espacial que mezcla perfectamente contenido digital con el mundo físico. Con visionOS, te permite interactuar con contenido digital de formas naturales e intuitivas.",
        specTitle: ["Pantalla", "Procesador", "Cámaras", "Audio", "Sistema operativo", "Control", "Batería", "Seguimiento ocular", "Memoria", "Compatibilidad"],
        specValue: ["Micro-OLED dual 4K", "Apple M2 y R1", "12 cámaras externas, 5 internas", "Audio espacial personalizado", "visionOS", "Gestos y vista", "2 horas, extendible", "30 fps", "16GB RAM", "Ecosistema Apple"],
        subcategory: "Video"
    }
];

module.exports = productos;
