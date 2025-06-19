document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formContacto');
  const medioSelect = document.getElementById('medio');
  const bloqueEspecifique = document.getElementById('bloqueEspecifique');

  if (!formulario || !medioSelect || !bloqueEspecifique) return;

  const textareaEspecifique = bloqueEspecifique.querySelector('textarea');
  const inputNombre = document.getElementById('nombre');
  const inputEmail = document.getElementById('email');
  const textareaMensaje = document.getElementById('mensaje');

  function toggleEspecifique() {
    const isOtro = medioSelect.value === 'otro';
    bloqueEspecifique.classList.toggle('escondido', !isOtro);
    bloqueEspecifique.hidden = !isOtro;
    bloqueEspecifique.setAttribute('aria-hidden', String(!isOtro));
    if (textareaEspecifique) {
      if (isOtro) {
        textareaEspecifique.focus();
        textareaEspecifique.setAttribute('required', '');
      } else {
        textareaEspecifique.value = '';
        textareaEspecifique.removeAttribute('required');
      }
    }
  }

  toggleEspecifique();
  medioSelect.addEventListener('change', toggleEspecifique);

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    alert('Mensaje enviado correctamente');
    formulario.reset();
    toggleEspecifique();
  });
});
