
const db = require("../models");

const Table = db.table;
exports.allAccess = (req, res) => {
  Table.find({}, (err, tables) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    let ret = [];
    for(let i = 0; i < tables.length; i++) {
        ret.push({
            id: tables[i].id,
            name: tables[i].name,
        });
        }
    res.status(200).send(ret);
  });
};

exports.addTable = (req, res) => {
    const table = new Table({
        name: req.body.name,
    });
    table.save((err, table) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "Table was added successfully!", id: table._id });
    });
}

exports.getTable = (req, res) => {
    Table.findById(req.params.id, (err, table) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.status(200).send(table);
    });
}