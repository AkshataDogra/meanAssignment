var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");
var mongoose = require("mongoose");
var cors = require("cors");

mongoose.Promise = global.Promise;

var instance = express();
instance.use(
  express.static(path.join(__dirname, "./../node_modules/jquery/dist/"))
);

var router = express.Router();
instance.use(router);

instance.use(bodyParser.urlencoded({ extended: false }));
instance.use(bodyParser.json());

instance.use(cors());
router.get("/home", function(req, resp) {
  resp.sendFile("home.html", {
    root: path.join(__dirname, "./../views")
  });
});

// 5. Model-Schema-Mapping with collection on Mongo DB and
// establishing collection with it.'
mongoose.connect(
  "mongodb://localhost/PersonInformationDb",
  { useNewUrlParser: true }
);

var dbConnect = mongoose.connection;
if (!dbConnect) {
  console.log("Sorry Connection is not established");
  return;
}


// *** SCHEMAS *** //
var tempUsersSchema = mongoose.Schema({
  User: Object,
  Person: Object
});

//                                name        schema          collection
var tempUserModel = mongoose.model("TempUsers", tempUsersSchema, "TempUsers");

// *** TEMP-USER api *** //
instance.get("/api/tempUsers", function(request, response) {
  tempUserModel.find().exec(function(err, res) {
    if (err) {
      response.statusCode = 500;
      response.send({ status: response.statusCode, error: err });
    }
    response.send({ status: 200, data: res });
    console.log (JSON.stringify(res));
});
});

// CREATE TEMP USER
instance.post("/api/tempUsers", function(request, response) {
  let usrObj = {
    UserId: request.body.UserId,
    UserName: request.body.UserName,
    EmailAddress: request.body.EmailAddress,
    Password: request.body.Password,
    RoleId: request.body.RoleId,
    RoleName: request.body.RoleName
  };

  let nameObj = {
    FirstName: request.body.FullName.FirstName,
    MiddleName: request.body.FullName.MiddleName,
    LastName: request.body.FullName.LastName
  };

  let addObj = {
    FlatNo: request.body.Address.FlatNo,
    SocietyName: request.body.Address.SocietyName,
    AreaName: request.body.Address.AreaName
  };

  var perObj = {
    PersonalUniqueID: request.body.PersonalUniqueID,
    FullName: nameObj,
    Gender: request.body.Gender,
    DateOfBirth: request.body.DateOfBirth,
    Age: request.body.Age,
    Address: addObj,
    City: request.body.City,
    State: request.body.State,
    PinCode: request.body.PinCode,
    PhoneNo: request.body.PhoneNo,
    MobileNo: request.body.MobileNo,
    PhysicalDisability: request.body.PhysicalDisability,
    MaritalStatus: request.body.MaritalStatus,
    EducationStatus: request.body.EducationStatus,
    BirthSign: request.body.BirthSign
  };
  
  
  var tempUsr = {
    User: usrObj,
    Person: perObj
  };

  console.log (tempUsr);

  tempUserModel.create(tempUsr, function(err, res) {
    if (err) {
      response.statusCode = 500;
      response.send(err);
    }
    response.send({ status: 200, data: res });
    console.log (res);
  });
});

// 6. start listening
instance.listen(4070, function() {
  console.log("started listening on port 4070");
});