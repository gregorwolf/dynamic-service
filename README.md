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

## Next Steps

- Open a new terminal and run `cds watch`
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)

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
    }
  ]
}
```
