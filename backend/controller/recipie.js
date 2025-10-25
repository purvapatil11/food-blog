const Recipies = require("../models/schema")

// -----------------get all recipies-------
const getRecipies = async(req,res) => {
    const recipie = await Recipies.find()
    return res.json(recipie)
  }
  //------------------to find recipie---------------
const getRecipie = async(req,res) => {
    const recipie = await Recipies.findById(req.params.id)
    res.json(recipie)
}
//----------------------to add new recipe-----------------------------------------
const addRecipie = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;

    if (!title || !ingredients || !instructions) {
      return res.json({ message: "Required fields can't be empty" });
    }

    const newRecipie = await Recipies.create({
      title,
      ingredients,
      instructions,
      time,
    });

    return res.json(newRecipie);
  } catch (error) {
    console.error("Error adding recipe:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//-----------------to edit recipie-------------------
const editRecipie =async(req,res) => {
    const { title, ingredients, instructions, time } = req.body;
    let recipie = await Recipies.findById(req.params.id)
    try{

    
    if(recipie){
        await Recipies.findByIdAndUpdate(req.params.Id, req.body,{new:true})
        res.json({title, ingredients, instructions, time })
    }
 }
 catch(err){
    return res.status(404).json({message:"error"})    
 }
};

//------------------------to delete recipie--------------------
const deleteRecipie = (req,res) => {
    res.json({message:"hello"})
}


module.exports = {getRecipies,getRecipie,addRecipie,editRecipie,deleteRecipie}
