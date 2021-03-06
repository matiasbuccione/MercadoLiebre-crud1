const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = require('../utils/toThousand');
const toDiscount = require('../utils/toDiscount');

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		return res.render('products',{
			products,
			toThousand,
			toDiscount
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		return res.render('detail',{
			product : products.find(product => product.id === +req.params.id),
			toDiscount,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		return res.render('product-create-form')

	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		return res.render('product-edit-form',{
			product : products.find(product => product.id === +req.params.id)
		})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		

	}
}

module.exports = controller;