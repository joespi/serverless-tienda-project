'use strict';

const customerUseCase = require("../../domain/uses-cases/customer");

module.exports.handler = async (event) => {
 
    const data = customerUseCase.execute(event)

    return {
      statusCode: 200,
      body: JSON.stringify(
        {data: data, table_name: process.env['CUSTOMERS_TABLE']},
        null,
        2,

      ),
    };


  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
