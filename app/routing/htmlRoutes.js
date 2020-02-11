const path = require("path");

module.exports = function(app){
    app.get("/survey", function(req,res){
        //return survery page
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
}