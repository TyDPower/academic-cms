const express = require('express');
const router = express.Router();
const mdb = require('../utils/mongobd');

const user = {
    db: "sample_airbnb",
    collect: "listingsAndReviews"
}


router.get('/', async (req, res) => {
    let dbList
    try {
        dbList = await mdb.client.db().admin().listDatabases();
    } catch (err) {
        console.error(err);
    } finally {
        if (dbList) {
            console.log('Databases: ')
            dbList.databases.forEach(db => {
                console.log(`- ${db.name}`)
            })
        } else {
            console.log({
                status: "No results found."
            })
        }
    }
    
    
});

router.get('/:id', async (req, res) => {
    const dbList = await mdb.client.db(user.db).collection(user.collect).findOne({ _id: req.params.id });
        if (dbList) {
            res.send(dbList);
        } else {
            console.log({
                status: "No results found."
            })
        }

})

module.exports = router;