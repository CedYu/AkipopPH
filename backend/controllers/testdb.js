import db from "../models/dbFuncs.js";

import test from "../models/test.js"

export const testdb={
  //Test function. Free to break
  dbConnect: async function(req, res){
    let test1 = req.body.test3;
    console.log(test1)
    db.insertOne(test, req.body, function(result){
      res.send(test1)
    })
  }
}
export default testdb