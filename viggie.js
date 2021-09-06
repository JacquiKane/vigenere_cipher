

//
// Start by asking for string to encrypt
function starter() {
    // Asks for message and key word
    var originalMessage = readLine("Enter your message that you want to encrypt: ");
    var key = readLine("Enter your key word: ");

    // get the divs to be written to
    var divArea1 = document.querySelector('.area1');

    var divArea2 = document.querySelector('.area2');

    var divArea3 = document.querySelector('.area3');

    // Encrypts message
    var strForArea1 = `Encrypting <span style="color:blue";>${originalMessage}</span> with a Vigenère 
    Cipher key ${key}...\n`;
    var encrypted = encrypt(originalMessage, key);
    var strForArea2 = encrypted;
    console.log("Done:" + '\n');

    console.log(encrypted + '\n');
    divArea1.innerHTML = `<p> ${strForArea1}  </p> `;
    divArea2.innerHTML = `<p> ${strForArea2}  </p> `;
    var frequencyAnalysis = getFrequency(encrypted);
    divArea3.innerHTML = `<p> ${frequencyAnalysis}  </p> `;
}


var VigenereCipher = {
    _tabulaRecta: {
        a: "abcdefghijklmnopqrstuvwxyz_",
        b: "bcdefghijklmnopqrstuvwxyz_a",
        c: "cdefghijklmnopqrstuvwxyz_ab",
        d: "defghijklmnopqrstuvwxyz_abc",
        e: "efghijklmnopqrstuvwxyz_abcd",
        f: "fghijklmnopqrstuvwxyz_abcde",
        g: "ghijklmnopqrstuvwxyz_abcdef",
        h: "hijklmnopqrstuvwxyz_abcdefg",
        i: "ijklmnopqrstuvwxyz_abcdefgh",
        j: "jklmnopqrstuvwxyz_abcdefghi",
        k: "klmnopqrstuvwxyz_abcdefghij",
        l: "lmnopqrstuvwxyz_abcdefghijk",
        m: "mnopqrstuvwxyz_abcdefghijkl",
        n: "nopqrstuvwxyz_abcdefghijklm",
        o: "opqrstuvwxyz_abcdefghijklmn",
        p: "pqrstuvwxyz_abcdefghijklmno",
        q: "qrstuvwxyz_abcdefghijklmnop",
        r: "rstuvwxyz_abcdefghijklmnopq",
        s: "stuvwxyz_abcdefghijklmnopqr",
        t: "tuvwxyz_abcdefghijklmnopqrs",
        u: "uvwxyz_abcdefghijklmnopqrst",
        v: "vwxyz_abcdefghijklmnopqrstu",
        w: "wxyz_abcdefghijklmnopqrstuv",
        x: "xyz_abcdefghijklmnopqrstuvw",
        y: "yz_abcdefghijklmnopqrstuvwx",
        z: "z_abcdefghijklmnopqrstuvwxy",
        _: "_abcdefghijklmnopqrstuvwxyz"
    }
};

function encrypt(plainText, keyword) {
    // Makes sure the message is in lower case
    plainText = plainText.toLowerCase();
    keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
    var encryptedText = "";
    var specialCharacterCount = 0;

    for (var i = 0; i < plainText.length; i++) {
        var keyLetter = (i - specialCharacterCount) % keyword.length;
        var keywordIndex = VigenereCipher._tabulaRecta.a.indexOf(keyword[keyLetter]);

        if (VigenereCipher._tabulaRecta[plainText[i]]) {
            encryptedText += VigenereCipher._tabulaRecta[plainText[i]][keywordIndex];
        } else {
            encryptedText += plainText[i];
            specialCharacterCount++;
        }
    }
    return encryptedText;
}










/*
 * This program encrypts alphabetical messages using a
 * Vigenère Cipher.
 * Frequency analysis important1
 *
 * Try a few different messages, including longer ones. 
 * 
 * Do you think knowing the letter frequency could help crack 
 * the cipher?
 */






function getFrequency(string) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    console.log("Letter Frequency: " + '\n');
    var str = "Letter Frequency: " + '\n';
    for (var j = 0; j < 26; j++) {
        // loop through the alphabet
        var char = alphabet.charAt(j);
        // initialize the counter to 0
        var count = 0;
        // loop through the string
        for (var i = 0; i < string.length; i++) {
            // if the character in the string is equal to
            // the character passed in as a parameter increment count
            if (string.charAt(i) == char) {
                count++;
            }
        }
        if (count != 0) {
            console.log(char + " count: " + count + "\n");
            str += char + " count: " + count + "<br>";
        }

    }
    return str;
}

