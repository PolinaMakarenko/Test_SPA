const tableRouter = require('express').Router();
const { Table } = require('../db/models');

tableRouter.route('/').get(async (req, res) => {
    try {
        const trackAll = await Table.findAll({
        });
        res.status(200).json(trackAll);
    } catch (error) {
        res.status(502).json({ message: error.message });
    }
});
// tableRouter.route('/:id').put(async (req, res) => {
//     const { id } = req.params;
//     const { field, item } = req.body;
//     console.log(field, item);
//     try {
//         const dog = await Dog.findOne({ where: { id } });
//         dog[field] = item;
//         dog.save();
//         console.log(dog);
//         res.status(200).json(dog);
//         return;
//     } catch (error) {
//         res.status(502).json({ message: error.message });
//     }
// });

module.exports = tableRouter;