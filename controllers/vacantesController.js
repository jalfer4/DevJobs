exports.formularioNuevaVacante = (req, res) => {
    res.render('Nueva-Vacante',{
        nombrePagina : 'Nueva vacante',
        tagline: 'Llena el formulario y publica tu nueva vacante',
        barra : true,
        boton : true
    })
}