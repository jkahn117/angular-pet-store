'use strict'

/**

 Handler functions for Pets routes.

 https://github.com/vitaly-t/pg-promise/wiki/Learn-by-Example

 */

const db = require('../db');

/**

 LIST

 */
exports.list = function(req, res) {
  db.any('select * from pets', [])
    .then( (result) => {
      res.status(200)
         .json({
            success: true,
            data:    result
         });
    })
    .catch( (error) => {
      throw error;
    });
};


/**

 GET

 */
exports.get = function(req, res) {
  db.one('select * from pets where id=$1 limit 1', [ req.params.id ])
    .then( (result) => {
      res.status(200)
         .json({
            success: true,
            data:    result
         });
    })
    // TODO: understand why this error needs to be handled this way, other Node throws an
    //       unhandled promise error
    .catch( QueryResultError => {
      res.status(404)
        .json({
          success: false,
          data:    {},
          message: QueryResultError.message
        });
    })
    .catch( (error) => {
      throw error;
    });
};

/**
  
 CREATE

 */
exports.create = function(req, res) {
  db.one('insert into pets(name, category, age, photourl, status) '
    + 'values(${name}, ${category}, ${age}, ${photourl}, ${status}) returning id', req.body)
    .then( (result) => {
      res.status(200)
        .json({
          success: true,
          data:    {
                      id:       result.id,
                      name:     req.body.name,
                      category: req.body.category,
                      age:      req.body.age,
                      status:   req.body.status,
                      thumburl: "",
                      photourl: req.body.photoUrl
                   }
        });
    })
    .catch( QueryResultError => {
      res.status(404)
        .json({
          success: false,
          message: QueryResultError.message
        });
    })
    .catch( (error) => {
      throw error;
    });
};


/**

 UPDATE

 */
exports.update = function(req, res) {
  var pet      = req.body;
  pet['petId'] = parseInt(req.params.id);
  db.none('update pets set name=${name}, category=${category}, age=${age}, photourl=${photourl}, status=${status} '
    + 'where id=${petId}', pet)
    .then( (result) => {
      res.status(200)
        .json({
          success: true,
          message: 'Update successful'
        });
    })
    .catch( QueryResultError => {
      res.status(404)
        .json({
          success: false,
          data:    {},
          message: QueryResultError.message
        });
    })
    .catch ( (error) => {
      throw error;
    });
};


/**

 DELETE

 */
exports.delete = function(req, res) {
  var petId = parseInt(req.params.id);
  db.result('delete from pets where id=$1', petId)
    .then( (result) => {
      if (result.rowCount > 0) {
        res.status(200)
          .json({
            success: true,
            message: `Removed ${result.rowCount} pets`
          })
      }
      else {
        res.status(404)
          .json({
            success: false,
            message: `No pet found with id ${petId}`
          })
      }
    })
    .catch( (error) => {
      throw error;
    });
};

