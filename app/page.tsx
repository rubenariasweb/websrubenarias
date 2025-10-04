"use client";

import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // 👇 Inicializamos el carrusel con autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3000, // cada 3s pasa al siguiente
        stopOnInteraction: true,
      }),
    ]
  );

  // Controles manuales
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);


  // Array de proyectos definido FUERA del JSX para evitar recreaciones
  const proyectos = [
    {
      id: 1,
      title: "Experiencias de lujo",
      description:
        "Descubre experiencias unicas a traves de este sitio web",
      image: "/images/proyecto1.png",
      url: "https://lux-experience.vercel.app/",
    },
    {
      id: 2,
      title: "Escena Viva - Productora de Teatro",
      description:
        "Sitio web para una productora teatral, mostrando su cartelera de obras, fechas y venta de entradas.",
      image: "/images/proyecto2.png",
      url: "https://almavidalproducciones.com",
    },
    {
      id: 3,
      title: "Reborn Dreams",
      description:
        "Escaparate online de muñecos reborn, con galería de modelos y detalles de cada creación artesanal.",
      image: "/images/proyecto3.png",
      url: "https://rincondelaratita.com",
    },
    {
       id: 4,
      title: "CV Online Interactivo",
      description:
        "Currículum digital interactivo con experiencia laboral, proyectos destacados y contacto directo.",
      image: "/images/proyecto5.png",
      url: "https://arias-security.netlify.app/",
    },
    {
        id: 5,
      title: "CoachFit - Entrenamiento & Nutrición",
      description:
        "Plataforma para un coach personal, con planes de entrenamiento, asesoría nutricional y reservas online.",
      image: "/images/proyecto4.png",
      url: "https://entrena-con-sentido.vercel.app/",
    },
  ];


  // Función reutilizable para hacer scroll con offset por header sticky
  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) {
        console.warn(`No se encontró la sección #${id}`);
        return;
      }
      const header = document.querySelector("header");
      const headerHeight = header ? (header as HTMLElement).offsetHeight : 0;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 8;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }, 180);
  };

  return (
    // Quitado overflow-hidden para permitir scroll vertical
    <main className="relative min-h-screen text-white font-inter overflow-hidden">
      <div className="bg-[url('/images/portada-ia.png')] bg-cover bg-center bg-fixed">
        <div className="relative">
          <div className="absolute inset-0 bg-black/80 -z-10" />

        <header className="flex justify-between items-center px-6 md:px-8 py-4 md:py-6 bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
  <a href="/" className="flex items-center">
    <img
      src="/images/logo.png"
      alt="Logo de Ruben Arias"
      className="h-16 sm:h-20 md:h-24 w-auto hover:scale-105 transition-transform"
    />
  </a>

  <nav className="hidden md:flex gap-10 md:gap-14">
    <a
      href="#about"
      className="text-lg md:text-2xl font-medium text-gray-200 hover:text-[#00b4d8] transition"
    >
      Sobre mí
    </a>
    <a
      href="#services"
      className="text-lg md:text-2xl font-medium text-gray-200 hover:text-[#00b4d8] transition"
    >
      Servicios
    </a>
    <a
      href="#portfolio"
      className="text-lg md:text-2xl font-medium text-gray-200 hover:text-[#00b4d8] transition"
    >
      Portafolio
    </a>
    <a
      href="#contact"
      className="text-lg md:text-2xl font-medium text-gray-200 hover:text-[#00b4d8] transition"
    >
      Contacto
    </a>
  </nav>

  <button
    onClick={() => setIsOpen(!isOpen)}
    className="md:hidden text-white hover:text-[#00b4d8] transition"
  >
    {isOpen ? <X size={32} /> : <Menu size={32} />}
  </button>
</header>


        {/* Overlay menú móvil */}
{isOpen && (
  <div className="fixed inset-0 z-40 md:hidden flex flex-col">
    {/* Fondo semitransparente */}
    <div
      className="absolute inset-0 bg-black/85 backdrop-blur-md z-10"
      onClick={() => setIsOpen(false)}
    />

    {/* Contenido del menú */}
    <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-10">
      {[
        { id: "about", label: "Sobre mí" },
        { id: "services", label: "Servicios" },
        { id: "portfolio", label: "Portafolio" },
        { id: "contact", label: "Contacto" },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => handleScrollTo(item.id)}
          className="text-2xl font-semibold text-gray-200 hover:text-[#00b4d8] transition"
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
)}


  {/* Capa oscura fonfo */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40 min-h-screen z-10">
         
       
        
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00b4d8] to-[#48cae4] bg-clip-text text-transparent"
        >
           Tu éxito online comienza aquí
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="relative z-10 text-lg md:text-xl max-w-2xl text-gray-200"
        >
          Tu web es la <span className="text-[#00b4d8] font-semibold">puerta a tu éxito online.</span> Diseñada para generar confianza, atraer clientes y transmitir seguridad.
        </motion.p>

 {/* Boton de Hero a Contacto
        <a
  href="#contact"
  className="relative z-10 mt-8 inline-block px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg transition-all"
>
  Quiero mi web →
</a>
*/}
      </section>
 

      {/* Sobre mí */}
      <section id="about" className="relative px-6 py-28 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
       

        {/* Texto */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="relative z-10 text-3xl font-bold mb-6 text-white">
            Un poco sobre mí
          </h2>
          <p className="relative z-10 text-gray-300 text-lg leading-relaxed mb-4">
            Actualmente trabajo como <span className="text-white font-semibold">desarrollador en BBVA</span>, donde participo en la creación de soluciones digitales <span className="text-[#00b4d8] font-semibold">innovadoras</span> y seguras.
            <br /><br />
            Cuento con una sólida base de estudios en programación, varios proyectos desarrollados y una gran pasión por seguir creciendo dentro del mundo tecnológico.
          </p>
          <a
            href="#services"
            className="relative z-10 inline-block mt-4 px-5 py-3 rounded-lg border border-[#00b4d8] text-white hover:bg-[#00b4d8] hover:text-black transition-all"
          >
            Ver lo que ofrezco →
          </a>
        </motion.div>

        {/* Imagen 
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.2 }} 
          className="bg-[#222]/70 p-6 rounded-xl shadow-md backdrop-blur-sm"
        >
          <img src="/images/impresion3d.png" alt="Ejemplo" className="rounded-lg" />
        </motion.div>
        */}
      </section>
    </div>

    {/* BLOQUE 2: Servicios */}
<div className="relative bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0c0c0c]">
  <section id="services" className="relative px-8 py-28 max-w-6xl mx-auto z-10">

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
  className="text-center mb-20"
>
  <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00d9ff] via-[#9b4dff] to-[#ff2ef9] bg-clip-text text-transparent animate-textGlow">
    ¿Por qué tu negocio necesita una web?
  </h3>

  <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
    Hoy en día, <span className="text-[#00d9ff] font-semibold">8 de cada 10 clientes</span> buscan en Internet antes de comprar.
    Si tu negocio no está online, estás <span className="text-[#ff2ef9] font-semibold">perdiendo ventas</span>.
    Una web profesional te da:
  </p>

  <motion.ul
    className="mt-8 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.15 },
      },
    }}
  >
    {[
      { icon: "📈", title: "Más clientes", desc: "gracias a la visibilidad en Google." },
      { icon: "🤝", title: "Credibilidad", desc: "y confianza en tu marca." },
      { icon: "🕑", title: "Disponibilidad 24/7", desc: "tu negocio nunca duerme." },
      { icon: "💡", title: "Diferenciación", desc: "frente a tu competencia." },
    ].map((item, idx) => (
      <motion.li
        key={idx}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="bg-gradient-to-b from-[#1a1a1a]/70 to-[#0f0f0f]/70 p-4 rounded-xl border border-[#00d9ff]/30 hover:border-[#00d9ff] shadow-md transition-all"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <p className="text-gray-300">
            <span className="text-white font-semibold">{item.title}</span> {item.desc}
          </p>
        </div>
      </motion.li>
    ))}
  </motion.ul>

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #00d9ff" }}
    className="inline-block mt-12 px-8 py-4 rounded-lg font-semibold text-lg bg-[#00b4d8] hover:bg-[#0096c7] text-white shadow-md transition-all"
  >
    🚀 Haz crecer tu negocio hoy
  </motion.a>
</motion.div>



    {/* Título Servicios */}
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d9ff] via-[#9b4dff] to-[#ff2ef9] bg-clip-text text-transparent animate-textGlow"
    >
      Servicios
    </motion.h2>

    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ delay: 0.2 }}
      className="text-center text-gray-300 text-lg max-w-3xl mx-auto mb-16"
    >
      Transformo ideas en soluciones digitales modernas, seguras y atractivas.
      Cada servicio está pensado para que tu negocio gane confianza, visibilidad y resultados reales.
    </motion.p>

    {/* Grid de servicios fila 1 */}
    <motion.div
      className="grid md:grid-cols-3 gap-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Azul */}
      <motion.div 
  variants={fadeInUp} 
  className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#00d9ff]/40 hover:border-[#00d9ff] hover:shadow-[0_0_25px_#00d9ff] transition-all border-animated"
>
  <h3 className="text-2xl font-semibold mb-4 text-[#00d9ff]">Entrega rápida</h3>
  <p className="text-gray-300">
    Tu página web lista en <span className="text-[#00d9ff] font-semibold">menos de 20 días</span>, 
    para que tu negocio empiece a vender online lo antes posible.
  </p>
</motion.div>

      {/* Morado */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#9b4dff]/40 hover:border-[#9b4dff] hover:shadow-[0_0_25px_#9b4dff] transition-all border-animated">
        <h3 className="text-2xl font-semibold mb-4 text-[#9b4dff]">Seguridad Digital</h3>
        <p className="text-gray-300">Implementación de buenas prácticas y soluciones seguras, inspiradas en mi <span className="text-[#9b4dff] font-semibold"> experiencia en BBVA. </span></p>
      </motion.div>

      {/* Azul */}
         <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#00d9ff]/40 hover:border-[#00d9ff] hover:shadow-[0_0_25px_#00d9ff] transition-all border-animated">
        <h3 className="text-2xl font-semibold mb-4 text-[#00d9ff]">Diseño web profesional</h3>
        <p className="text-gray-300">Creación de páginas web modernas, funcionales y optimizadas para todos los dispositivos.</p>
      </motion.div>

      
    </motion.div>

    {/* Grid de servicios fila 2 */}
    <motion.div
      className="grid md:grid-cols-3 gap-10 mt-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Morado */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#9b4dff]/40 hover:border-[#9b4dff] hover:shadow-[0_0_25px_#9b4dff] transition-all border-animated">
        <h3 className="text-2xl font-semibold mb-4 text-[#9b4dff]">Diseño Responsivo</h3>
        <p className="text-gray-300">Sitios adaptados a cualquier dispositivo, con un diseño limpio y profesional.</p>
      </motion.div>

      {/* Azul */}
     <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#00d9ff]/40 hover:border-[#00d9ff] hover:shadow-[0_0_25px_#00d9ff] transition-all border-animated">
        <h3 className="text-2xl font-semibold mb-4 text-[#00d9ff]">Visibilidad en Google</h3>
        <p className="text-gray-300">Tus clientes podrán encontrarte fácilmente en Google y no perderas ventas.
 </p>
      </motion.div>


      {/* Morado */}
      <motion.div variants={fadeInUp} className="bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 p-8 rounded-2xl shadow-lg text-center border border-[#9b4dff]/40 hover:border-[#9b4dff] hover:shadow-[0_0_25px_#9b4dff] transition-all border-animated">
        <h3 className="text-2xl font-semibold mb-4 text-[#9b4dff]">Soporte & Mantenimiento</h3>
        <p className="text-gray-300">Aseguro que tu web se mantenga actualizada, segura y funcionando sin interrupciones.</p>
      </motion.div>
    </motion.div>
  </section>
</div>

{/* BLOQUE 3: Portafolio + Contacto */}
<div className="relative bg-gradient-to-b from-[#0c0c0c] via-[#111111] to-[#0a0a0a]">
  <section id="portfolio" className="relative px-8 py-28 max-w-6xl mx-auto z-10">
  <motion.h2
    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#00d9ff] via-[#9b4dff] to-[#ff2ef9] bg-clip-text text-transparent animate-textGlow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Portafolio
  </motion.h2>

  <motion.p
    className="text-center text-gray-300 text-xl max-w-3xl mx-auto mb-10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    Algunos de mis proyectos recientes que muestran cómo transformo ideas
    en experiencias digitales.
  </motion.p>

  {/* Carrusel */}
  <div className="overflow-hidden" ref={emblaRef}>
    <div className="flex">
      {proyectos.map((proyecto) => (
       <a
  key={proyecto.id}
  href={proyecto.url}
  target="_blank"
  rel="noopener noreferrer"
  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] mx-3"
>
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="h-full bg-gradient-to-b from-[#1a1a1a]/80 to-[#0f0f0f]/80 
               p-4 rounded-2xl shadow-lg border border-[#00d9ff]/40 
               hover:shadow-[0_0_25px_#00d9ff] transition-transform duration-300"
  >
    <img
      src={proyecto.image}
      alt={proyecto.title}
      className="rounded-lg mb-4 w-full object-cover"
      loading="lazy"
      draggable={false}
    />
    <h3 className="text-2xl font-semibold text-[#00d9ff] mb-4">
      {proyecto.title}
    </h3>
    <p className="text-gray-300 text-base">{proyecto.description}</p>
  </motion.div>
</a>


      ))}
    </div>
  </div>

  {/* Controles */}
  <div className="flex justify-center gap-6 mt-6">
    <button
      onClick={scrollPrev}
      aria-label="Proyecto anterior"
      className="p-3 rounded-full bg-[#1a1a1a] hover:bg-[#00d9ff]/30"
    >
      ←
    </button>
    <button
      onClick={scrollNext}
      aria-label="Proyecto siguiente"
      className="p-3 rounded-full bg-[#1a1a1a] hover:bg-[#00d9ff]/30"
    >
      →
    </button>
  </div>
</section>


 {/* Contacto */}
<motion.section
  id="contact"
  className="relative px-6 py-28 max-w-3xl mx-auto text-center z-10"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold mb-8 text-white">
    Hablemos
  </h2>
  <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
    Tener una web ya no es un lujo, es la clave para conseguir clientes y destacar.
    Cuéntame tu proyecto y te responderé con una propuesta adaptada a ti.
  </p>

  {/* Formulario conectado a Formspree */}
  <form action="https://formspree.io/f/xeolpyop" method="POST" className="grid gap-6">
    <input
      type="text"
      name="nombre"
      placeholder="Nombre"
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all"
      required
    />
    <input
      type="email"
      name="correo"
      placeholder="Correo"
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all"
      required
    />
    <textarea
      name="mensaje"
      placeholder="Mensaje"
      rows={5}
      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 text-white placeholder-gray-400 transition-all"
      required
    ></textarea>

    <button
      type="submit"
      className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg transition-all"
    >
      Enviar Mensaje
    </button>

    <p className="mt-6 text-gray-300 text-lg font-medium">
     
    </p>
  </form>



  {/* Botones de contacto directo */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <a
      href="https://wa.me/34666603921" 
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0a11.78 11.78 0 0 0-8.52 3.48A11.78 11.78 0 0 0 0 12c0 2.09.54 4.1 1.57 5.9L0 24l6.25-1.64A11.94 11.94 0 0 0 12 24a11.78 11.78 0 0 0 8.52-3.48A11.78 11.78 0 0 0 24 12c0-3.18-1.24-6.17-3.48-8.52ZM12 21.5c-1.77 0-3.49-.46-5-1.33l-.36-.21-3.71.97.99-3.62-.23-.37A9.52 9.52 0 0 1 2.5 12C2.5 6.76 6.76 2.5 12 2.5c2.55 0 4.95.99 6.75 2.75A9.48 9.48 0 0 1 21.5 12c0 5.24-4.26 9.5-9.5 9.5Zm5.23-7.34c-.29-.15-1.7-.84-1.96-.94s-.45-.15-.64.15-.74.94-.91 1.13-.34.22-.63.07a7.77 7.77 0 0 1-2.29-1.42 8.64 8.64 0 0 1-1.61-2c-.17-.29 0-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.51.07-.77.36s-1.02.99-1.02 2.42 1.05 2.81 1.19 3c.15.19 2.07 3.16 5.01 4.43.7.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.57-.08 1.7-.7 1.94-1.38.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34Z"/>
      </svg>
      WhatsApp
    </a>

    <a
      href="mailto:rubenariasweb@gmail.com" 
      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-red-500 hover:bg-red-600 text-white shadow-lg transition-all"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 13.065 1.5 6V18h21V6L12 13.065zM12 11 1.5 4.5h21L12 11z"/>
      </svg>
      Correo
    </a>
  </div>

  <p className="mt-10 text-xl font-medium bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
  🚀 El mejor momento para empezar fue ayer. El segundo mejor es{" "}
  <span className="font-bold underline decoration-cyan-400">hoy</span>.
</p>
</motion.section>

</div>

      </div>
    </main>
  );
}
