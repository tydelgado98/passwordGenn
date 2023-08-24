// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch(license) {
    case 'Apache':
      return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'GPL':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'BSD':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
      case 'None':
        return '';
 }
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


function renderLicenseSection(data) {
  return `## License
  - ${data.license}
  - ${renderLicenseLink(data.license)}
  `;
}


function generateMarkdown(data) {
  return ` ${renderLicenseBadge(data.license)}
  # ${data.title}


  


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
