const Parent = require('../models/Parent');
const Child = require('../models/Child');

const postParent = async (request, response) => {
  try {
  const newUser = request.body;
  const createdUser = await Parent.create(newUser);
  response.status(200).json({ parent: createdUser, msg: " parent added successfully" });
  } catch (error) {
  console.error("Error on adding user:", error);
  response
  .status(500)
  .json({ msg: "Error on adding user", error: error.message });
  }
  };
  const postChild = async (req, response) => {
    try {
      const { parentName, parentEmail, parentPassword, childName, childAge, childLearning } = req.body;
  
      // Create the parent
      const createdUser = await Parent.create({
        name: parentName,
        email: parentEmail,
        password: parentPassword,
      });
  
      // Create the child associated with the parent
      const createdChild = await createdUser.createChild({
        name: childName,
        age: childAge,
        learning: childLearning,
      });
  
      response.status(200).json({ parent: createdUser, child: createdChild, msg: "Parent and child added successfully" });
    } catch (error) {
      console.error("Error on adding user:", error);
      response.status(500).json({ msg: "Error on adding user", error: error.message });
    }
  };
  

           


module.exports = { postParent, postChild };
