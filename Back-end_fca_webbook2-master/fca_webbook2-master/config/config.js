module.exports = {
    mongodb: {
        uri: 'mongodb+srv://fcabook:fT73qsfEjZ7C@fcabook-jly7a.mongodb.net/animalec_utad80176?retryWrites=true&w=majority',
        collections: {
            animal: 'animals',
            sponsors: 'sponsors_utad80176',
            experts: 'experts_utad80176',
            animal: 'animals',
            question: 'questions',
            quiz: 'quizzes',
            user: 'users',
            user_levels: "user_levels"
        }
    },
    auth: {
        expiration_time: 15000,
        issuer: "FCA"
    },
    sanitize: {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ",
        numerical: "0123456789"
    },
    email: {
        service: "Gmail",
        auth: {
            user: "mailserverpw@gmail.com",
            pass: "ttxirdxzkafhcuel"
        }
    }
}