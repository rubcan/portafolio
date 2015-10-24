
function CurriculumController($scope, $http) {

    var data = {
        "Experience": {
            "Jobs": [
      {
          "OrderId": "1",
          "Title": "Private IT tutor and Computer Technician",
          "Company": "Adacosmetic SL",
          "DateStart": "2000",
          "DateFinish": "2005",
          "Location": "Barcelona",
          "Description": "Private lessons about Computing Basics, Office Software and Basic Programming in HTML, C or VB. On 2005, I computerized Adacosmetic SL’s accounts."
      },
      {
          "OrderId": "2",
          "Title": "Websites Developer",
          "Company": "MiM",
          "DateStart": "02/2006",
          "DateFinish": "07/2006",
          "Location": "Barcelona",
          "Description": "Developed a Business Management Intranet using ASP.Net and AJAX."
      },
      {
          "OrderId": "3",
          "Title": "Project Manager and Senior Programmer",
          "Company": "HabitatSoft (Vocento)",
          "DateStart": "07/2006",
          "DateFinish": "08/2009",
          "Location": "Barcelona",
          "Description": "Full stack developer at pisos.com (means flats.com) project since its beginning and other projects of the company. Vocento is one of the biggest media companies in Spain. The project had more than 4.000 customers and a database bigger than 500.000 properties. It also had 16 million monthly page views and 1 million monthly unique visitors.",
          "Tasks": {
              "Task": [
            "Programming in ASP.Net, XHTML, HTML, CSS, JavaScript, AJAX and SQL Server.",
            "Developed some web services.",
            "Implemented SEO strategy."
          ]
          }
      },
      {
          "OrderId": "4",
          "Title": "Freelancer Programmer",
          "DateStart": "09/2009",
          "DateFinish": "02/2011",
          "Location": "Spain and UK",
          "Description": "Developed some projects for companies that wanted some presence on the Internet or needed an internal website for communication.",
          "Tasks": {
              "Task": [
            "Programming in PHP with HTML, XHTML, CSS, JavaScript and jQuery.",
            "Developed an online shop, some blogs and a wiki.",
            "Developed payment modules with PayPal, Master Card and VISA."
          ]
          }
      },
      {
          "OrderId": "6",
          "Title": "Senior Programmer",
          "Company": "Skyguard",
          "DateStart": "03/2011",
          "DateFinish": "08/2012",
          "Location": "London",
          "Description": "Developed a couple of commercial sites (skyguardgroup.com and send4help.com), a company management intranet and a customer’s intranet to manage their personal data. Skyguard offers a 24/7 incident management centre certified to the highest industry standards which is used by over half the police forces in the UK.",
          "Tasks": {
              "Task": [
            "Programming Back End with C#.Net 4.0, LINQ, AJAX and SQL Server 2008.",
            "Programming Front End with HTML, XHTML, CSS, JS and jQuery.",
            "Designed SEO strategy for skyguardgroup.com and send4help.com"
          ]
          }
      },
      {
          "OrderId": "7",
          "Title": "Web developer",
          "Company": "RAPP UK",
          "DateStart": "10/2012",
          "DateFinish": "07/2013",
          "Location": "East Grinstead, Sussex",
          "Description": "Developed a Mercedes Benz's Commercial Vehicles web application working mainly as a backender building the data and business logic layers, which involved designing and implementing the SQL Server database, modelling this in Entity Framework and also making use of advanced software design patterns such as the Repository/Specification, Command and Martin Fowler's Unit of Work.",
          "Tasks": {
              "Task": [
            "Programming using C#.Net 4.0, MVC, LINQ, AJAX, Unit Tests, HTML, XHTML, CSS, JavaScript, jQuery, Umbraco and SQL Server 2008."
          ]
          }
      },
      {
          "OrderId": "8",
          "Title": "Senior Developer",
          "Company": "CPC Connect",
          "DateStart": "07/2013",
          "DateFinish": "Now",
          "Location": "London",
          "Description": "Developing gaydar.net and its API services with Responsive Design techniques and deployed following a Continuous Delivery approach. Gaydar has over 6 million registered members and at peak has up to 70k users online concurrently.",
          "Tasks": {
              "Task": [
            "Programming using C#.Net 4.5, MVC4, Web API, AngularJS, Protractor, Karma, RequireJS, LESS, Bootstrap, HTML5, CSS3, JavaScript, jQuery and SQL Server 2008."
          ]
          }
      }
    ]
        }
    };

    //    $http.get('../db/experience.json').then(function (response) {
    //    console.log("data retrieved", response);
    //      $scope.professionalExperience = response.Experience.Jobs;
    //    });

    $scope.professionalExperience = data.Experience.Jobs;

}
