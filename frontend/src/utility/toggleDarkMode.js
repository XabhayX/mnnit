import toast from 'react-hot-toast';

const toggleDarkMode = () => {
  document.querySelector('html').classList.toggle('dark');
  
  const isDark = document.querySelector('html').classList.contains('dark');
  
  if(isDark) localStorage.setItem('darkModeOn' , true)
  else localStorage.removeItem('darkModeOn')

  const toastId = 'theme-toast';

  toast.dismiss(toastId); 

  toast(isDark ? 'Hello Darkness!' : 'Back to Light!', {
    id: toastId, 
    icon: isDark ? '🌙' : '☀️',
    style: {
      borderRadius: '10px',
      background: isDark ? '#fff' : '#000',
      color: isDark ? '#000' : '#fff',
    },
  });

};

export { toggleDarkMode };
