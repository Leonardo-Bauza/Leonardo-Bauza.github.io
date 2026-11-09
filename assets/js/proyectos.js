/* PROYECTOS DEL PORTFOLIO
   visible: true  -> se muestra | false -> oculto.
   Ojo: lo oculto sigue siendo público en el repo. Sin claves ni datos de clientes.
   grupo: "destacado" (tarjeta) | "mas" (lista compacta).
   demo / repo: dejar "" si todavía no hay link. */
const proyectos = [
  {
    titulo: "Tu SanMiguel",
    texto: "La web municipal accesible para quien no domina lo digital. Prototipo hecho en equipo en 5 días para el Hackathon San Miguel 2026, donde ganamos becas de Google. Incluye Modo Simple, asistente por texto y voz, y app instalable. Mi parte: la API intermedia que conecta el asistente con GPT, controla el consumo de tokens y permite que el sitio estático consuma sus respuestas.",
    extra: "Próximos pasos propuestos: integración con el sistema municipal y un panel para que el personal edite contenidos.",
    equipo: "", // agregar nombres cuando tus compañeros den el OK
    demo: "", repo: "", grupo: "destacado", visible: true
  },
  {
    titulo: "Sorteos para PokemonGo Caseros",
    // CONFIRMAR este texto antes de publicar
    texto: "Web app de sorteos para la comunidad de Caseros de Pokémon GO, que ya la usó. Basada en campfire-tools (topi314), con interfaz propia.",
    extra: "Próximo paso: hacerla configurable para que sirva a todos los barrios.",
    demo: "", repo: "", grupo: "destacado", visible: true
  },
  {
    titulo: "Machete-Pokedex",
    texto: "Pokémon Family Tracker: gestiona la colección de la primera generación, diferenciando machos y hembras.",
    demo: "", repo: "https://github.com/Leonardo-Bauza/Machete-Pokedex", grupo: "mas", visible: true
  },
  {
    titulo: "bomberos-city",
    texto: "Mi primer código: HTML y CSS, con un fondo animado que simula las llamas.",
    demo: "", repo: "https://github.com/Leonardo-Bauza/bomberos-city", grupo: "mas", visible: true
  },

  /* ---- PENDIENTES: cambiar visible a true cuando estén listos ---- */
  {
    titulo: "CMS para que el cliente publique solo",
    texto: "Panel para publicar noticias sin tocar código, pensado para sitios estáticos.",
    demo: "", repo: "", grupo: "destacado", visible: false
  },
  {
    titulo: "Prospector de negocios locales",
    texto: "Consulta la API de Google Maps y lista negocios de un rubro y una zona, indicando si tienen web, Instagram y teléfono publicado.",
    demo: "", repo: "", grupo: "mas", visible: false
  },
  {
    titulo: "greisfest",
    texto: "Web para administrar a los asistentes a un evento y no depender de un grupo de WhatsApp.",
    demo: "", repo: "https://github.com/Leonardo-Bauza/greisfest", grupo: "mas", visible: false
  },
  {
    titulo: "Asistente para preguntarme lo que quieras",
    texto: "Asistente con IA que responde sobre mi perfil y mis proyectos.",
    demo: "", repo: "", grupo: "mas", visible: false
  }
];

/* ---- Render: no hace falta tocar nada de acá para abajo ---- */
(function () {
  function crear(tag, clase, texto) {
    var e = document.createElement(tag);
    if (clase) e.className = clase;
    if (texto) e.textContent = texto;
    return e;
  }
  function enlaces(p, padre) {
    [["Demo", p.demo], ["Código", p.repo]].forEach(function (l) {
      if (!l[1]) return;
      var a = crear("a", "", l[0]);
      a.href = l[1]; a.target = "_blank"; a.rel = "noopener";
      if (padre.childNodes.length) padre.appendChild(document.createTextNode("  "));
      padre.appendChild(a);
    });
  }
  var vis = proyectos.filter(function (p) { return p.visible; });
  var cont = document.getElementById("proyectos-destacados");
  var lista = document.getElementById("proyectos-mas");

  vis.filter(function (p) { return p.grupo === "destacado"; }).forEach(function (p) {
    var col = crear("div", "col-6 col-12-mobile");
    var art = crear("article", "item");
    art.appendChild(crear("h3", "", p.titulo));
    art.appendChild(crear("p", "", p.texto));
    if (p.extra) art.appendChild(crear("p", "", p.extra));
    if (p.equipo) art.appendChild(crear("p", "", "Equipo: " + p.equipo));
    var l = crear("p"); enlaces(p, l);
    if (l.childNodes.length) art.appendChild(l);
    col.appendChild(art); cont.appendChild(col);
  });

  var mas = vis.filter(function (p) { return p.grupo === "mas"; });
  mas.forEach(function (p) {
    var li = crear("li");
    li.appendChild(crear("strong", "", p.titulo));
    li.appendChild(document.createTextNode(": " + p.texto + " "));
    enlaces(p, li);
    lista.appendChild(li);
  });
  document.getElementById("mas-titulo").hidden = mas.length === 0;
})();
