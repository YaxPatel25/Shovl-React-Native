# **Shovl React Native CLI Version**
![shovl - logo](assets/shovl_new_logo.png)

Shovl is a mobile application implemented using react-native that provide snow clearing service. This app only acts as a mediator between actual shoveler and the customer that needs their snow removed from their property.


# **Changes Made**

* App was ejected from EXPO to React Native CLI
* Firebase Intergration was added to both Signup and Login
* Refactor components and navigation to more advanced arhitecture that isolates business logic (aka api calls) from UI)
  * Sign up & Login calls were isolated from business logic
  * Bottom Navigation added and refactored into a component
  * Static html list items were moved to a Flatlist and populated dynamically
* Use component lifecycle hooks to fulfill the business logic
  * Lifecycle hooks was used to populate FlatList items in home page
