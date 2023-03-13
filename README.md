# CAP Dynamic Service Consumption

This CAP Projects follows the recommended project layout:

| File or Folder | Purpose                              |
| -------------- | ------------------------------------ |
| `app/`         | content for UI frontends goes here   |
| `db/`          | your domain models and data go here  |
| `srv/`         | your service models and code go here |
| `package.json` | project metadata and configuration   |
| `readme.md`    | this getting started guide           |

In addition

| File or Folder | Purpose           |
| -------------- | ----------------- |
| `tests/`       | REST Client tests |

## Connecting to services

You have to add the following content to **default-env.json**:

```JSON
{
  "VCAP_SERVICES": {},
  "destinations": [
    {
      "name": "ODataOrg",
      "url": "https://services.odata.org"
    },
    {
      "name": "bookshop",
      "url": "http://localhost:4004",
      "username": "bob",
      "password": "bob"
    },
    {
      "name": "S4H",
      "url": "https://sandbox.api.sap.com/s4hanacloud",
      "headers": {
        "APIKey": "Your own api.sap.com API Key"
      }
    }
  ]
}
```

## Start the project

- Open a new terminal and run `npm start`
- In another terminal start https://github.com/gregorwolf/bookshop-demo project
