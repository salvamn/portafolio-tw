var contenedor_habilidades_iconos = document.getElementById('contenedor-habilidades-iconos')
var contenedor_habilidades_barras = document.getElementById('contenedor-habilidades-barra')

var btnIconos = document.getElementById('btn-iconos')


btnIconos.addEventListener('click', function () {
    if (contenedor_habilidades_iconos.classList.contains('flex')) {
        // cambiamos texto al boton
        btnIconos.textContent = 'iconos'
        // ocultamos contenedor de iconos
        contenedor_habilidades_iconos.classList.remove('flex')
        contenedor_habilidades_iconos.classList.add('hidden')
        // mostramos contenedor de barras
        contenedor_habilidades_barras.classList.remove('hidden')
        contenedor_habilidades_barras.classList.add('flex')
    }
    else if (contenedor_habilidades_iconos.classList.contains('hidden')) {
        // cambiamos texto al boton
        btnIconos.textContent = 'barras'
        // ocultamos contenedor de barras
        contenedor_habilidades_barras.classList.remove('flex')
        contenedor_habilidades_barras.classList.add('hidden')
        // mostramos contenedor de iconos
        contenedor_habilidades_iconos.classList.remove('hidden')
        contenedor_habilidades_iconos.classList.add('flex')
    }
})

