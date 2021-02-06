import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function newComponent(options: any): Rule {
  options.tmpl = '';
  return (tree: Tree, context: SchematicContext) => {
    console.log(context);
    return tree;
  };
}
