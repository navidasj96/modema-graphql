const fs = require('fs');
const path = require('path');

const entitiesDir = path.join(__dirname, 'src/entities/entities');
const outputDir = path.join(__dirname, 'src/generated');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(entitiesDir).forEach(file => {
  if (file.endsWith('.ts')) {
    const entityName = file.replace('.ts', '');
    const entityPath = path.join(entitiesDir, file);
    const entityContent = fs.readFileSync(entityPath, 'utf-8');

    const graphqlDecorators = `
      import { ObjectType, Field, Int } from '@nestjs/graphql';
      import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

      @ObjectType()
      @Entity()
      export class ${entityName.charAt(0).toUpperCase() + entityName.slice(1)} {
        @Field(() => Int)
        @PrimaryGeneratedColumn()
        id: number;

        ${entityContent.match(/@Column\(\)\s+(\w+):\s+\w+;/g).map(column => {
      const [_, name, type] = column.match(/@Column\(\)\s+(\w+):\s+(\w+);/);
      return `@Field()\n@Column()\n${name}: ${type};`;
    }).join('\n')}
      }
    `;

    const resolverContent = `
      import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
      import { ${entityName.charAt(0).toUpperCase() + entityName.slice(1)}Service } from './${entityName}.service';
      import { ${entityName.charAt(0).toUpperCase() + entityName.slice(1)} } from './${entityName}.entity';

      @Resolver(() => ${entityName.charAt(0).toUpperCase() + entityName.slice(1)})
      export class ${entityName.charAt(0).toUpperCase() + entityName.slice(1)}Resolver {
        constructor(private readonly ${entityName}Service: ${entityName.charAt(0).toUpperCase() + entityName.slice(1)}Service) {}

        @Query(() => [${entityName.charAt(0).toUpperCase() + entityName.slice(1)}])
        ${entityName}s() {
          return this.${entityName}Service.findAll();
        }

        @Query(() => ${entityName.charAt(0).toUpperCase() + entityName.slice(1)})
        ${entityName}(@Args('id', { type: () => Int }) id: number) {
          return this.${entityName}Service.findOne(id);
        }

        @Mutation(() => ${entityName.charAt(0).toUpperCase() + entityName.slice(1)})
        create${entityName.charAt(0).toUpperCase() + entityName.slice(1)}(@Args('input') input: ${entityName.charAt(0).toUpperCase() + entityName.slice(1)}) {
          return this.${entityName}Service.create(input);
        }

        @Mutation(() => Boolean)
        async remove${entityName.charAt(0).toUpperCase() + entityName.slice(1)}(@Args('id', { type: () => Int }) id: number) {
          await this.${entityName}Service.remove(id);
          return true;
        }
      }
    `;

    fs.writeFileSync(path.join(outputDir, `${entityName}.graphql.ts`), graphqlDecorators);
    fs.writeFileSync(path.join(outputDir, `${entityName}.resolver.ts`), resolverContent);
  }
});

console.log('GraphQL decorators and resolvers generated successfully.');