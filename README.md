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

## Step 3: Add preinstall scripts in package.json file 
In order to make sure the schematics node_modules exist we want to add
preinstall script in the root folder under the package.json file.
That way when someone clone our project and execute the `npm install` it will install the schematics dependencies.

### root package.json
```json
{
  "scripts": {
    "preinstall": "cd ./schematics && npm install"
  }
}
```

## Step 4: update package.json name

### root package.json

```json
"name": "@rifo/my-cool-project",
{
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
