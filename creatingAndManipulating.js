/*
Every document must have a unique _id value
ObjectId() is the default for ^ if not otherwise specified
*/

mongoimport --uri="<MONGO CLUSTER ADDRESS>" sales.json //will give us loads of duplicate errors

/*
When inserting whole documents into a collection, we can
use the "drop" command as to delete the previous collection
before uploading the new one -- avoiding the DUPLICATES error
*/

mongoimport --uri="<MONGO CLUSTER ADDRESS>" --drop sales.json //will delete the previous collection before uploading new one


findOne() //returns a random document + returns first object matching a query
insert( { } ) //inserts a document in a collection
insert( [ {}, {}, {}, ] ) // allows to insert more documents
insert( [ {}, {}, {}, ], {"ordered": "false"} ) // changes default behaviour as to insert all possible values and error the ones
// that cannot be inserted

// if we add documents in a collection that does not exist, the collection gets created
// same for database

updateOne() // updates the first document that matches query
updateMany() // updates all documents that match
db.<collectionName>.updateMany({"city": "HUDSON"}, {"$inc": {"pop": 10}}) // first arguments specifies who will be
//updated and the second one, how. $inc is an update operator, meaning INCREMENT. We can increment more fields at
//the same time. 

$inc = increment
$set = replace value + implicit creates a field 
$push = adds an element to an array field
