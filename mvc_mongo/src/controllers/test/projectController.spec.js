const Project = require ('../../models/projectModel');
const projectController = require ('./projectController');
const httpMocks = require ('node-mocks-http');
const newProject = require ('../data/new-project.json');
const allProjects = require ('../data/all-projects.json');

jest.mock ('../../models/projectModel');

describe('projectController.create', () => {

});