module.exports = {
	'ALARM': {
		desc: 'I30200 Sensor alarm history (untested)',
		cmd: '\u0001I30200'
	},
	'ALARM_RESET': {
		desc: 'IS00300 Remote alarm reset (untested)',
		cmd: '\u0001IS00300'
	},
	'DELIVERY': {
		desc: 'I20200 Delivery report',
		cmd: '\u0001I20200'
	},
	'INVENTORY': {
		desc: '200/I20100 In-tank inventory report',
		cmd: '\u0001I20100'
	},
	'LEAK': {
		desc: 'I20300 Leak report',
		cmd: '\u0001I20300'
	},
	'RELAY': {
		desc: 'I40600 Relay status (untested)',
		cmd: '\u0001I40600'
	},
	'RESET': {
		desc: 'IS00100 Reset (untested)',
		cmd: '\u0001IS00100'
	},
	'CLEAR_RESET': {
		desc: 'IS00200 Clear Reset Flag (untested)',
		cmd: '\u0001IS00200'
	},
	'SENSOR': {
		desc: 'I30100 Sensor status (untested)',
		cmd: '\u0001I30100'
	},
	'SENSOR_DIAG': {
		desc: 'IB0100 Sensor diagnostics (untested)',
		cmd: '\u0001IB0100'
	},
	'SHIFT': {
		desc: 'I20400 Shift report',
		cmd: '\u0001I20400'
	},
	'SET_TANK_NAME': {
		desc: 'S602 set tank name (use TANK_NUMBER and TANK_NAME options)',
		cmd: '\u0001S602'
	},
	'STATUS': {
		desc: 'I20500 In-tank status report',
		cmd: '\u0001I20500'
	},
	'SYSTEM_STATUS': {
		desc: 'I10100 System status report (untested)',
		cmd: '\u0001I10100'
	},
	'TANK_ALARM': {
		desc: 'I20600 Tank alarm history (untested)',
		cmd: '\u0001I20600'
	},
	'TANK_DIAG': {
		desc: 'IA0100 Tank diagnostics (untested)',
		cmd: '\u0001IA0100'
	},
	'VERSION': {
		desc: 'Version information',
		cmd: '\u0001I90200'
	}
}