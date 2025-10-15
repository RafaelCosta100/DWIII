var projectModel = require('../model/projectModel');

exports.getProjects = async function(req, res){
    try{
        const result = await projectModel.find().populate('assignedTo')
    } catch (error){
            res.status(500).json(error);
        }
    }

    exports.create = async function (req, res) {
        let project = new projectModel(
            {
                title: req.body.title,
                description: req.body.description,
                assignedTo: req.body.assignedTo
            }
        );
        project.save()
            .then(res.status(201).send(project.toJSON()))
            .catch((error) => {
                res.status(500).send({ message: `${error.message} - Falha ao cadastrar o projeto.` });
            })
           
    };

    exports.details = async function (req, res){
        try{
            const result = await projectModel.findById(req.params.id).populate('assignedTo')
            res.status(200).json(result);
    } catch (error) {
        res.status(500).send({ message: `${error.message} - Id do projeto não localizado.` });
    };
};
