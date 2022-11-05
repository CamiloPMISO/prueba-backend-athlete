
export const athleteUserManagmentServiceURL = process.env.NODE_ENV === 'prod' ? process.env.PROD_URL + '/sv-athlete/api/v1': 'http://localhost:3000/api/v1';