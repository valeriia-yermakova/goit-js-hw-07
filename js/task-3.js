document.getElementById('name-input').addEventListener('input', function() {
    const inputEl = document.getElementById('name-input');
    const outputEl = document.getElementById('name-output');
    const trimmedValue = inputEl.value.trim();
  
    outputEl.textContent = trimmedValue || 'Anonymous';
  });
  