const IBMCloudEnv = require('ibm-cloud-env');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');

module.exports = function(app, serviceManager){
	
	console.log('MIKE: api_key = ' + process.env.WATSON_ASSISTANT_APIKEY);
	
	const assistant = new AssistantV1({
<<<<<<< HEAD
		iam_apikey: IBMCloudEnv.getString('watson_assistant_apikey'),
		url: IBMCloudEnv.getString('watson_assistant_url'),
		version: '2018-07-10',
=======
		api_key: process.env.WATSON_ASSISTANT_APIKEY,
		//username: process.env.WATSON_ASSISTANT_USERNAME,
		//password: process.env.WATSON_ASSISTANT_PASSWORD,
		url: process.env.WATSON_ASSISTANT_URL,
		version: '2018-09-20',
>>>>>>> bf037964ad223a63e5365949e978e3f499f93496
	});

	serviceManager.set('watson-conversation', assistant);
};
