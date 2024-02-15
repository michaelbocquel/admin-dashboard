// ----- GROW SIDEBAR ON HOVER ----- \\

const sidebar = document.querySelector('.sidebar')
sidebar.addEventListener('mouseenter', () => {
	document.body.style.gridTemplateColumns = '300px 1fr'
})
sidebar.addEventListener('mouseleave', () => {
	document.body.style.gridTemplateColumns = '160px 1fr'
})