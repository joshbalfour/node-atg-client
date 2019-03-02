atg-client
====

# Description

This module acts as a simplistic administrative client for interfacing with Veeder-Root Automatic Tank Gauges (ATGs) or other devices speaking the TLS-350 protocol.
This has been tested against [GasPot](https://github.com/sjhilt/GasPot) and [Conpot](http://conpot.org/), both honeypots meant to simulate ATGs; it has not been tested against anything else, so use at your own risk.

Inspired by this [metaspoilt module](https://github.com/rapid7/metasploit-framework/blob/master/modules/auxiliary/admin/atg/atg_client.rb).


# Installation

`npm i atg-client --save`

# Usage

```js
const atg = require('atg')

const opts = {
	ip: '',
	port: 10001,
	command: 'INVENTORY',
	debug: false,
}

atg(opts)
	.then(d => {
		console.log(d) // log output
	})
	.catch(e => {
		console.error(e)
	})
```

| Command  |      Description      |
|----------|:-------------:|
ALARM | I30200 Sensor alarm history (untested)
ALARM_RESET | IS00300 Remote alarm reset (untested)
DELIVERY | I20200 Delivery report
INVENTORY | 200/I20100 In-tank inventory report
LEAK | I20300 Leak report
RELAY | I40600 Relay status (untested)
RESET | IS00100 Reset (untested)
CLEAR_RESET | IS00200 Clear Reset Flag (untested)
SENSOR | I30100 Sensor status (untested)
SENSOR_DIAG | IB0100 Sensor diagnostics (untested)
SHIFT | I20400 Shift report
SET_TANK_NAME | S602 set tank name (use TANK_NUMBER and TANK_NAME options)
STATUS | I20500 In-tank status report
SYSTEM_STATUS | I10100 System status report (untested)
TANK_ALARM | I20600 Tank alarm history (untested)
TANK_DIAG | IA0100 Tank diagnostics (untested)
VERSION | Version information

