# Google Sheets Lead Capture

Use this to connect the `Book a Consultation` form to Google Sheets.

## 1. Create the Sheet

Create a Google Sheet with a tab named `Leads`.

Add this header row:

```text
Submitted At | Name | Phone | City | Property Type | Source
```

## 2. Add Apps Script

Open **Extensions > Apps Script** and paste:

```javascript
const SHEET_NAME = "Leads";
const HEADERS = ["Submitted At", "Name", "Phone", "City", "Property Type", "Source"];

function doGet() {
  return ContentService
    .createTextOutput("Zimarix lead capture is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  if (!e || !e.parameter) {
    return jsonResponse({
      ok: false,
      error: "No POST data received. Submit from the website form, not Apps Script Run.",
    });
  }

  const sheet = getOrCreateSheet();
  const data = e.parameter;
  const phone = data.phone ? "'" + data.phone : "";

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    phone,
    data.city || "",
    data.propertyType || "",
    data.source || "zimarix.com",
  ]);

  return jsonResponse({ ok: true });
}

function testAppendLead() {
  const sheet = getOrCreateSheet();

  sheet.appendRow([
    new Date().toISOString(),
    "Test User",
    "'+91 9999999999",
    "Bangalore",
    "Villa",
    "apps-script-test",
  ]);
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  sheet.getRange("C:C").setNumberFormat("@");

  return sheet;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy

Deploy as **Web app**:

- Execute as: **Me**
- Who has access: **Anyone**

Copy the Web App URL.

## 4. Configure the Website

Create `.env` locally:

```bash
VITE_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

For Vercel, add the same variable in Project Settings > Environment Variables.

After changing env vars, restart the dev server or redeploy.
