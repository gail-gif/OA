#!/usr/bin/env bash
# Checks the GoHighLevel (LeadConnector) API connection.
# Needs: GHL_API_TOKEN (Private Integration Token) and GHL_LOCATION_ID (sub-account ID).
set -euo pipefail
: "${GHL_API_TOKEN:?GHL_API_TOKEN is not set}"
: "${GHL_LOCATION_ID:?GHL_LOCATION_ID is not set}"
API=https://services.leadconnectorhq.com
H=(-H "Authorization: Bearer $GHL_API_TOKEN" -H "Version: 2021-07-28" -H "Accept: application/json")

echo "1) Location lookup"
code=$(curl -sS -o /tmp/ghl_loc.json -w '%{http_code}' "${H[@]}" "$API/locations/$GHL_LOCATION_ID")
echo "   HTTP $code"; [ "$code" = 200 ] && python3 -c 'import json;d=json.load(open("/tmp/ghl_loc.json")).get("location",{});print("   Location:",d.get("name"),"|",d.get("email"))' || cat /tmp/ghl_loc.json

echo "2) Contacts read (1 record)"
code=$(curl -sS -o /tmp/ghl_c.json -w '%{http_code}' "${H[@]}" "$API/contacts/?locationId=$GHL_LOCATION_ID&limit=1")
echo "   HTTP $code"; [ "$code" = 200 ] && python3 -c 'import json;d=json.load(open("/tmp/ghl_c.json"));print("   Total contacts:",d.get("meta",{}).get("total"))' || cat /tmp/ghl_c.json
