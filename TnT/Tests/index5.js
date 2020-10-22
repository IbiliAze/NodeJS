function Playbook(arg1, arg2) {
    let var1 = "abc"
    this.name = 'Playbook';
    this.hosts = 'r1';
    this.tasks = [
        {
            "name": "Commands",
            "ios_command": {
                "commands": []
            },
            "register": "output"
        },
        {
            "name": "Make sure directory exists",
            "file": {
                "path": "outputs",
                "state": "directory"
            },
            "run_once": true,
            "delegate_to": "localhost"
        }
    ];
    Object.defineProperty(this, 'var1', {
        get: function() {
            return va1
        }
    })
};


const playbook = new Playbook('conf t', 'do show run');
console.log(playbook);