export type createUserParams = {
    name : string,
    email : string,
    password : string
}

export type Onboarding = {
    userId : string,
    onBoarding : {
    firstName : string,
    lastName : string,
    mobileNo : string,
    company : string,
    linkedIn : string,
    mediumAccount : string,
    twitter : string,
    techStack : string,
    entrepreneurialJourney : string,
    productDescription : string
    }
}