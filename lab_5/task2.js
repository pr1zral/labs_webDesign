/**
 * Created by Evgeniy Baranuk on 10.12.13.
 */

var firms = {
    Раки : 1000,
    Колосок : 1500,
    Чакакатун : 2000
};

var profiles = {
    ровный : 5,
    кривой : 10,
    косой : 15,
    гиперкосой : 20,
    абракадабра : 10000
};

var packets = {
    одинарный : 30,
    двойной : 40,
    тройной : 50,
    четверной : 60
};

function Calculate(width, height, firm, profile, packet, count) {
    this.width = parseInt(width);
    this.height = parseInt(height);
    this.firm = firms[firm];
    this.profile = profiles[profile];
    this.packet = packets[packet];
    this.count = parseInt(count);

    this.process = function() {
        var result = (this.width*10 + this.height*10)*count + this.firm + this.profile + this.packet;
        return result;
    }
}

window.onload = function() {
    choose();
}

function process() {
    var result = new Calculate(document.getElementById('width').value, document.getElementById('height').value,
                                 document.getElementById('firms').value, document.getElementById('profiles').value,
                                 document.getElementById('packets').value, document.getElementById('count').value).process();

    if (isNaN(result)) {
        document.getElementById('cost').style.color = 'red';
        document.getElementById('cost').innerHTML = "ERROR!";
    }
    else {
        document.getElementById('cost').style.color = 'orange';
        document.getElementById('cost').innerHTML = result + " $";
    }


}

function choose() {
    var firm = document.getElementById('firms');

    /* All is visible */
    document.getElementById('profile1').hidden = false;
    document.getElementById('profile2').hidden = false;
    document.getElementById('profile3').hidden = false;
    document.getElementById('profile4').hidden = false;
    document.getElementById('profile5').hidden = false;

    document.getElementById('packet1').hidden = false;
    document.getElementById('packet2').hidden = false;
    document.getElementById('packet3').hidden = false;
    document.getElementById('packet4').hidden = false;

    document.getElementById('packet1').selected = true;
    document.getElementById('profile1').selected = true;

    switch (firm.value) {
        case '"Раки"' :
            document.getElementById('packet1').hidden = true;
            document.getElementById('packet4').hidden = true;
            document.getElementById('packet2').selected = true;

            document.getElementById('profile1').hidden = true;
            document.getElementById('profile4').hidden = true;
            document.getElementById('profile2').selected = true;
            break;
        case '"Колосок"' :
            document.getElementById('packet3').hidden = true;
            document.getElementById('packet4').hidden = true;
            document.getElementById('packet2').hidden = true;


            document.getElementById('profile3').hidden = true;
            document.getElementById('profile5').hidden = true;
            break;
    }
}