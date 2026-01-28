#!/bin/bash

echo "🚀 IndexNow submission for aiseo.hamburg"
echo ""

# Make the request and capture both response and HTTP status
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST \
    -H "Content-Type: application/json; charset=utf-8" \
    -d @indexnow-request.json \
    https://api.indexnow.org/indexnow)

# Extract HTTP status and response body
http_status=$(echo "$response" | grep "HTTP_STATUS:" | cut -d: -f2)
response_body=$(echo "$response" | sed '/HTTP_STATUS:/d')

echo "HTTP Status: $http_status"
echo "Response Body: $response_body"
echo ""

# Interpret the response
if [ "$http_status" = "200" ]; then
    echo "✅ SUCCESS: URLs successfully submitted to IndexNow!"
elif [ "$http_status" = "202" ]; then
    echo "✅ ACCEPTED: URLs accepted for processing by IndexNow!"
elif [ "$http_status" = "400" ]; then
    echo "❌ ERROR: Bad request - check JSON format or URLs"
elif [ "$http_status" = "403" ]; then
    echo "❌ ERROR: Forbidden - check key file location and permissions"
elif [ "$http_status" = "422" ]; then
    echo "❌ ERROR: Invalid URLs or key verification failed"
else
    echo "⚠️  UNKNOWN STATUS: $http_status"
fi

echo ""
echo "URLs submitted:"
echo "- Homepage and main service pages"
echo "- AI visibility content pages"
echo "- Legal pages (impressum, datenschutz, agb)"
echo ""
echo "Total: 9 URLs submitted for indexing"
echo ""
echo "Note: IndexNow typically returns HTTP 200/202 for successful submissions."
echo "Some search engines may take time to process the submitted URLs."