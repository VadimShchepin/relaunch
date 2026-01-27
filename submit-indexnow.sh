#!/bin/bash

echo "🚀 Submitting URLs to IndexNow API for aiseo.hamburg..."
echo ""

# Check if the JSON file exists
if [ ! -f "indexnow-request.json" ]; then
    echo "❌ ERROR: indexnow-request.json file not found!"
    echo "Please ensure the file exists in the current directory."
    exit 1
fi

# Verify key file is accessible
echo "🔍 Verifying key file accessibility..."
key_check=$(curl -s -o /dev/null -w "%{http_code}" https://aiseo.hamburg/85c8f2a45ebf4cfbb17cd9bd7f0a8a2e.txt)

if [ "$key_check" != "200" ]; then
    echo "❌ ERROR: Key file not accessible at https://aiseo.hamburg/85c8f2a45ebf4cfbb17cd9bd7f0a8a2e.txt"
    echo "HTTP Status: $key_check"
    echo "Please ensure the key file is uploaded and publicly accessible."
    exit 1
fi

echo "✅ Key file is accessible"
echo ""

# Make the IndexNow API request
echo "📤 Submitting to IndexNow API..."
response=$(curl -s -w "\nHTTP_STATUS:%{http_code}" -X POST \
    -H "Content-Type: application/json; charset=utf-8" \
    -d @indexnow-request.json \
    https://api.indexnow.org/indexnow)

# Extract HTTP status and response body
http_status=$(echo "$response" | grep "HTTP_STATUS:" | cut -d: -f2)
response_body=$(echo "$response" | sed '/HTTP_STATUS:/d')

echo "📊 Response Details:"
echo "HTTP Status: $http_status"
echo "Response Body: $response_body"
echo ""

# Interpret the response
case "$http_status" in
    "200")
        echo "✅ SUCCESS: URLs successfully submitted to IndexNow!"
        echo "🎉 Search engines have been notified of your content updates."
        ;;
    "202")
        echo "✅ ACCEPTED: URLs accepted for processing by IndexNow!"
        echo "⏳ Search engines will process the submitted URLs shortly."
        ;;
    "400")
        echo "❌ ERROR: Bad request - Invalid JSON format or malformed URLs"
        echo "💡 Check your indexnow-request.json file for syntax errors."
        ;;
    "403")
        echo "❌ ERROR: Forbidden - Key verification failed"
        echo "💡 Ensure your key file is accessible and contains the correct key."
        ;;
    "422")
        echo "❌ ERROR: Unprocessable entity - Invalid URLs or key mismatch"
        echo "💡 Verify all URLs are from the same domain and publicly accessible."
        ;;
    *)
        echo "⚠️  UNKNOWN STATUS: $http_status"
        echo "💡 This might be a temporary API issue. Try again later."
        ;;
esac

echo ""
echo "📋 Submitted URLs:"
cat indexnow-request.json | grep -A 20 '"urlList"' | grep 'https://' | sed 's/.*"https:/• https:/' | sed 's/",*//'
echo ""
echo "📚 Note: IndexNow typically returns HTTP 200/202 for successful submissions."
echo "🕐 Search engines may take some time to process and index the submitted URLs."
echo ""
echo "🔄 To resubmit in the future, simply run this script again or update"
echo "   indexnow-request.json with new URLs and run the script."