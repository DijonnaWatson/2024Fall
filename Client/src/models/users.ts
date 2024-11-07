export Class User {
    id?: number
    firstName: string = ''
    lastName: string = ''
    email: string = ''
    phone: string = ''
    password: string = ''
    birthday: string = ''
    image: string = ''
    address{
        street: string = ''
        city: string = ''
        state: string = ''
        zip: string = ''
    }
}