// Check if email is Gmail
const Gmail = email => {
    // eslint-disable-next-line no-useless-escape
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com/;
    // Valid gmail address
    if (email.match(regExp))
        return true
    // Non valid gmail address
    else
        return false
}

// Check if empty
const Empty = string => {
    if (string.trim() === '')
        return true
    else
        return false
}

exports.validateUserData = (data) => {
    let errors = {}

    if (Empty(data.email))
        errors.email = 'Must not be empty'
    else if (!Gmail(data.email))
        errors.email = 'Must be a valid gmail address'

    if (Empty(data.password))
        errors.password = 'Must not be empty'
    else if (data.password.length > 32)
        errors.password = 'Must not be longer than 32 characters'

    if (Empty(data.username))
        errors.username = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }
}

exports.validateLoginData = (data) => {
    let errors = {}

    if (Empty(data.email))
        errors.email = 'Must not be empty'
    else if (!Gmail(data.email))
        errors.email = 'Is not a valid Gmail address'

    if (Empty(data.password))
        errors.password = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }
}

exports.validateDatabaseData = (data) => {
    let errors = {}

    if (Empty(data.spammedEmail))
        errors.spammedEmail = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }
}

exports.validateBlacklistData = (data) => {
    let errors = {}

    if (Empty(data.blacklistEmail))
        errors.blacklistEmail = 'Must not be empty'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }
}

exports.validateForgottenPasswordData = (data) => {
    let errors = {}

    if (Empty(data))
        errors.email = 'Must not be empty'
    else if (!Gmail(data))
        errors.email = 'Is not a valid Gmail address'

    return {
        errors,
        valid: Object.keys(errors).length === 0
    }
}

// Validate Auto Reply Data
exports.validateAutoReplyData = (data) => {
 
    let errors = {}
 
    if(Empty(data.username)){
        errors.username = 'Must not be empty' 
    }
 
    else if(Empty(data.title)){
        errors.title = 'Must not be empty' 
    }
 
    else if(Empty(data.body)){
        errors.body = 'Must not be empty' 
    }
 
    else if(Empty(data.subject)){
        errors.subject = 'Must not be empty' 
    }
 
    else if(Empty(data.to)){
        errors.to = 'Must not be empty' 
    }
 
    return{
        errors, 
        valid: Object.keys(errors).length === 0 
    }
}