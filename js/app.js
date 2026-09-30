document.addEventListener('DOMContentLoaded', async () => {
	const mount = document.querySelector('#biblioteca-component');

	if (!mount) return;

	try {
		const response = await fetch('./componentes/biblioteca.html');
		if (!response.ok) throw new Error(`No se pudo cargar biblioteca: ${response.status}`);
		mount.innerHTML = await response.text();
	} catch (error) {
		console.error(error);
	}
});
