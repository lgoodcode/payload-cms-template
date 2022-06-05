const X = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e']
const N = [8, 9, 'a', 'b']
const temp = 'xxxxxxxxxxxMxxxNxxxxxxxx'

/**
 * Returns a unique id identifier with a length of 24 characters.
 */
export default function uid() {
	let uuid = ''

	for (let i = 0; i < temp.length; i++) {
		// X = [0-9a-f]
		if (temp[i] === 'x') {
			uuid += X[Math.floor(Math.random() * X.length)]
			// M = [1-5]
		} else if (temp[i] === 'M') {
			uuid += Math.ceil(Math.random() * 5)
			// N = [8,9,a,b]
		} else {
			uuid += N[Math.floor(Math.random() * N.length)]
		}
	}

	return uuid
}
