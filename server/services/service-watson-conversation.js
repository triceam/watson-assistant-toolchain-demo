const IBMCloudEnv = require('ibm-cloud-env');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports = function(app, serviceManager){
	const assistant = new AssistantV1({
		iam_apikey: IBMCloudEnv.getString('watson_assistant_apikey'),
		url: IBMCloudEnv.getString('watson_assistant_url'),
		version: '2018-07-10',
	});

	serviceManager.set('watson-conversation', assistant);
};
