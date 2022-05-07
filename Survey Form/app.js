function saveFile()
    {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phoneNumber = document.getElementById('contact');
        const textBox1 = document.getElementById('i1');
        const textBox2 = document.getElementById('i2');
        const textBox3 = document.getElementById('i3');
        const textBox4 = document.getElementById('i4');
        
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Email: ' +email.value + ' \r\n ' + 
            'Contact Number: ' + phoneNumber.value + ' \r\n'+
            'What is your Point of view regarding Artificial Intelligence?: ' + textBox1.value + ' \r\n'+
            'Should Python be taught in schools from lower classes?: ' + textBox2.value + ' \r\n'+
            'Which programming laguage is your favourite? Why?:' + textBox3.value + ' \r\n'+
            'Rating :' + textBox4.value + ' \r\n'
            'Thanks for selecting us'+ '\r\n ***************************************\r\n';
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';

        let newLink = document.createElement("a");
        newLink.download = sFileName;


        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }
                 
        newLink.click(); 
    }

document.getElementById('btun').addEventListener('click', saveFile);