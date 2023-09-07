const { Item, Category } = require('../models/menu'); // Import the Item, Category, and Restaurant models

// Create a new item within a category
const createItem = async (req, res) => {
  try {
    const { name, description, price, categoryId, restaurantId,itemType } = req.body;

    // Check if the category exists and belongs to the specified restaurant
    const category = await Category.findOne({ _id: categoryId, restaurant: restaurantId });

    if (!category) {
      return res.status(404).json({ error: 'Category not found or does not belong to the restaurant' });
    }

    // Create a new item
    const newItem = new Item({
      name,
      description,
      price,
      category: categoryId,
      restaurant: restaurantId,
      itemType    });

    // Save the item to the database
    const savedItem = await newItem.save();

    res.status(201).json({
      message: 'Item created successfully',
      item: savedItem,
    });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createItem,
};
