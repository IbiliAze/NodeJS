const playbook_json = require('../templates/playbook.json');

const Playbook = function(body) {
    const hti = body['hubConfig']['hubTunnelIp'];
    const htm = body['hubConfig']['hubTunnelMask'];
    const commands = [
        `interface tunnel 100`,
        `ip address ${hti} ${htm}`,
        // `ip mtu 1400`,
        // `no ip next-hop-self eigrp ${ea}`,
        // `no ip spli-horizon eigrp ${ea}`,
        `tunnel path-mtu discovery`
    ];
    for ( let i = 0; i < commands.length; i++) {
        playbook_json['tasks'][0]['ios_command']['commands'].push(commands[i]);
    };
    return playbook_json;

}


module.exports = Playbook;
