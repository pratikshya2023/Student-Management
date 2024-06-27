const db = require('../models');
const Student = db.students;

exports.getAllStudents = (req, res) => {
  Student.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving students."
      });
    });
};

exports.getStudentById = (req, res) => {
  const id = req.params.id;
  Student.findByPk(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error retrieving Student with id=" + id
      });
    });
};

exports.createStudent = (req, res) => {
  const student = {
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade
  };

  Student.create(student)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Student."
      });
    });
};

exports.updateStudent = (req, res) => {
  const id = req.params.id;
  Student.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Student with id=${id}. Maybe Student was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Error updating Student with id=" + id
      });
    });
};

exports.deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Student was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Student with id=${id}. Maybe Student was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Could not delete Student with id=" + id
      });
    });
};
