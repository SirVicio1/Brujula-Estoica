function startAudit() {
  const problem = document.getElementById("problem").value.trim();
  if (!problem) return alert("Escribe tu problema.");

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("audit").classList.remove("hidden");
}

function generateStoicResponse() {
  const responseDiv = document.getElementById("response");
  document.getElementById("audit").classList.add("hidden");
  responseDiv.classList.remove("hidden");

  responseDiv.innerHTML = `
    <h2>📜 Visión Estoica</h2>

    <h3>1. El Consejo (Razón)</h3>
    <p>
      Lo que te perturba no es el evento, sino el juicio que haces sobre él.
      Distingue con claridad lo que pertenece a tu <b>prohairesis</b> (tu elección)
      de aquello que es externo e indiferente.
    </p>

    <h3>2. La Lección (Sabiduría)</h3>
    <p>
      Epicteto enseñó que “no nos afecta lo que sucede, sino lo que pensamos
      acerca de lo que sucede”. Este principio sigue siendo válido en el mundo
      moderno: el hecho es neutro, el sufrimiento es opcional.
    </p>

    <h3>3. La Solución Estoica (Virtud)</h3>
    <p>
      Actúa desde la <b>Templanza</b>: reduce la reacción emocional.
      Desde la <b>Sabiduría</b>: ajusta tu juicio.
      El mundo no debe obedecer; tu mente sí.
    </p>

    <h3>4. Ejercicio Práctico (Ascesis)</h3>
    <p>
      Hoy, escribe este evento como si le hubiera ocurrido a otra persona.
      Luego responde: ¿qué consejo racional le darías?
    </p>
  `;
}
