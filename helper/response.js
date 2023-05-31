export const goodResponse = (response, message) => ({
    statusCode: 200,
    message,
    isError: false,
    ...response,
});

export const failedResponse = (
    message,
    statusCode = 401,
    responseException = ''
) => ({
    statusCode,
    message,
    isError: true,
    responseException,
});
