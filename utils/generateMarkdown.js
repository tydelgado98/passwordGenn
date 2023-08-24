// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  switch (license)  {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
      break;
    case 'GPL':
      return 'https://opensource.org/licenses/gpl-license';
      break;
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      return 'None';
      break;
  };
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  
  ## Description
  - ${data.desription}


  ## Installation
  - ${data.installations}


  ## Usage
  - ${data.usage}


  ## Technologies Used
  - ${data.tech}


  ## Contributors
  - ${data.contributed}


  ## License
  - ${data.license}
   


  ## Github
  - ${data.github}


  ## Email
  - ${data.email}
` ;
}

module.exports = generateMarkdown;
