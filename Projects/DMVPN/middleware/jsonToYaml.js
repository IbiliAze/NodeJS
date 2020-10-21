const YAML = require('json-to-pretty-yaml');

const playbookJsontoYaml = function(playbook_json){
    const playbook = YAML.stringify(playbook_json);
    return playbook;
};

module.exports = playbookJsontoYaml