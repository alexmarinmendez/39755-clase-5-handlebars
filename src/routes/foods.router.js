const { Router } = require('express')
const router = Router()

const foods = [
    {name: 'Banana', price: 10},
    {name: 'Wine', price: 10},
    {name: 'Hot dogs', price: 10},
    {name: 'Hamburguers', price: 10},
    {name: 'Beers', price: 10},
]

router.get('/', (req, res) => {
    const { user, role } = req.query
    res.render('foods', {
        user,
        isAdmin: role == 'admin',
        foods
    })
})

module.exports = router