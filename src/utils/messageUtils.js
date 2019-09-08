// This function handles messages
export default {
    defaultWelcome: [
        'Welcome to Barefoot Nomad server.',
        'use /api/v1 as the base path url for the APIs of this app.',
    ],
    dateForFuture: 'Please enter a date greater than the departure date for return date.',
    dateForToday: 'Please enter the correct date of today.',
    welcome: 'Welcome to Archangel Barefoot Nomad Web App API.',
    signupSuccess: (email) => `You have successfully registered with this email, ${email}.`,

    // sign-up validation messages
    invalidEmail: 'Please, enter a valid email address.',
    usedEmail: (email) => `User with this email (${email}) already exist.`,
    shortPassword: 'The length of the password must be 8 and above.',
    noDigitInPassword: 'Password must contain at least one digit.',
    emptyAccommodation: 'You must select an accommodation.',
    emptyFirstname: 'First name cannot be empty.',
    emptyLastname: 'Last name cannot be empty.',
    emptyOrigin: 'You must state your current city.',
    emptyDestination: 'You must state your destination.',
    emptyDepartureDate: 'You must state your departure date.',
    emptyReturnDate: 'You must state your return date.',
    emptyTravelPurpose: 'You must state your travel purpose.',
    emptyTravelType: 'Sorry, travel type can not be empty.',
    invalidUserId:'Sorry you can only create the request with the id of the logged in user.',
    invalidTravelType: 'Sorry you can only make return trip request here.',
    lettersAlone: 'Only letters are allowed',
    unauthorized: 'Not authorized.',
    invalidToken: 'Invalid Token, please login.',
    isNotInteger: 'You must enter a valid integer type.',
    logoutSuccess: 'Logged out successfully.',
    incorrectPassword: 'Sorry, the password entered is not correct.',
    loginSuccess: 'You have been logged in sucessfully.',
    returnTripCreated: 'Your return trip request was created successfully.',
    signupSuccess: (email) => `You have successfully registered with this email, ${email}.`,
    userEmailNotFound: (email) => `Sorry, there is no user with email ${email} in the database.`,
    userIdNotFound: (id) => `Sorry, there is no user with id: ${id} in the database.`
};
