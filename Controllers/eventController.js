const eventModel = require('../models/eventModel')
const path = require("path")


exports.create = async (req, res) => {
    const event = await eventModel({
        name: req.body.name,
        additional: req.body.text,
        date: req.body.date,
        user: req.body.email,
        done: false
    })
    event
        .save(event)
        .then(data=> {
            res.send(data)
        })
        .catch (error => {
            res.status(500).send({
                message: error.message || "Some error"
            })
        })
    res.render(path.resolve("public/html/index.ejs"))
};
exports.find = (req, res) => {
    eventModel.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || "Error occurred while looking for a event"})
        })
};

exports.update = async (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    await eventModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Event not found.`
            });
        }else{
            res.send({ message: "Event updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
