/*
 * Encoding allows to encode a set of gears and abilities into a single string and vice-versa. 
 * 
 * The encoded string is composed of 25 hexadecimal characters (from 0 to 9 and from A to F).
 * The first digit is the version number of the encoding mechanism and is 0 at the moment.
 * This will allow to change the encoding method in the future while ensuring backward compatibility.
 * 
 * Format: 
 * 
 * 0 0 XX XXXXXXX XXXXXXX XXXXXXX
 * ^ ^ ^  ^       ^       ^
 * | | |  |       |       |
 * Version number |       |
 *   | |  |       |       |
 *   Weapon set   |       |
 *     |  |       |       |
 *     Weapon ID  |       |
 *        |       |       |
 *        Encoded Hat     |
 *                |       |
 *                Encoded Clothes
 *                        |
 *                        Encoded Shoes
 * 
 * Example:
 * 0 0 00 241084e 0000000 07c8000
 * 
 * Gears (hats, clothes, shoes) are all encoded the same way. 
 * The value is made of 7 hexadecimal characters.
 * 
 * Format: 
 * 
 * XX XXXXX
 * ^  ^
 * |  |
 * Gear id
 *    |
 *    Abilities
 * 
 * Example: 
 * 07c8000
 * 
 * 
 * Abilities format: 
 * XXXXX hex to binary 
 * XXXXX XXXXX XXXXX XXXXX (there is a trick here: hexa to binaries are then groupped by 5 digits)
 * ^    ^    ^    ^
 * |    |    |    |
 * Main |    |    |
 *      Sub 1|    |
 *           Sub 2|
 *                Sub 3
 * 
 * Example:
 * c8000 => 11001 00000 00000 00000
 * 
 */

function encode(selectedSetId,loadout) {
    var hexString = '0' // version number
    hexString += selectedSetId
    hexString += hex8(loadout.weapon.id);
    hexString += encodeGear(loadout.head);
    hexString += encodeGear(loadout.clothes);
    hexString += encodeGear(loadout.shoes);
    return hexString;
};

function encodeGear(item) {
  var string = hex8(item.equipped.id);
  var abilities = "";
  if(item.main == null) {
    abilities += bin5(0)
  } else {
    abilities += bin5(item.main.id)
  }
  for(var i=0; i<item.subs.length; i++) {
    if(item.subs[i] == null) {
      abilities += bin5(0)
    } else {
      abilities += bin5(item.subs[i].id)
    }
  }
  string += binaryToHex(abilities).result
  return string
}

function decodeGear(code) {
  var gearid = parseInt(code.substring(0,2), 16)
  var rawAbilities = code.substring(2,8)
  var binAbilities = hexToBinary(rawAbilities).result
  var main = parseInt(binAbilities.substring(0,5),2)
  var subs = []
  for(var i=5; i<binAbilities.length; i+=5) {
    subs.push(parseInt(binAbilities.substring(i,i+5),2))
  }
  return {gear: gearid, main: main, subs: subs}
}

function hex8(val) {
    val &= 0xFF;
    var hex = val.toString(16).toLowerCase();
    return ("00" + hex).slice(-2);
}

function bin5(val) {
    var bin = val.toString(2);
    bin = "00000".substr(bin.length) + bin;
    return bin;
}

function decode(code) {
    if (code[0] != 0) {
        console.log("invalid code")
        return false;
    }
    try {
      var weaponset = parseInt(code[1])
      var weaponid = parseInt(code.substring(2, 4), 16)
      var head = decodeGear(code.substring(4,11))
      var clothes = decodeGear(code.substring(11,18))
      var shoes = decodeGear(code.substring(18,25))
    }
    catch(err) {
      console.log("Invalid code: " + err.message)
      return false;
    }
    return {set: weaponset, weapon: weaponid, head: head, clothes: clothes, shoes: shoes};
}

function binaryToHex(s) {
    var i, k, part, accum, ret = '';
    for (i = s.length - 1; i >= 3; i -= 4) {
        // extract out in substrings of 4 and convert to hex
        part = s.substr(i + 1 - 4, 4);
        accum = 0;
        for (k = 0; k < 4; k += 1) {
            if (part[k] !== '0' && part[k] !== '1') {
                // invalid character
                return {
                    valid: false
                };
            }
            // compute the length 4 substring
            accum = accum * 2 + parseInt(part[k], 10);
        }
        if (accum >= 10) {
            // 'A' to 'F'
            ret = String.fromCharCode(accum - 10 + 'a'.charCodeAt(0)) + ret;
        } else {
            // '0' to '9'
            ret = String(accum) + ret;
        }
    }
    // remaining characters, i = 0, 1, or 2
    if (i >= 0) {
        accum = 0;
        // convert from front
        for (k = 0; k <= i; k += 1) {
            if (s[k] !== '0' && s[k] !== '1') {
                return {
                    valid: false
                };
            }
            accum = accum * 2 + parseInt(s[k], 10);
        }
        // 3 bits, value cannot exceed 2^3 - 1 = 7, just convert
        ret = String(accum) + ret;
    }
    return {
        valid: true,
        result: ret
    };
}

// converts hexadecimal string to a binary string
// returns an object with key 'valid' to a boolean value, indicating
// if the string is a valid hexadecimal string.
// If 'valid' is true, the converted binary string can be obtained by
// the 'result' key of the returned object
function hexToBinary(s) {
    var i, k, part, ret = '';
    // lookup table for easier conversion. '0' characters are padded for '1' to '7'
    var lookupTable = {
        '0': '0000',
        '1': '0001',
        '2': '0010',
        '3': '0011',
        '4': '0100',
        '5': '0101',
        '6': '0110',
        '7': '0111',
        '8': '1000',
        '9': '1001',
        'a': '1010',
        'b': '1011',
        'c': '1100',
        'd': '1101',
        'e': '1110',
        'f': '1111',
        'A': '1010',
        'B': '1011',
        'C': '1100',
        'D': '1101',
        'E': '1110',
        'F': '1111'
    };
    for (i = 0; i < s.length; i += 1) {
        if (lookupTable.hasOwnProperty(s[i])) {
            ret += lookupTable[s[i]];
        } else {
            return {
                valid: false
            };
        }
    }
    return {
        valid: true,
        result: ret
    };
}
