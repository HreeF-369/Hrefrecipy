const axios = require('axios');

function parseFirestoreFields(fields) {
  const result = {};
  if (!fields) return result;
  
  for (const key of Object.keys(fields)) {
    const valueObj = fields[key];
    if ('stringValue' in valueObj) {
      result[key] = valueObj.stringValue;
    } else if ('integerValue' in valueObj) {
      result[key] = parseInt(valueObj.integerValue);
    } else if ('doubleValue' in valueObj) {
      result[key] = parseFloat(valueObj.doubleValue);
    } else if ('booleanValue' in valueObj) {
      result[key] = valueObj.booleanValue;
    } else if ('arrayValue' in valueObj) {
      const values = valueObj.arrayValue.values || [];
      result[key] = values.map((v) => {
        if ('stringValue' in v) return v.stringValue;
        if ('mapValue' in v) return parseFirestoreFields(v.mapValue.fields);
        return v;
      });
    } else if ('mapValue' in valueObj) {
      result[key] = parseFirestoreFields(valueObj.mapValue.fields);
    }
  }
  return result;
}

async function run() {
  const apiKey = 'AIzaSyC7GTm6KaXwbdzbRVE1titXPYUf7NZHW5k';
  const baseRestUrl = `https://firestore.googleapis.com/v1/projects/massive-legacy-pgtt6/databases/ai-studio-globalgastronomy-10fd9fda-6f00-4ebe-b45f-2d16e20f342f/documents/recipes?key=${apiKey}`;
  try {
    const res = await axios.get(baseRestUrl, {
      headers: {
        'Referer': 'https://dishfit.net/',
        'Origin': 'https://dishfit.net'
      }
    });
    console.log("Documents count:", res.data.documents ? res.data.documents.length : 0);
    if (res.data.documents && res.data.documents.length > 0) {
      const first = res.data.documents[0];
      console.log("Original fields:", JSON.stringify(first.fields, null, 2));
      console.log("Parsed:", parseFirestoreFields(first.fields));
    }
  } catch (e) {
    console.error("Error:", e.response ? JSON.stringify(e.response.data, null, 2) : e.message);
  }
}
run();
