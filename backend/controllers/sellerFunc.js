import db from "../models/dbFuncs.js";
import Product from "../models/product.js";
const sellerFunc = {
    AddItem: function(req, res){
      let {productID, name, description, price, stock} = req.body

      productID = "AssignedProductID"

      console.log("\nID: "+productID)

      if (name == '' || description == '' || price <= 0 || stock <= 0){
        res.send("Some fields are empty")
        console.log("*Some fields are empty*"+"\nName: "+name + "\nDescription: "+description + "\nPrice: "+price + "\nStock: "+stock)
        return
      }

      db.insertOne(Product, {"productID":productID, "name":name, "description":description, "price":price, "stock":stock}, function(result){
        if(result){
            res.send("Product added")
            console.log("Product successfully added!") 
            return
        }
        res.send("Error has occured")
        return // Integrate a checker in front end
      })
    },

    EditItem: function(req, res){

    },

    DeleteItem: function(req, res){

    },

    CreateVoucher: function(req, res){},
    DeleteVoucher: function(req, res){}
}

export default sellerFunc