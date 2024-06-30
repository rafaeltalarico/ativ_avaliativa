const foodModel = require("../models/foodModel");

const getFoods = async () => {
  const foods = await foodModel.find();
  return foods;
};

const getFoodById = async (id) => {
  const food = await foodModel.findById(id);
  return food;
};

const createFood = async (food) => {
  const newFood = new foodModel(food);
  await newFood.save();
  return newFood;
};

const updateFoodById = async (id, data) => {
  await foodModel.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        ...data,
      },
    }
  );

  const updatedFood = await getFoodById(id);

  return updatedFood;
};

const deleteById = async (id) => {
  await foodModel.deleteOne({
    _id: id,
  });
};

module.exports = { getFoods, createFood, getFoodById, updateFoodById, deleteById };
