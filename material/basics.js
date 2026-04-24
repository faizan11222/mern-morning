Document of MongoDB:there are 2 types of databases:  
    SQL
    NoSQL (MongoDB) 
    
    Tools/GUI to use MongoDB:      
    Atlas      
    MongoDB Compass (recommended) 
    
    default port of mongoDB is 27017 
    Database -> Collection (table) -> Documents 
    query for getting all the list of databases in mongoDB: show dbs 
    
    There are 2 functions/queries to insert data into collection.     
      insertOne(); -> for entering single record     
      insertMany(); -> for entering multiple record 
      
      there are 2 functions to fetch the data from collection      
      findOne();     
      find(); 
      
      there are functions to update the data:      
      updateOne()
      updateMany() 
      
      keywords:      
      $set (use to set a new value)      
      $inc (use to increment the data/number)      
      
      for decrement any number, use negative value with $inc      
      $mul (use to multiple numbers into the collection)      
      $unset (use to remove the value) For delete, there are 2 functions:     
      deleteOne()     
      deleteMany() Operators in MongoDB:      
      $lt (less than)      
      $gt (greater than)	
      $lte (less than or equal to)
      $gte (greater than or equal to)
      $ne (not equal to) 
      $in (in operator) 
      $nin (not in operator)
      $or 
      $and

      Projection in MongoDB:
      1 (include the field) 
      0 (exclude the field)
      sort() function is used to sort the data in ascending or descending order.
       1 (ascending order) 
      -1 (descending order)

      .limit() function is used to limit the number of documents returned by a query.
      .skip() function is used to skip a specified number of documents in the query result.

      download mongoDB 6 version:
      Windows (MSI): https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.15-signed.msi