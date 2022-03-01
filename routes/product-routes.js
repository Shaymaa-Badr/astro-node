const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');

router.post('/create',                   // http://www.localhost3001.com/product/                   
    function(req, res) {

        const document = {
            "name": req.body.name,
            "price": req.body.price,
            "category": req.body.category,
            "description": req.body.description,
        };

        ProductModel
        .create(document)
        .then(
            function(dbDocument) {
                res.json(
                    {
                        document: dbDocument,
                        message: "Product created"
                    }
                );
            }
        )
        .catch(
            function(dbError) {
                console.log('DB product create error', dbError);
                res.json(
                    {
                        message: "Product create error"
                    }
                );
            }
        )
    }
);

module.exports = router;