// Creates the team
const generateTeam = team => {

    // Html for the manager
    const generateManager = manager => {
        return `
        <div class="col-lg-4 mb-4">
            <div class="card manager-card">
            <div class="card-header bg-success text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-briefcase mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group shadow-sm">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
            </div>
        </div>
        `;
    };

 // Html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="col-lg-4 mb-4">
            <div class="card engineer-card">
            <div class="card-header bg-info text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-cogs mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group shadow-sm">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
            </div>
        </div>
        `;
    };

   // Html for interns
    const generateIntern = intern => {
        return `
        <div class="col-lg-4 mb-4">
            <div class="card intern-card">
            <div class="card-header bg-warning text-dark">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-book-reader mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group shadow-sm">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

// Export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Our Amazing Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSLIFnOIdc2xVpCMEfqE1iG4RU29XdhH3cB6I2" crossorigin="anonymous">
    <link rel="stylesheet" href="custom-style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-secondary">
                <h1 class="text-center text-white">Our Incredible Team</h1>
            </div>
        </div>
    </div>
    <div class="container mt-5">
        <div class="row justify-content-center">
        ${generateTeam(team)}
        </div>
    </div>
</body>
</html>
    `;
};
