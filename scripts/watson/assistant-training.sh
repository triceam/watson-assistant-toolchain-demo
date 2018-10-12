

# install bx cli?

sudo apt-get update
sudo apt-get install jq -y


# must have authenticated bx instance 

SERVICE_NAME="watson-assistant-bas-conversation-1539357893290"
APIKEY=""
WORKSPACE_ID="5fafba09-f7ee-421d-b797-f6be05800fcd"
HOST="https://gateway-wdc.watsonplatform.net/assistant/api"
TRAINING_DATA_PATH="training-data/workspace-customer-care-en.json"

echo "fetching service keys"
SERVICE_KEYS=$(bx resource service-keys --instance-name $SERVICE_NAME)

echo "fetching service instance guid"
SERVICE_GUID=$(echo $SERVICE_KEYS | awk 'BEGIN{FS="Created At "} {print $2}' | awk '{ print $1 }')

echo "fetching credentials"
CREDENTIALS=$(bx resource service-key $SERVICE_GUID)
#echo $CREDENTIALS

echo "fetching apikey"
APIKEY=$(echo $CREDENTIALS | jq .credentials.apikey |  sed 's/\"//g')

echo "posting update to watson instance"
curl -H "Content-Type: application/json" -vX POST -u "apikey:$APIKEY" -d @$TRAINING_DATA_PATH --header "Content-Type: application/json" "$HOST/v1/workspaces/$WORKSPACE_ID?version=2018-09-20"
