export async function get({ params: { repo } }: { params: { repo: string } }) {
	const data = await fetch(`https://api.github.com/repos/${repo}`, {
		headers: {
			authorization: `token ${import.meta.env.VITE_githubApiToken}`
		}
	}).then((rsp) => rsp.json());
	return {
		body: data
	};
}
