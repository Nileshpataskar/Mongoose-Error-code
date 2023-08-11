const collection = require("./projectStructure");

const userdetails = async (req, res) => {
  const data = req.body;
  const result = await collection.create(data);
  res.send(result);
};
const manyUserDetails = async (req, res) => {
  const muldata = req.body;
  const studata = muldata.map((detail) => {
    return {
      fname: detail.fname,
      lname: detail.lname,
      phone: detail.phone,
      age: detail.age,
    };
  });
  const data=await collection.insertMany(studata)
  res.send({msg:"multiple data",data})
};

module.exports = { userdetails,manyUserDetails };
