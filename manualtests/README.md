**About**

This folder contains the definitions of manual tests that were created in Postman, gathered in a Postman collection then exported as a JSON file. 
You can import them back to Postman to re-execute them. Note that you will have to change the different document keys that are used in the test file, as described in the below.

**Importing the test file to Postman**

From the Postman main UI, click on the "Import" button in the toolbar at the top of the screen and drop your the file. 
Once the collection is loaded to Postman, you will see a tree-structure appear in the left panel of the Postman UI.

**The tests**

The tests exercize the REST APIs exposed by Agrysense. In the API, HTTP the POST, PUT, GET and DELETE verbs are used as follows:
- POST: create an new entity
- PUT: update an existing entity
- GET: get an existing entity by key
- GET: list all entities of a given type 
- DELETE: delete an existing entity

**The flow**

When testing, you should make sure to proceed in the following order:
- Start first by creating a Farm
- Run the update, list and get tests of the farm. Do not delete the farm
- Create a farmhouse with a reference to the farm previously created
- Run the update, list and get tests of the farmhouse, as well as start, update and stop cycle. Do not delete the farmhouse
- Create a controller with a reference to the farmhouse,
- Run the update, list and get tests of the controller. Do not delete the controller.
- Create a sensor core with a reference to the controller,
- Run the update, list get and delete tests of the sensor core, 
- Create a sensor with a reference to the controller or to the farmhouse (you can try both scenarios using the available tests),
- Run the update, list get and delete tests of the sensor,
- Create a camera with a reference to the controller,
- Run the update, list get and delete tests of the camera,
- Create an actuator with a reference to the controller or to the farmhouse,
- Run the update, list get and delete tests of the actuator.
- Run the delete test of the controller
- Run the delete test of the farmhouse
- Run the delete test of the farm

**Important**: use the documents keys obtained at each step when you need to refer to other documents
