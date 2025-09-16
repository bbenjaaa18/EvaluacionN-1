// ===== DATOS DE PRODUCTOS Y BLOGS =====
const products = {
    'smartphone-pro-max': {
        id: 'smartphone-pro-max',
        name: 'Smartphone Pro Max',
        price: 499990,
        description: 'Último modelo con cámara avanzada de 108MP y procesador de última generación.',
        fullDescription: 'El Smartphone Pro Max representa la culminación de años de innovación tecnológica. Con su impresionante cámara de 108MP, captura fotos con una claridad y detalle extraordinarios. Su procesador de última generación garantiza un rendimiento fluido en todas las aplicaciones, desde gaming hasta edición profesional.',
        features: ['Cámara 108MP', 'Procesador A17 Pro', 'Batería 5000mAh', '256GB Storage', '5G Ready', 'Pantalla OLED 6.7"'],
        images: [
            'imagenes/Pro_max.jpg',
            'imagenes/imagen_2_max.png',
            'imagenes/imagen_3_max.jpg',
        ]
    },
    'audifonos-wireless-pro': {
        id: 'audifonos-wireless-pro',
        name: 'Audífonos Wireless Pro',
        price: 199990,
        description: 'Audífonos inalámbricos con cancelación de ruido activa y 30hrs de batería.',
        fullDescription: 'Experimenta el sonido como nunca antes con nuestros Audífonos Wireless Pro. La tecnología de cancelación de ruido activa te sumerge completamente en tu música, mientras que la batería de larga duración te acompaña todo el día.',
        features: ['Cancelación de Ruido Activa', 'Batería 30hrs', 'Bluetooth 5.3', 'Carga Rápida', 'Resistente al Agua IPX4'],
        images: [
            'imagenes/Wireless_Pro.jpeg',
            'imagenes/imagen_2_audifonos.png',
            'imagenes/imagen_3_audifonos.jpg'
        ]
    },
    'laptop-gaming-pro': {
        id: 'laptop-gaming-pro',
        name: 'Laptop Gaming Pro',
        price: 599990,
        description: 'Laptop de alto rendimiento para gaming y trabajo profesional.',
        fullDescription: 'La Laptop Gaming Pro está diseñada para los más exigentes. Con su potente GPU y procesador de última generación, puede manejar los juegos más demandantes y aplicaciones profesionales sin problemas.',
        features: ['RTX 4060 8GB', 'Intel i7 13th Gen', '32GB DDR5 RAM', '1TB NVMe SSD', 'Pantalla 144Hz'],
        images: [
            'imagenes/Laptop_Gaming_Pro.jpg',
            'imagenes/imagen_2_laptop.png',
            'imagenes/imagen_3_laptop.jpg'
        ]
    },
    'monitor-4k-ultra': {
        id: 'monitor-4k-ultra',
        name: 'Monitor 4K Ultra',
        price: 699990,
        description: 'Monitor 27" 4K con HDR10 y 144Hz para gaming y diseño profesional.',
        fullDescription: 'El Monitor 4K Ultra ofrece una experiencia visual incomparable. Con resolución 4K nativa, HDR10 y una tasa de refresco de 144Hz, es perfecto tanto para gaming competitivo como para trabajo de diseño profesional.',
        features: ['Resolución 4K (3840x2160)', 'HDR10 Support', '144Hz Refresh Rate', 'IPS Panel', 'USB-C Hub'],
        images: [
            'imagenes/Monitor_4K_Ultra.jpg',
            'imagenes/imagen_2_monitor.jpg',
            'imagenes/imagen_3_monitor.jpg'
        ]
    },
    'teclado-mecanico-rgb': {
        id: 'teclado-mecanico-rgb',
        name: 'Teclado Mecánico RGB',
        price: 149990,
        description: 'Teclado mecánico gaming con switches Cherry MX e iluminación RGB personalizable.',
        fullDescription: 'El Teclado Mecánico RGB combina rendimiento y estilo. Con switches Cherry MX Blue para una respuesta táctil perfecta e iluminación RGB totalmente personalizable, es la herramienta ideal para gamers y profesionales.',
        features: ['Switches Cherry MX Blue', 'Iluminación RGB', 'Frame de Aluminio', 'Teclas PBT', 'Software Personalizable'],
        images: [
            'imagenes/Teclado_Mécanico_RGB.jpg',
            'imagenes/imagen_2_teclado.jpg',
            'imagenes/imagen_3_teclado.jpg'
        ]
    },
    'mouse-gaming-pro': {
        id: 'mouse-gaming-pro',
        name: 'Mouse Gaming Pro',
        price: 99990,
        description: 'Mouse gaming inalámbrico con sensor óptico de 25,000 DPI y batería de 70hrs.',
        fullDescription: 'El Mouse Gaming Pro está diseñado para la precisión absoluta. Su sensor óptico de 25,000 DPI y batería de larga duración lo convierten en la elección perfecta para gamers profesionales.',
        features: ['Sensor 25,000 DPI', 'Batería 70hrs', 'Conexión Inalámbrica 2.4GHz', '8 Botones Programables', 'Peso Ajustable'],
        images: [
            'imagenes/Mouse_Gaming_Pro.jpg',
            'imagenes/imagen_2_mouse.jpg',
            'imagenes/imagen_3_mouse.jpg'
        ]
    }
};

const blogPosts = {
    1: {
        id: 1,
        title: 'Nuevas Tendencias Tecnológicas 2023',
        content: `
            <h3>Las Innovaciones que Están Transformando el Mundo</h3>
            <p>El año 2023 ha sido extraordinario en términos de avances tecnológicos. Desde la inteligencia artificial hasta los dispositivos de realidad aumentada, estamos siendo testigos de una revolución digital sin precedentes.</p>
            
            <h4>Inteligencia Artificial Generativa</h4>
            <p>Los modelos de IA como ChatGPT y DALL-E han democratizado el acceso a la inteligencia artificial, permitiendo a usuarios comunes crear contenido, resolver problemas complejos y automatizar tareas de manera más eficiente que nunca.</p>
            
            <h4>Computación Cuántica</h4>
            <p>Los avances en computación cuántica prometen revolucionar campos como la criptografía, la medicina y la optimización de procesos. Empresas como IBM y Google continúan superando barreras en este campo.</p>
            
            <h4>Realidad Virtual y Aumentada</h4>
            <p>El metaverso y las aplicaciones de AR/VR están encontrando aplicaciones prácticas en educación, medicina, entretenimiento y trabajo remoto, creando experiencias inmersivas nunca antes vistas.</p>
        `,
        date: '15 Oct, 2023',
        author: 'Admin',
        image: ''
    },
    2: {
        id: 2,
        title: 'Guía Definitiva para Armado de PC Gaming',
        content: `
            <h3>Todo lo que Necesitas Saber para Armar tu PC Ideal</h3>
            <p>Armar una PC gaming puede parecer intimidante al principio, pero con la información correcta, cualquier persona puede construir un sistema potente y personalizado.</p>
            
            <h4>Componentes Esenciales</h4>
            <ul>
                <li><strong>Procesador (CPU):</strong> El cerebro de tu PC. Recomendamos Intel Core i5 o AMD Ryzen 5 como mínimo.</li>
                <li><strong>Tarjeta Gráfica (GPU):</strong> El componente más importante para gaming. NVIDIA RTX 4060 o AMD RX 7600 son excelentes opciones.</li>
                <li><strong>Memoria RAM:</strong> 16GB DDR4 o DDR5 son el estándar actual para gaming.</li>
                <li><strong>Almacenamiento:</strong> Un SSD NVMe de al menos 500GB para el sistema operativo y juegos principales.</li>
            </ul>
            
            <h4>Presupuesto Recomendado</h4>
            <p>Para una PC gaming sólida en 2023, considera un presupuesto de $800.000 a $1.500.000 CLP, dependiendo del nivel de rendimiento que busques.</p>
            
            <h4>Consejos de Armado</h4>
            <p>Siempre usa una pulsera antiestática, lee los manuales antes de comenzar, y no tengas miedo de pedir ayuda si es tu primera vez.</p>
        `,
        date: '8 Oct, 2023',
        author: 'TechExpert',
        image: ''
    },
    3: {
        id: 3,
        title: 'Review: Smartphone Pro Max - ¿Vale la Pena?',
        content: `
            <h3>Análisis Completo del Flagship del Año</h3>
            <p>Después de usar el Smartphone Pro Max durante tres semanas, aquí está nuestro veredicto completo sobre este dispositivo que promete revolucionar la fotografía móvil.</p>
            
            <h4>Diseño y Construcción</h4>
            <p>El Pro Max cuenta con un diseño premium en titanio que se siente sólido y elegante en la mano. A pesar de su pantalla de 6.7 pulgadas, el dispositivo mantiene un grosor de solo 8.25mm.</p>
            
            <h4>Rendimiento</h4>
            <p>El procesador A17 Pro demuestra ser una bestia en términos de rendimiento. Los juegos más demandantes corren sin problemas a 60fps, y la multitarea es fluida incluso con múltiples aplicaciones pesadas abiertas.</p>
            
            <h4>Cámara: La Estrella del Show</h4>
            <p>La cámara de 108MP captura detalles impresionantes incluso en condiciones de poca luz. El nuevo modo nocturno y las capacidades de video 4K ProRes lo convierten en una herramienta seria para creadores de contenido.</p>
            
            <h4>Batería</h4>
            <p>Con uso intensivo, el dispositivo dura cómodamente todo el día. La carga rápida de 30W permite cargar del 0 al 80% en aproximadamente 45 minutos.</p>
            
            <h4>Veredicto Final</h4>
            <p>Si eres un usuario intensivo que valora la fotografía y el rendimiento, el Smartphone Pro Max justifica su precio. Para usuarios casuales, opciones más económicas pueden ser suficientes.</p>
            
            <p><strong>Calificación: 9/10</strong></p>
        `,
        date: '1 Oct, 2023',
        author: 'ReviewMaster',
        image: ''
    }
};

// ===== VARIABLES GLOBALES =====
let cart = [];
let currentImageIndex = 0;

// ===== NAVEGACIÓN =====
function showPage(pageId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(pageId).classList.add('active');
    
    // Cerrar menú móvil
    document.getElementById('navMenu').classList.remove('active');
    
    // Cerrar carrito si está abierto
    document.getElementById('cart').classList.remove('active');
}

// ===== DETALLE DE PRODUCTOS =====
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;
    
    const detailContent = document.getElementById('product-detail-content');
    detailContent.innerHTML = `
        <div class="product-gallery">
            <img src="${product.images[0]}" alt="${product.name}" class="product-main-image" id="main-image">
            <div class="product-thumbnails">
                ${product.images.map((img, index) => `
                    <img src="${img}" alt="${product.name}" class="product-thumbnail ${index === 0 ? 'active' : ''}" 
                         onclick="changeMainImage('${img}', ${index})">
                `).join('')}
            </div>
        </div>
        <div class="product-details">
            <h2>${product.name}</h2>
            <div class="product-price" style="font-size: 2rem; margin: 20px 0;">$${product.price.toLocaleString()}</div>
            <p>${product.fullDescription}</p>
            
            <h3>Características:</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            
            <div style="margin-top: 30px;">
                <button class="btn" onclick="addToCart('${product.id}', '${product.name}', ${product.price})" 
                        style="margin-right: 15px;">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
                <button class="btn btn-outline" onclick="showPage('productos')">
                    <i class="fas fa-arrow-left"></i> Seguir Comprando
                </button>
            </div>
        </div>
    `;
    
    showPage('detalle-producto');
}

function changeMainImage(imageSrc, index) {
    document.getElementById('main-image').src = imageSrc;
    
    // Actualizar thumbnails activos
    document.querySelectorAll('.product-thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// ===== DETALLE DE BLOG =====
function showBlogDetail(blogId) {
    const blog = blogPosts[blogId];
    if (!blog) return;
    
    const blogDetailContent = document.getElementById('blog-detail-content');
    blogDetailContent.innerHTML = `
        <article style="max-width: 800px; margin: 20px auto;">
            <img src="${blog.image}" alt="${blog.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: var(--primary-color); margin-bottom: 15px;">${blog.title}</h1>
            <div class="blog-meta" style="margin-bottom: 30px; padding-bottom: 15px; border-bottom: 2px solid var(--border-color);">
                <span><i class="far fa-calendar"></i> ${blog.date}</span>
                <span style="margin-left: 20px;"><i class="far fa-user"></i> ${blog.author}</span>
            </div>
            <div class="blog-content">
                ${blog.content}
            </div>
        </article>
    `;
    
    showPage('detalle-blog');
}

// ===== CARRITO DE COMPRAS =====
function addToCart(id, name, price) {
    // Buscar si el producto ya existe en el carrito
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    showSuccessMessage(`${name} agregado al carrito`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const emptyMessage = document.getElementById('empty-cart-message');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '';
        cartCount.textContent = '0';
        cartTotal.textContent = '$0';
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
        
        cartItems.innerHTML = cart.map(item => `
            <li>
                <div>
                    <strong>${item.name}</strong><br>
                    $${item.price.toLocaleString()} x ${item.quantity}
                </div>
                <button onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </li>
        `).join('');
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = `$${totalPrice.toLocaleString()}`;
    }
}

function clearCart() {
    cart = [];
    updateCartDisplay();
    showSuccessMessage('Carrito vacío');
}

// ===== VALIDACIONES DE FORMULARIOS =====
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Validación por tipo de campo
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo es requerido';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Por favor ingresa un email válido';
        }
    } else if (field.type === 'password' && value) {
        if (value.length < 8) {
            isValid = false;
            errorMessage = 'La contraseña debe tener al menos 8 caracteres';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
            isValid = false;
            errorMessage = 'La contraseña debe contener al menos una mayúscula, una minúscula y un número';
        }
    } else if (field.id === 'regConfirmPassword' || field.id === 'confirmPassword') {
        const passwordField = document.getElementById('regPassword') || document.getElementById('password');
        if (value !== passwordField.value) {
            isValid = false;
            errorMessage = 'Las contraseñas no coinciden';
        }
    } else if (field.id === 'contactName' || field.id === 'regName') {
        if (value && value.length < 2) {
            isValid = false;
            errorMessage = 'El nombre debe tener al menos 2 caracteres';
        } else if (value && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
            isValid = false;
            errorMessage = 'El nombre solo puede contener letras y espacios';
        }
    }
    
    // Aplicar estilos visuales
    const feedbackElement = field.nextElementSibling;
    if (isValid) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
        if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.style.display = 'none';
        }
    } else {
        field.classList.remove('is-valid');
        field.classList.add('is-invalid');
        if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.textContent = errorMessage;
            feedbackElement.style.display = 'block';
        }
    }
    
    return isValid;
}

function validateForm(form) {
    let isFormValid = true;
    const fields = form.querySelectorAll('input, textarea, select');
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isFormValid = false;
        }
    });
    
    return isFormValid;
}

// ===== MENSAJES DE ÉXITO =====
function showSuccessMessage(message) {
    // Crear elemento de mensaje
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `
        <div style="position: fixed; top: 100px; right: 20px; background-color: var(--primary-color); 
                   color: white; padding: 15px 20px; border-radius: 8px; z-index: 10000; 
                   box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideIn 0.3s ease;">
            <i class="fas fa-check-circle"></i> ${message}
        </div>
    `;
    
    document.body.appendChild(messageDiv);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Toggle menú móvil
    document.getElementById('navToggle').addEventListener('click', function() {
        document.getElementById('navMenu').classList.toggle('active');
    });
    
    // Toggle carrito
    document.getElementById('cart-btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('cart').classList.toggle('active');
    });
    
    // Vaciar carrito
    document.getElementById('clear-cart').addEventListener('click', clearCart);
    
    // Agregar eventos de validación en tiempo real para todos los formularios
    const forms = ['contact-form', 'registration-form', 'login-form'];
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        if (form) {
            // Validación en tiempo real mientras escribes
            form.addEventListener('input', function(e) {
                if (e.target.matches('input, textarea')) {
                    // Pequeño delay para mejor UX
                    setTimeout(() => validateField(e.target), 100);
                }
            });
            
            // Validación al cambiar de campo
            form.addEventListener('blur', function(e) {
                if (e.target.matches('input, textarea')) {
                    validateField(e.target);
                }
            }, true);
        }
    });
    
    // Form submission handlers
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            showSuccessMessage('Mensaje enviado correctamente. Te contactaremos pronto.');
            this.reset();
            // Limpiar clases de validación
            this.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
        }
    });
    
    document.getElementById('registration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            showSuccessMessage('Cuenta creada exitosamente. ¡Bienvenido a TechStore!');
            this.reset();
            this.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            showPage('login');
        }
    });
    
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm(this)) {
            showSuccessMessage('Inicio de sesión exitoso. ¡Bienvenido de vuelta!');
            this.reset();
            this.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
                field.classList.remove('is-valid', 'is-invalid');
            });
            showPage('inicio');
        }
    });
    
    // Agregar botones "Agregar al Carrito" a productos existentes
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevenir que se abra el detalle del producto
            
            // Buscar información del producto desde el card
            const productCard = this.closest('.product-card');
            const productTitle = productCard.querySelector('.product-title').textContent;
            const productPriceText = productCard.querySelector('.product-price').textContent;
            const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, ''));
            
            // Crear ID del producto basado en el título
            const productId = productTitle.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[áéíóú]/g, (match) => {
                    const accents = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u' };
                    return accents[match];
                });
            
            addToCart(productId, productTitle, productPrice);
        });
    });
    
    // Cerrar carrito y menú al hacer click fuera
    document.addEventListener('click', function(e) {
        const cart = document.getElementById('cart');
        const cartBtn = document.getElementById('cart-btn');
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        
        // Cerrar carrito si click fuera del carrito y botón
        if (!cart.contains(e.target) && !cartBtn.contains(e.target)) {
            cart.classList.remove('active');
        }
        
        // Cerrar menú móvil si click fuera del menú y botón
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
});

// ===== ANIMACIONES CSS ADICIONALES =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .is-valid {
        border-color: #28a745 !important;
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25) !important;
    }
    
    .form-control:focus.is-valid {
        border-color: #28a745;
        box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);
    }
    
    .form-control:focus.is-invalid {
        border-color: #dc3545;
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.25);
    }
`;
document.head.appendChild(style);