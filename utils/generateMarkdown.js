// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 switch(license) {
    case 'Apache':
      return '![Static Badge](https://img.shields.io/badge/:license-Apache-blue)';
    case 'MIT':
      return '![Static Badge](https://img.shields.io/badge/:license-MIT-green)';
    case 'GPL':
      return '![Static Badge](https://img.shields.io/badge/:license-GPL-red)';
    case 'BSD':
      return '![Static Badge](https://img.shields.io/badge/:license-BSD-yellow)';
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


function renderLicenseSection(license) {
  return `## License
  - ${license}
  - ${renderLicenseLink(license)}
  `;
}


function generateMarkdown(data) {
  return `  # ${data.title}
  ${renderLicenseBadge(data.license)}

  


  ## Description
  - ${data.description}




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

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
