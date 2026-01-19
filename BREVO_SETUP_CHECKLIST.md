# Brevo Newsletter Setup Checklist

## ✅ Code Changes (DONE)
- [x] Fixed API route to use list 4 (Pending DOI)
- [x] Removed unnecessary `/api/subscribe` proxy route
- [x] Added email trimming and lowercasing
- [x] Treat "already subscribed" as success (security)
- [x] Removed SIGNUP_DATE attribute (only using SOURCE)
- [x] Newsletter component only contains newsletter section
- [x] Confirmed page only in `app/newsletter/confirmed/page.tsx`

## 🔧 Vercel Environment Variables
Set these in Vercel (Production + Preview):

```
BREVO_API_KEY=your_actual_api_key
BREVO_DOI_TEMPLATE_ID=2
BREVO_NEWSLETTER_LIST_ID=4
BREVO_DOI_REDIRECT_URL=https://aiseo.hamburg/newsletter/confirmed
```

## 📧 Brevo Configuration (YOU MUST DO)

### 1. Create Contact Attribute
- Go to Brevo → Contacts → Attributes
- Create attribute: `SOURCE` (type: Text)

### 2. Setup DOI Template (ID 2)
- Template must include DOI link placeholder
- Sender: `newsletter@aiseo.hamburg` / "AISEO Newsletter"  
- Include unsubscribe footer (Brevo enforces this)

### 3. Create Lists
- List 4: "Newsletter Pending (DOI)" 
- List 5: "Newsletter Confirmed"

### 4. Setup Automation (CRITICAL)
- Trigger: "Contact subscribed via DOI and confirmed"
- Actions:
  - Add to list 5 (Confirmed)
  - Remove from list 4 (Pending)

Without this automation, confirmed subscribers stay in pending list!

## 🧪 Testing Flow
1. Submit email → Check list 4 (should appear)
2. Click DOI email → Should redirect to confirmation page
3. Check list 5 (should appear) and list 4 (should be removed)

## 🔒 Security Features
- Email enumeration protection (treats "already exists" as success)
- Input sanitization (trim, lowercase)
- Proper error handling without exposing sensitive details