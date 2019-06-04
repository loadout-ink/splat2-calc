/*
 * Encoding allows to encode a set of gears and abilities into a single string and vice-versa. 
 * 
 * The encoded string is composed of 25 (version 0) or 32 (version 1) hexadecimal characters (from 0 to 9 and from A to F).
 * The first digit is the version number of the encoding mechanism and is currently 1.
 * This will allow to change the encoding method in the future while ensuring backward compatibility.
 * 
 * Version 0 Format
 * ------------------------------------------------------------------------------------------------
 * The encoded string is composed of 25 hexadecimal characters (from 0 to 9 and from A to F).
 * The first digit is the version number and is 0 for this format.
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
 * ------------------------------------------------------------------------------------------------
 * ------------------------------------------------------------------------------------------------
 * Version 1 Format:
 * 
 * 1 XXXX XXXXXXXXX XXXXXXXXX XXXXXXXXX
 * ^ ^    ^         ^         ^
 * | |    |         |         |    
 * Version Number   |         |    
 *   |    |         |         |    
 *   Hexadecimal Weapon ID    |
 *        |         |         |    
 *        Encoded Hat         |
 *                  |         |
 *                  Encoded Clothes
 *                            |
 *                            Encoded Shoes
 * 
 * In contrast to version 0, weapons and all pieces of gear are now addressed by their ingame IDs.
 * Weapon sets are no longer part of the code. Instead, all weapons use a unique ID from game data.
 * 
 * Gears (hats, clothes, shoes) are all encoded the same way. 
 * The value is made of 9 hexadecimal characters.
 * 
 * Format:
 * XXXX XXXXX
 * |    |
 * Hexadecimal Gear ID
 *      |
 *      Abilities
 * 
 * Abilities format:
 * 
 * Abilities are encoded in the same way they are in version 0.
 *  
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

function encode(loadout) {
	// var hexString = '0' // version number
	// hexString += selectedSetId
	// hexString += hex8(loadout.weapon.id);
	// hexString += encodeGear(loadout.head);
	// hexString += encodeGear(loadout.clothes);
	// hexString += encodeGear(loadout.shoes);
	// return hexString;

	var hexString = '1'; // we version 1 now

	hexString += hex16(loadout.weapon.splatnet);

	hexString += hex16(loadout.head.equipped.splatnet);
	hexString += encodeAbilities(loadout.head);

	hexString += hex16(loadout.clothes.equipped.splatnet);
	hexString += encodeAbilities(loadout.clothes);

	hexString += hex16(loadout.shoes.equipped.splatnet);
	hexString += encodeAbilities(loadout.shoes);
	return hexString;
}

function encodeGear(item) {
	var string = hex8(item.equipped.id);
	var abilities = '';
	if (item.main == null) {
		abilities += bin5(0);
	} else {
		abilities += bin5(item.main.id);
	}
	for (var i = 0; i < item.subs.length; i++) {
		if (item.subs[i] == null) {
			abilities += bin5(0);
		} else {
			abilities += bin5(item.subs[i].id);
		}
	}
	string += binaryToHex(abilities).result;
	return string;
}

function encodeAbilities(item) {
	var abilities = '';
	if (item.main == null) {
		abilities += bin5(0);
	} else {
		abilities += bin5(item.main.id);
	}
	for (var i = 0; i < item.subs.length; i++) {
		if (item.subs[i] == null) {
			abilities += bin5(0);
		} else {
			abilities += bin5(item.subs[i].id);
		}
	}
	return binaryToHex(abilities).result;
}

function decodeGear(code) {
	var gearid = parseInt(code.substring(0, 4), 16);
	var rawAbilities = code.substring(4, 9);
	var binAbilities = hexToBinary(rawAbilities).result;
	var main = parseInt(binAbilities.substring(0, 5), 2);
	var subs = [];
	for (var i = 5; i < binAbilities.length; i += 5) {
		subs.push(parseInt(binAbilities.substring(i, i + 5), 2));
	}
	return { gear: gearid, main: main, subs: subs };
}

function decodeGearV0(code, slot) {
	var gearid = version0_map(slot, parseInt(code.substring(0, 2), 16));
	var rawAbilities = code.substring(2, 8);
	var binAbilities = hexToBinary(rawAbilities).result;
	var main = parseInt(binAbilities.substring(0, 5), 2);
	var subs = [];
	for (var i = 5; i < binAbilities.length; i += 5) {
		subs.push(parseInt(binAbilities.substring(i, i + 5), 2));
	}
	return { gear: gearid, main: main, subs: subs };
}

function hex8(val) {
	val &= 0xff;
	var hex = val.toString(16).toLowerCase();
	return ('00' + hex).slice(-2);
}

function hex16(val) {
	val &= 0xffff;
	var hex = val.toString(16).toLowerCase();
	return ('0000' + hex).slice(-4);
}

function bin5(val) {
	var bin = val.toString(2);
	bin = '00000'.substr(bin.length) + bin;
	return bin;
}

function decode(code) {
	if (code[0] == 0 && code.length == 25) {
		try {
			var weaponset = parseInt(code[1]);
			var weaponsetid = parseInt(code.substring(2, 4), 16);
			console.log('set: ' + weaponset + 'id:' + weaponsetid);
			var weaponid = version0_mapWeapon(weaponset, weaponsetid);
			var head = decodeGearV0(code.substring(4, 11), 'head');
			var clothes = decodeGearV0(code.substring(11, 18), 'clothes');
			var shoes = decodeGearV0(code.substring(18, 25), 'shoes');
		} catch (err) {
			console.log('Invalid code: ' + err.message);
			return false;
		}
		return { weapon: weaponid, head: head, clothes: clothes, shoes: shoes };
	}
	if (code[0] == 1 && code.length == 32) {
		try {
			console.log(code.substring(1, 5));
			var weaponid = parseInt(code.substring(1, 5), 16);
			console.log(weaponid);
			var head = decodeGear(code.substring(5, 14), 16);
			var clothes = decodeGear(code.substring(14, 23), 16);
			var shoes = decodeGear(code.substring(23, 32), 16);
		} catch (err) {
			console.log('Invalid code: ' + err.message);
			return false;
		}
		return { weapon: weaponid, head: head, clothes: clothes, shoes: shoes };
	} else {
		console.log('invalid code');
		return false;
	}
}

function binaryToHex(s) {
	var i,
		k,
		part,
		accum,
		ret = '';
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
	var i,
		k,
		part,
		ret = '';
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
		a: '1010',
		b: '1011',
		c: '1100',
		d: '1101',
		e: '1110',
		f: '1111',
		A: '1010',
		B: '1011',
		C: '1100',
		D: '1101',
		E: '1110',
		F: '1111'
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

function version0_map(slot, id) {
	return version0_lookup[slot][id] || id;
}

function version0_mapWeapon(set, id) {
	return version0_lookup.weapons[set][id] || 0;
}

var version0_lookup = {
	head: {
		'0': 1,
		'1': 1000,
		'2': 1001,
		'3': 1002,
		'4': 1004,
		'6': 1005,
		'7': 1006,
		'8': 1007,
		'9': 1008,
		'10': 1009,
		'11': 1011,
		'13': 1014,
		'15': 1018,
		'16': 1019,
		'17': 1020,
		'18': 1023,
		'20': 1025,
		'22': 1026,
		'23': 1027,
		'24': 2000,
		'25': 2002,
		'27': 2004,
		'29': 2005,
		'30': 2006,
		'31': 2008,
		'32': 2009,
		'33': 2011,
		'35': 3000,
		'36': 3002,
		'38': 3003,
		'39': 3005,
		'41': 3006,
		'42': 3007,
		'43': 3008,
		'44': 3010,
		'46': 3011,
		'47': 3013,
		'49': 3014,
		'50': 3015,
		'51': 3016,
		'52': 3017,
		'53': 3018,
		'54': 3019,
		'55': 3020,
		'56': 4000,
		'57': 4002,
		'59': 4003,
		'60': 4004,
		'61': 4005,
		'62': 4007,
		'64': 4008,
		'65': 4009,
		'66': 4011,
		'68': 4012,
		'69': 4013,
		'70': 4014,
		'71': 5000,
		'72': 5002,
		'74': 5003,
		'75': 5005,
		'77': 5006,
		'78': 6000,
		'79': 6001,
		'80': 6002,
		'81': 6003,
		'82': 7000,
		'84': 7004,
		'86': 7005,
		'87': 7006,
		'88': 7007,
		'89': 7009,
		'91': 7011,
		'93': 8000,
		'94': 8001,
		'95': 8003,
		'97': 8004,
		'98': 8005,
		'99': 8006,
		'100': 8007,
		'101': 8008,
		'102': 8009,
		'103': 8011,
		'105': 8012,
		'106': 8013,
		'107': 9002,
		'109': 9003,
		'110': 9004,
		'111': 9005,
		'112': 9008,
		'114': 21000,
		'116': 21002,
		'118': 21003,
		'119': 21004,
		'120': 21005,
		'121': 21007,
		'123': 21009,
		'124': 22000,
		'125': 24000,
		'126': 24001,
		'127': 24002,
		'128': 24003,
		'129': 24004,
		'130': 24005,
		'131': 24006,
		'132': 24007,
		'133': 24008,
		'134': 24009,
		'135': 24010,
		'136': 24011,
		'137': 25000,
		'138': 25001,
		'139': 25002,
		'140': 25003,
		'141': 25004,
		'142': 25005,
		'143': 25006,
		'144': 25007,
		'145': 25008,
		'146': 25009,
		'147': 25010,
		'148': 27000,
		'149': 27004,
		'150': 27101,
		'151': 27104,
		'152': 27105,
		'153': 27106,
		'154': 27107,
		'155': 27108
	},
	clothes: {
		'0': 2,
		'1': 3,
		'2': 1000,
		'3': 1001,
		'4': 1003,
		'5': 1004,
		'6': 1005,
		'7': 1006,
		'8': 1007,
		'9': 1008,
		'10': 1009,
		'11': 1010,
		'12': 1011,
		'13': 1012,
		'14': 1013,
		'15': 1014,
		'16': 1015,
		'17': 1016,
		'18': 1017,
		'19': 1018,
		'20': 1019,
		'21': 1020,
		'22': 1021,
		'23': 1022,
		'24': 1023,
		'25': 1026,
		'26': 1027,
		'27': 1028,
		'28': 1029,
		'29': 1030,
		'30': 1031,
		'31': 1032,
		'32': 1033,
		'33': 1034,
		'34': 1035,
		'35': 1036,
		'36': 1037,
		'37': 1038,
		'38': 1039,
		'39': 1040,
		'40': 1041,
		'41': 1042,
		'42': 1043,
		'43': 1044,
		'44': 1045,
		'45': 1046,
		'46': 1047,
		'47': 1048,
		'48': 1049,
		'49': 1050,
		'50': 1051,
		'51': 1052,
		'52': 1053,
		'53': 1054,
		'54': 1055,
		'55': 1056,
		'56': 1057,
		'57': 1058,
		'58': 1059,
		'59': 1060,
		'60': 1061,
		'61': 2000,
		'62': 2001,
		'63': 2002,
		'64': 2003,
		'65': 2004,
		'66': 2005,
		'67': 2006,
		'68': 2007,
		'69': 2008,
		'70': 2009,
		'71': 2010,
		'72': 2011,
		'73': 2012,
		'74': 2013,
		'75': 2014,
		'76': 2015,
		'77': 2016,
		'78': 2017,
		'79': 2018,
		'80': 2019,
		'81': 2020,
		'82': 2021,
		'83': 2022,
		'84': 2023,
		'85': 2024,
		'86': 3000,
		'87': 3001,
		'88': 3002,
		'89': 3003,
		'90': 3004,
		'91': 3005,
		'92': 3006,
		'93': 3007,
		'94': 3008,
		'95': 3009,
		'96': 3010,
		'97': 3011,
		'98': 3012,
		'99': 3013,
		'100': 4000,
		'101': 4001,
		'102': 4002,
		'103': 4003,
		'104': 4004,
		'105': 4005,
		'106': 4006,
		'107': 4007,
		'108': 4008,
		'109': 5000,
		'110': 5001,
		'111': 5002,
		'112': 5003,
		'113': 5004,
		'114': 5005,
		'115': 5006,
		'116': 5007,
		'117': 5008,
		'118': 5009,
		'119': 5010,
		'120': 5011,
		'121': 5012,
		'122': 5013,
		'123': 5014,
		'124': 5015,
		'125': 5016,
		'126': 5017,
		'127': 5018,
		'128': 5019,
		'129': 5020,
		'130': 5021,
		'131': 5022,
		'132': 5023,
		'133': 5024,
		'134': 5025,
		'135': 5026,
		'136': 5027,
		'137': 5028,
		'138': 5029,
		'139': 5030,
		'140': 5031,
		'141': 5032,
		'142': 5033,
		'143': 5034,
		'144': 5035,
		'145': 5036,
		'146': 5037,
		'147': 5038,
		'148': 5039,
		'149': 5040,
		'150': 5041,
		'151': 5042,
		'152': 5043,
		'153': 5044,
		'154': 6000,
		'155': 6001,
		'156': 6003,
		'157': 6004,
		'158': 6005,
		'159': 6006,
		'160': 7000,
		'161': 7001,
		'162': 7002,
		'163': 7003,
		'164': 7004,
		'165': 7005,
		'166': 7006,
		'167': 7007,
		'168': 7008,
		'169': 7009,
		'170': 7010,
		'171': 7011,
		'172': 7012,
		'173': 7013,
		'174': 7014,
		'175': 7015,
		'176': 8000,
		'177': 8001,
		'178': 8002,
		'179': 8003,
		'180': 8004,
		'181': 8005,
		'182': 8006,
		'183': 8007,
		'184': 8008,
		'185': 8009,
		'186': 8010,
		'187': 8011,
		'188': 8012,
		'189': 8013,
		'190': 8014,
		'191': 8015,
		'192': 8017,
		'193': 8018,
		'194': 8019,
		'195': 8020,
		'196': 8021,
		'197': 8022,
		'198': 8023,
		'199': 8024,
		'200': 8025,
		'201': 8026,
		'202': 8027,
		'203': 8028,
		'204': 8029,
		'205': 9000,
		'206': 9001,
		'207': 9002,
		'208': 9003,
		'209': 9004,
		'210': 9005,
		'211': 9007,
		'212': 9008,
		'213': 9009,
		'214': 10000,
		'215': 10001,
		'216': 10002,
		'217': 10004,
		'218': 10005,
		'219': 10006,
		'220': 10007,
		'221': 10008,
		'222': 10009,
		'223': 10010,
		'224': 10011,
		'225': 21000,
		'226': 21001,
		'227': 21002,
		'228': 21003,
		'229': 21004,
		'230': 21005,
		'231': 21006,
		'232': 21007,
		'233': 21008,
		'234': 21009,
		'235': 21010,
		'236': 25000,
		'238': 25001,
		'239': 25002,
		'240': 25003,
		'241': 25004,
		'242': 25005,
		'243': 25006,
		'244': 25007,
		'245': 25008,
		'246': 25009,
		'247': 25010,
		'248': 26000,
		'249': 27000,
		'250': 27004,
		'251': 27101,
		'252': 27104,
		'253': 27105,
		'254': 27106
	},
	shoes: {
		'0': 1,
		'1': 1000,
		'2': 1001,
		'3': 1002,
		'4': 1003,
		'5': 1004,
		'6': 1005,
		'7': 1006,
		'8': 1007,
		'9': 1008,
		'10': 1009,
		'11': 1010,
		'12': 1011,
		'13': 1012,
		'14': 1013,
		'15': 1014,
		'16': 1015,
		'17': 1016,
		'18': 1017,
		'19': 1018,
		'20': 1019,
		'21': 1020,
		'22': 2000,
		'23': 2001,
		'24': 2002,
		'25': 2003,
		'26': 2004,
		'27': 2005,
		'28': 2006,
		'29': 2008,
		'30': 2009,
		'31': 2010,
		'32': 2011,
		'33': 2012,
		'34': 2013,
		'35': 2014,
		'36': 2015,
		'37': 2016,
		'38': 2017,
		'39': 2018,
		'40': 2019,
		'41': 2020,
		'42': 2021,
		'43': 2022,
		'44': 2023,
		'45': 2024,
		'46': 2025,
		'47': 2026,
		'48': 2027,
		'49': 2028,
		'50': 2029,
		'51': 2030,
		'52': 2031,
		'53': 2032,
		'54': 2033,
		'55': 2034,
		'56': 2035,
		'57': 2036,
		'58': 2037,
		'59': 2038,
		'60': 2039,
		'61': 2040,
		'62': 2041,
		'63': 3000,
		'64': 3001,
		'65': 3002,
		'66': 3003,
		'67': 3004,
		'68': 3005,
		'69': 3006,
		'70': 3007,
		'71': 3008,
		'72': 3009,
		'73': 3010,
		'74': 3011,
		'75': 3012,
		'76': 3013,
		'77': 3014,
		'78': 3015,
		'79': 3016,
		'80': 3017,
		'81': 3018,
		'82': 3019,
		'83': 4000,
		'84': 4001,
		'85': 4002,
		'86': 4003,
		'87': 4007,
		'88': 4008,
		'89': 4009,
		'90': 4010,
		'91': 4011,
		'92': 4012,
		'93': 4013,
		'94': 5000,
		'95': 5001,
		'96': 5002,
		'97': 6000,
		'98': 6001,
		'99': 6002,
		'100': 6003,
		'101': 6004,
		'102': 6005,
		'103': 6006,
		'104': 6007,
		'105': 6008,
		'106': 6009,
		'107': 6010,
		'108': 6011,
		'109': 6012,
		'110': 6013,
		'111': 6014,
		'112': 6015,
		'113': 6016,
		'114': 6017,
		'115': 6018,
		'116': 7000,
		'117': 7001,
		'118': 7002,
		'119': 7003,
		'120': 8000,
		'121': 8001,
		'122': 8002,
		'123': 8003,
		'124': 8004,
		'125': 8005,
		'126': 8006,
		'127': 8007,
		'128': 8008,
		'129': 8010,
		'130': 8011,
		'131': 8009,
		'132': 8012,
		'133': 21001,
		'134': 21002,
		'135': 21003,
		'136': 21005,
		'137': 21006,
		'138': 22000,
		'139': 23000,
		'140': 23001,
		'141': 23002,
		'142': 23003,
		'143': 23004,
		'144': 23005,
		'145': 23006,
		'146': 23007,
		'147': 25000,
		'148': 25001,
		'149': 25002,
		'150': 25003,
		'151': 25004,
		'152': 25005,
		'153': 25006,
		'154': 25007,
		'155': 25008,
		'156': 25009,
		'157': 25010,
		'158': 27000,
		'159': 27004,
		'160': 27101,
		'161': 27104,
		'162': 27105,
		'163': 27106
	},
	weapons: [
		{
			'0': 0,
			'1': 1,
			'2': 2,
			'3': 10,
			'4': 11,
			'5': 12,
			'6': 20,
			'7': 21,
			'8': 30,
			'9': 31,
			'10': 32,
			'11': 40,
			'12': 41,
			'13': 42,
			'14': 45,
			'15': 46,
			'16': 50,
			'17': 51,
			'18': 52,
			'19': 60,
			'20': 61,
			'21': 62,
			'22': 70,
			'23': 71,
			'24': 72,
			'25': 80,
			'26': 81,
			'27': 90,
			'28': 91,
			'29': 300,
			'30': 301,
			'31': 302,
			'32': 310,
			'33': 311,
			'34': 312,
			'35': 400,
			'36': 401
		},
		{
			'0': 200,
			'1': 201,
			'2': 202,
			'3': 210,
			'4': 211,
			'5': 215,
			'6': 220,
			'7': 221,
			'8': 222,
			'9': 230,
			'10': 231,
			'11': 240,
			'12': 241,
			'13': 242,
			'14': 250,
			'15': 251
		},
		{
			'0': 1000,
			'1': 1001,
			'2': 1010,
			'3': 1011,
			'4': 1012,
			'5': 1015,
			'6': 1020,
			'7': 1021,
			'8': 1022,
			'9': 1030,
			'10': 1031
		},
		{
			'0': 1100,
			'1': 1101,
			'2': 1102,
			'3': 1110,
			'4': 1111,
			'5': 1112,
			'6': 1115
		},
		{
			'0': 2000,
			'1': 2001,
			'2': 2002,
			'3': 2010,
			'4': 2011,
			'5': 2012,
			'6': 2015,
			'7': 2020,
			'8': 2021,
			'9': 2022,
			'10': 2030,
			'11': 2031,
			'12': 2040,
			'13': 2041,
			'14': 2050,
			'15': 2051,
			'16': 2052,
			'17': 2060,
			'18': 2061
		},
		{
			'0': 3000,
			'1': 3001,
			'2': 3002,
			'3': 3005,
			'4': 3010,
			'5': 3011,
			'6': 3020,
			'7': 3021,
			'8': 3022,
			'9': 3030,
			'10': 3031,
			'11': 3040,
			'12': 3041
		},
		{
			'0': 4000,
			'1': 4001,
			'2': 4002,
			'3': 4010,
			'4': 4011,
			'5': 4012,
			'6': 4015,
			'7': 4020,
			'8': 4021,
			'9': 4030,
			'10': 4031,
			'11': 4040,
			'12': 4041
		},
		{
			'0': 5000,
			'1': 5001,
			'2': 5002,
			'3': 5010,
			'4': 5011,
			'5': 5012,
			'6': 5015,
			'7': 5020,
			'8': 5021,
			'9': 5022,
			'10': 5030,
			'11': 5031,
			'12': 5040,
			'13': 5041
		},
		{
			'0': 6000,
			'1': 6001,
			'2': 6005,
			'3': 6010,
			'4': 6011,
			'5': 6012,
			'6': 6020,
			'7': 6021,
			'8': 6022
		}
	]
};
