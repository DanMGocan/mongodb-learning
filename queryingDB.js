

 

/* Connect to Cluster */
mongo "mongodb+srv://sandbox.ycigq.mongodb.net/<dbname>" --username m001-student

/* To connect as admin of the cluster */
mongo "mongodb+srv://sandbox.ycigq.mongodb.net/admin" --username m001-student
show dbs // shows all databases
use <database_name> // indicate that we want to work with this database
show collections // self-explanatory
db.<collection_name>.find( {"field": "key"}); //find values in collection
it // iterate through next results
db.<collection_name>.find( {"field": "key"}).count() // returns how many results would be returned
db.<collection_name>.find( {"field": "key"}).pretty() // beautifies JSON
