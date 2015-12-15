export const GET = request.bind(null, 'GET');
export const POST = request.bind(null, 'POST');


function request(method, {url, data, contentType = 'application/json', successCb, errorCb}) {
	const xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.setRequestHeader('Content-Type', contentType);
	xhr.send(data);
	xhr.onload = () => {
		successCb(JSON.parse(xhr.responseText));
	};
	xhr.onerror = errorCb;
}
