export const getHeader = (url = '/', headerProp = 'date') => {
	fetch(url).then((response) => {
		for (var pair of response.headers.entries()) {
			if (pair[0] === headerProp) {
				return pair[1];
			}
		}
	});
};
