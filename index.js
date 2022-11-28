const StorageProvider = require('./storage.js')

const store = StorageProvider({location: './storage', hi: true})
const test_variable = new store.Storage('ok')

test_variable.name = "Alexa"
