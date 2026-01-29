let cachedToken: string | null = null;

export function setAuthToken(token: string | null) {
	cachedToken = token;
}

export function getAuthToken() {
	return cachedToken;
}
