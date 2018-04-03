// import Teacher from './entity'
// import Student from '../student/entity'
// import Evaluation from '../evaluation/entity'
// import Batch from '../batch/entity'
// import { createConnection, Connection } from 'typeorm'
// import { DefaultNamingStrategy } from 'typeorm/naming-strategy/DefaultNamingStrategy'
// import { NamingStrategyInterface } from 'typeorm/naming-strategy/NamingStrategyInterface'
// import { snakeCase } from 'typeorm/util/StringUtils'

// class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

//     tableName(targetName: string, userSpecifiedName: string): string {
//         return userSpecifiedName ? userSpecifiedName : snakeCase(targetName) + 's';
//     }

//     columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
//         return snakeCase(embeddedPrefixes.concat(customName ? customName : propertyName).join("_"));
//     }

//     columnNameCustomized(customName: string): string {
//         return customName;
//     }

//     relationName(propertyName: string): string {
//         return snakeCase(propertyName);
//     }
// }



// const config = {
//     type: "postgres",
//     url: process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres',
//     entities: [
//         Student,
//         Teacher,
//         Evaluation,
//         Batch,
//     ],
//     synchronize: true,
//     logging: true,
//     namingStrategy: new CustomNamingStrategy()
// }



// const seed = async () => {

//     const conn = await createConnection(config);

//     console.log('Seed start.')


//     try {

//         const teacher =  {
//             email: "tim2@teacher.tt",
//             password: "12345678"
//         }

//         const { password, ...rest } = teacher
//         const entity = Teacher.create(rest)
//         await entity.setPassword(password)
//         return entity.save()

//         // console.log('Seed end')

//         // return

//         }
//     catch(e){
//         return { e: e.message }
//     }
// }
// seed();
