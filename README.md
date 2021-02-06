# NgWithSchematics

This repo created in order to learn how to use angular Schematics with angular cli project.

## Step 1: create a new angular project

`ng new ng-with-schematics`

## Step 2: Install the schematics-cli globally

`npm install -g @angular-devkit/schematics-cli`

## Step 3: Create a blank schematics inside our project

execute this command under the root folder
`schematics blank --name=schematics`
once it's done we should have schematics folder under the root project folder

## Step 4: Add preinstall scripts in package.json file

In order to make sure the schematics node_modules exist we want to add preinstall script in the root folder under the
package.json file. That way when someone clone our project and execute the `npm install` it will install the schematics
dependencies.

### root package.json

```json
{
  "scripts": {
    "preinstall": "cd ./schematics && npm install"
  }
}
```

## Step 5: update package.json name

### root package.json

```json
{
  "name": "@rifo/my-cool-project",
  "scripts": {
    "preinstall": "cd ./schematics && npm install"
  }
}
```

### schematics/package.json

```json
{
  "name": "@rifo/my-cool-project-schematics"
}
```

## Step 6: Add our schematics project to devDependencies in our root package.json
That way we can install schematics to our node_modules

### root package.json

```json

{
  "name": "@rifo/my-cool-project",
  "scripts": {
    "preinstall": "cd ./schematics && npm install"
  },
  "devDependencies": {
    "@rifo/my-cool-project-schematics": "file:./schematics"
  }
}
```
### Execute `npm install` in order to add the schematics project under the node_modules

## Step 7: Update our angular.json to reference our schematics

### angular.json
```json
{
  "$schema": "./node_modules/@rifo/my-cool-project-schematics/src/collection.json",
  "cli": {
    "defaultCollection": "@rifo/my-cool-project-schematics"
  }
}
```

## Step 8: update schematics collection.json

- add `"extends": ["@schematics/angular"]`
- replace the schematics object

### schematics/src/collection.json after changes
```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "extends": ["@schematics/angular"],
  "schematics": {
    "component": {
      "description": "Create a new component",
      "factory": "./component/index#newComponent",
      "schema": "./component/schema.json"
    }
  }
}
```

## Step 9: change src/schematics folder name to component

## Step 10: add schema.json file under  src/component 


### schema.json
```json
{
  "id": "SchematicsNewComponent",
  "title": "New Component",
  "type": "object",
  "properties": {
    "name": {
      "description": "The component name.",
      "type": "string",
      "$default": {
        "$source": "argv",
        "index": 0
      }
    }
  },
  "required": ["name"]
}

```
