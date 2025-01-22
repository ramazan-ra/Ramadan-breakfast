function copyText(text) {
    navigator.clipboard.writeText(text)
      .then(() => showToast())
      .catch(err => console.error('Failed to copy text:', err));
  }
  function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }