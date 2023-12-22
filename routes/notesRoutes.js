const router = require("express").Router();

let temp_notes = [
    {
        "id":"1",
        "title": "note title 1",
        "content" : "this is just a test notes list",
        "created_at" : "12/12/23 12:30 PM"
    },
    {
        "id":"2",
        "title": "note title 2",
        "content" : "this is just a test notes list",
        "created_at" : "12/12/23 12:30 PM"
    },
    {
        "id":"3",
        "title": "note title 3",
        "content" : "this is just a test notes list",
        "created_at" : "12/12/23 12:30 PM"
    }
]

router.get("/get_all", (req, res)=>{
    res.send(temp_notes)
})




module.exports = router;