var axios = require('axios');

var data = JSON.stringify({

    "collection": "inventory1",

    "database": "inventory_1",

    "dataSource": "inventory-data",

    "filter": { "age": 42 }

});
 


var config = {

    method: 'post',

    url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-zfkiy/endpoint/data/v1/action/deleteMany',

    headers: {

      'Content-Type': 'application/json',

      'Access-Control-Request-Headers': '*',

      'api-key': 'LdUvU13QbkTiFeS8JdwgFrlJmFL5TYJNmfod2lnQCeAOqfe7xeOjffy9scbXfNQA',

    },

    data: data

};

           

axios(config)

    .then(function (response) {

        console.log(JSON.stringify(response.data));

    })

    .catch(function (error) {

        console.log(error);

    });