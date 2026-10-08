const root = document.documentElement;
const captions = { blossom: 'A little leadership energy.', bubbles: 'Curiosity is a superpower.', buttercup: 'Built to tackle tough problems.' };
document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    root.dataset.power = theme;
    document.querySelectorAll('[data-theme]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('power-caption').textContent = captions[theme];
    document.querySelector('meta[name="theme-color"]').content = { blossom: '#fff4f8', bubbles: '#f0f8ff', buttercup: '#f3fbee' }[theme];
  });
});
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}));
document.addEventListener('click', event => {
  if (navigation.classList.contains('is-open') && !navigation.contains(event.target) && !menu.contains(event.target)) {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }
});
window.matchMedia('(max-width: 720px)').addEventListener('change', () => {
  navigation.classList.remove('is-open');
  menu.setAttribute('aria-expanded', 'false');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    menu.focus();
  }
});
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('shravani.umale99@gmail.com');
    status.textContent = 'Email copied!';
  } catch {
    status.textContent = 'Select the email address to copy it.';
  }
});
