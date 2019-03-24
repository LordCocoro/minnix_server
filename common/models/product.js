'use strict';


module.exports = function(Product) {

    
    Product.getOnlyUnities = (idUnity,cb) =>{
        Product.find({include: 'unity'},(err,instance)=>{
            let arrPoduct = instance;
            let response = arrPoduct.filter(e=>{
                return e.unityId == idUnity
            })
            console.log(instance);            
            cb(null,response);
        });
    };
    Product.remoteMethod (
        'getOnlyUnities',
        {
          http: {path: '/getOnlyUnities/:id', verb: 'get'},
          accepts: {arg: 'id', type: 'string',required:true},
          returns: {arg: 'Unity', type: 'Array'}
        }
    );
    Product.handleChangeError = function(err) {
        console.warn('No se puede actualizar para el modelo Product:', err);
      };
};
