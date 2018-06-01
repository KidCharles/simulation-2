module.exports = {


    getHouses: (req, res) => {
        const db = req.app.get('db');
        db.get_houses()
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    },

    deleteHouse: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params
        console.log(req.params)
        //YOU NEED TO SEND INFO IN SQUARE BRACKETS!!
        db.delete_house([id])
            .then(houses => res.status(200).send(houses))
            .catch((err) => {
                console.log(err)
                res.status(500).send()
            })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db');
        const {name, address, city, state, zip, img, mortgage, rent} = req.body
        db.add_house([name, address, city, state, zip, img, mortgage, rent])
            .then(houses => res.status(200).send(houses))
            .catch(() => res.status(500).send())
    }




}