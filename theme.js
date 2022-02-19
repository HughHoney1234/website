document.addEventListener('DOMContentLoaded', () => {
	const themeStylesheet = document.getElementById('theme');
	const themeToggle = document.getElementById('theme-toggle');
	themeToggle.addEventListener('click', () => {
		if(themeStylesheet.href.includes('light')){
		    themeStylesheet.href = '/style/dark-style.css';
		    themeToggle.innerText = 'Light Mode';
		} else {
		    themeStylesheet.href = '/style/light-style.css';
		    themeToggle.innerText = 'Dark Mode';
		}
	})
})
