const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', { nombre_del_css: 'styles1', title: 'Soy el INDEX', name: 'Piqué' })
})

router.get('/list', (req, res) => {
    res.render('users', { 
        nombre_del_css: 'styles2', 
        title: 'Soy la lista de usuarios',
        name: 'Shakira'
    })
})

module.exports = router