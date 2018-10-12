const IBMCloudEnv = require('ibm-cloud-env');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports = function(app, serviceManager){
	const assistant = new AssistantV1({
		iam_apikey: process.env.WATSON_ASSISTANT_APIKEY,
		//username: process.env.WATSON_ASSISTANT_USERNAME,
		//password: process.env.WATSON_ASSISTANT_PASSWORD,
		url: process.env.WATSON_ASSISTANT_URL,
		version: '2018-09-20',
	});

	serviceManager.set('watson-conversation', assistant);
};
