'use strict';

module.exports = function(server) {

  // TODO(ritch) this should be unecessary soon....
  var Product = server.models.Product;
  server.model(Product.getChangeModel());
  var Category = server.models.Category;
  server.model(Category.getChangeModel());
  var Unity = server.models.Unity;
  server.model(Unity.getChangeModel());
  var Impost = server.models.Impost;
  server.model(Impost.getChangeModel());
  var Type = server.models.Type;
  server.model(Type.getChangeModel());
  var Packaging = server.models.Packaging;
  server.model(Packaging.getChangeModel());
};
