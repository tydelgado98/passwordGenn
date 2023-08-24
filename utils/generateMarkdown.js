// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}


function renderLicenseLink(license) {
  switch (license)  {
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL':
      return 'https://opensource.org/licenses/gpl-license';
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause';
    default:
      return 'None';
  };
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(data) {
  return `## License
  - ${data.license}
  `;
}


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



  ${renderLicenseSection(data.license)}
   


  ## Github
  - ${data.github}



  ## Email
  - ${data.email}
` ;
}

module.exports = generateMarkdown;
