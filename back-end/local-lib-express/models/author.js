let mongoose = require("mongoose");
const { DateTime, Settings } = require("luxon");

// configure the time zone
Settings.defaultZone = "America/New_York";

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

// virtual for formatted date of birth and date of death - eg March 13 1976

AuthorSchema.virtual("date_of_birth_formatted").get(function () {
  return this.date_of_birth
    ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED)
    : "";
});

AuthorSchema.virtual("date_of_death_formatted").get(function () {
  return this.date_of_death
    ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED)
    : "";
});

// virtual for formatted date of birth and date of death - eg 1976-03-13

AuthorSchema.virtual("date_of_birth_formatted_yyyy_mm_dd").get(function () {
  return this.date_of_birth
    ? this.date_of_birth.toISOString().split("T")[0]
    : "";
});

AuthorSchema.virtual("date_of_death_formatted_yyyy_mm_dd").get(function () {
  return this.date_of_death
    ? this.date_of_death.toISOString().split("T")[0]
    : "";
});

// export author model
module.exports = mongoose.model("Author", AuthorSchema);
