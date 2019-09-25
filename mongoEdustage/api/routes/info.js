const express = require('express')
const info = require('../../models/info')

module.exports = function(router){
    router.get('/info',function(req,res){
        res.send('Hello there!!!')
    })

router.post('/info',function(req,res){
    let note = new info(req.body)
    note.save(function(err,note){
        if(err){
            return res.status(400).json(err);
        }
        res.status(200).json(note);
    })
})
}