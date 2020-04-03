const CourseModel = require("../models/CourseModel")

class CourseModel {

    static async JavaScript(req, res) {
        let JavaScript = await CourseModel.find({})
        res.json(JavaScript)
    }

    static async Java(req, res) {
        let Course = await CourseModel.findById({
            _id: req.params.id
        })
        res.json(Java)
    }

    static Kotlin(req, res) {
        CourseModel.create(req.body)
        res.send(this.Kotlin)
    }

    static async alterar(req, res) {

        
        let id = req.body._id

        var cat = {
            descricao: req.body.descricao
        }

        await CourseModel.findByIdAndUpdate({
            _id: id
        }, cat)

        res.send('')

}
}

module.exports = CourseModel