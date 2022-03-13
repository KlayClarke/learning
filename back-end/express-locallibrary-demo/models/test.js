const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema;

let TestSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// compile model from schema

let Test = mongoose.model("Test", TestSchema);

// ------

///////////  creating and modifying documents

// create an instance of model

let instace = new Model({
  name: "awesome",
});

// save the new model instance, passing a callback

instance.save(function (err) {
  if (err) return handleError(err);
  //   if no err
  console.log("Errorless");
});

// ////// OR

Model.create({ name: "awesome" }, function (err, instance) {
  if (err) return handleError(err);
  // if no err
  console.log("Errorless");
});

// You can search for records using query methods

let Athlete = mongoose.model("Athlete", mySchema);

// find all athletes who play basketball, selecting the name and age fields only
Athlete.find({ sport: "Basketball" }, "name age", function (err, athletes) {
  if (err) return handleError(err);
  //   'athletes' contains the list of athletes that match the criteria
  console.log(athletes);
});

// TO CREATE REFERENCES FROM ONE DOCUMENT/MODEL INSTANCE TO ANOTHER
let Schema = mongoose.Schema;

let authorSchema = Schema({
  name: String,
  stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

let storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: "Author" },
  title: String,
});

let Author = mongoose.model("Author", authorSchema);
let Story = mongoose.model("Story", storySchema);

//  To save references to the related document by assigning id value

let bob = new Author({
  name: "Bob Smith",
});

bob.save(function (err) {
  if (err) return handleError(err);

  // bob exists
  let story = new Story({
    title: "Bob Goes To Jamaica",
    author: bob._id, // assign the id from bob author model as the author of said book (linking both objects)
  });

  story.save(function (err) {
    if (err) return handleError(err);
    // Bob has a story
  });
});

Story.findOne({
  title: "Bob Goes To Jamaica",
})
  .populate("author") // to populate the author id with the corresponding author model (Bob's) info
  .exec(function (err) {
    if (err) return handleError(err);
    console.log("The author is %s", story.author.name); // prints out 'The author is Bob Smith'
  });
