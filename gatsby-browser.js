const html = document.querySelector('html');

exports.onInitialClientRender = () => {
  const sessionPreference = sessionStorage.getItem('theme');
  const userPrefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  if (sessionPreference){
    html.setAttribute('theme', sessionPreference);
  } else if (userPrefers && !sessionPreference){
    html.setAttribute('theme', userPrefers);
  } else {
    html.setAttribute('theme', 'light');
  }
}
