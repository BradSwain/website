---
title: oatpp-sqlite (module)
description: SQLite adapter for Oat++ ORM
sidebarDepth: 0
---

# oatpp-sqlite <seo/>

[Github Repository](https://github.com/oatpp/oatpp-sqlite)  
[Example Project](https://github.com/oatpp/example-crud) 

SQLite adapter for Oat++ ORM.

## Build And Install

*Note: you need to install the main [oatpp](https://github.com/oatpp/oatpp) module first.*

- Clone this repository.
- In the root of the repository run:
   ```bash
   mkdir build && cd build
   cmake ..
   make install
   ```

*This module uses [SQLite amalgamation](https://www.sqlite.org/amalgamation.html) which will be installed as a part of this module.*
   
## API

Detailed documentation on Oat++ ORM you can find [here](https://oatpp.io/docs/components/orm/).

### Connect to Database

All you need to start using oatpp ORM with SQLite is to create `oatpp::sqlite::Executor` and provide it to your `DbClient`.

```cpp
#include "db/MyClient.hpp"
#include "oatpp-sqlite/orm.hpp"

class AppComponent {
public:
  
  /**
   * Create DbClient component.
   * SQLite is used as an example here. For other databases declaration is similar.
   */
  OATPP_CREATE_COMPONENT(std::shared_ptr<db::MyClient>, myDatabaseClient)([] {
    /* Create database-specific ConnectionProvider */
    auto connectionProvider = std::make_shared<oatpp::sqlite::ConnectionProvider>("/path/to/database.sqlite");    
  
    /* Create database-specific ConnectionPool */
    auto connectionPool = oatpp::sqlite::ConnectionPool::createShared(connectionProvider, 
                                                                      10 /* max-connections */, 
                                                                      std::chrono::seconds(5) /* connection TTL */);
    
    /* Create database-specific Executor */
    auto executor = std::make_shared<oatpp::sqlite::Executor>(connectionPool);
  
    /* Create MyClient database client */
    return std::make_shared<MyClient>(executor);
  }());

};
```
