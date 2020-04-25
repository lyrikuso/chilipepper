define({ "api": [
  {
    "type": "post",
    "url": "/api/bootgrid",
    "title": "",
    "group": "API/BOOTGRID",
    "name": "Bootgrid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Spreadsheet URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "current",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rowCount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchMode",
            "description": "<p>&quot;startsWith&quot;, &quot;endsWith&quot; or something else. Default behavior is &quot;include&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchPhrase",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "fields": {
        "500": [
          {
            "group": "500",
            "optional": false,
            "field": "error",
            "description": "<p>Unable to access database.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>Total row count of the DB file.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>Rows body.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/bootgrid.js",
    "groupTitle": "API/BOOTGRID"
  }
] });
