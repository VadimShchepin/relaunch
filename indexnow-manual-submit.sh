#!/bin/bash

echo "🚀 Manual IndexNow submission for aiseo.hamburg"
echo "⚠️  Use this if the automated script fails"
echo ""

# Direct curl submission without key file verification
echo "📤 Submitting directly to IndexNow API..."

curl -X POST \
    -H "Content-Type: application/json; charset=utf-8" \
    -d @indexnow-request.json \
    -v \
    https://api.indexnow.org/indexnow

echo ""
echo "✅ Manual submission completed"
echo "💡 Check the HTTP response code above:"
echo "   • 200/202 = Success"
echo "   • 400 = Bad request (check JSON)"
echo "   • 403 = Key verification failed"
echo "   • 422 = Invalid URLs"