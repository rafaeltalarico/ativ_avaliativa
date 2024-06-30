const foodService = require("../services/foodService");

const getFoods = async (req, res) => {
  try {
    const foods = await foodService.getFoods();
    res.status(200).json(foods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getFood = async (req, res) => {
  try {
    const id = req.params.id;
    const food = await foodService.getFoodById(id);
    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createFood = async (req, res) => {
  try {
    const data = req.body;
    const food = await foodService.createFood(data);
    res.status(200).json(food);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateFood = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const updatedFood = await foodService.updateFoodById(id, data);
    res.status(200).json(updatedFood);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteFood = async (req, res) => {
  try {
    const id = req.params.id;
    await foodService.deleteById(id);
    res.status(200).json({
      message: "O alimento com o ID fornecido foi deletado com sucesso!",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getFoods,
  createFood,
  getFood,
  updateFood,
  deleteFood,
};
