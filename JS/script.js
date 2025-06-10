document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded disparado en script externo');
  const medioSelect = document.getElementById('medio');
  const bloqueEspecifique = document.getElementById('bloqueEspecifique');
  if (!medioSelect || !bloqueEspecifique) {
    console.error('No se encontraron "medio" o "bloqueEspecifique"');
    return;
  }
  const textarea = bloqueEspecifique.querySelector('textarea');
  function toggleEspecifique() {
    console.log('toggleEspecifique:', medioSelect.value);
    const isOtro = medioSelect.value === 'otro';
    bloqueEspecifique.classList.toggle('escondido', !isOtro);
    bloqueEspecifique.hidden = !isOtro;
    bloqueEspecifique.setAttribute('aria-hidden', String(!isOtro));
    if (textarea) {
      if (isOtro) {
        textarea.focus();
        textarea.setAttribute('required', '');
      } else {
        textarea.value = '';
        textarea.removeAttribute('required');
      }
    }
  }
  toggleEspecifique();
  medioSelect.addEventListener('change', toggleEspecifique);
  console.log('Listener añadido en script externo');
});