const net = require('net')

const commandMap = require('./commandMap')

let logger = {
	log: () => null,
	error: () => null,
}

const executeCommand = ({ ip, port, command, debug }) => (
	new Promise((resolve, reject) => {
		if (debug) {
			logger = console
		}

		const client = net.createConnection(port || 10001, ip, () => {
			logger.log('connected') 
			client.write(commandMap[command].cmd) 
		})

		client.on('data', (data) => {
			const str = data.toString()
			logger.log('got data', str)
			resolve(str)
			client.end() 
		})

		client.on('end', () => {
			logger.log('disconnected') 
		})

		client.on('error', e => {
			logger.error(e)
			reject(e)
		})
	})
)

module.exports = executeCommand