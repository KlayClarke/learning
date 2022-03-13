let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxlength: 100 },
  family_name: { type: String, required: true, maxlength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// virtual for author full name
AuthorSchema.virtual("name").get(function () {
  let fullName = "";
  if (this.first_name && this.family_name) {
    fullName = `${this.family_name}, ${this.first_name}`;
  }
  if (!this.first_name || !this.family_name) {
    fullName = "";
  }
  return fullName;
});

// virtual for author lifespan
AuthorSchema.virtual("lifespan").get(function () {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = this.date_of_birth.getYear().toString();
  }
  if (this.date_of_death) {
    lifetime_string = this.date_of_death.getYear().toString();
  }
  return lifetime_string;
});

// virtual for author URL
AuthorSchema.virtual("url").get(function () {
  return `/catalog/author/${this._id}`;
});

// export author model
module.exports = mongoose.model("Author", AuthorSchema);
