import Teacher from './entity'



const seed = async () => {
    console.log('Seed start.')


    try {

        const teacher =  {
            email: "tim@teacher.tt",
            password: "12345678"
        }

        const { password, ...rest } = teacher
        const entity = Teacher.create(rest)
        await entity.setPassword(password)
        return entity.save()

        // console.log('Seed end')

        // return

        }
    catch(e){
        return { e: e.message }
    }
}
seed();
