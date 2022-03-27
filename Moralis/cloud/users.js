Moralis.Cloud.define("getUsers", async (request) => {
	const query = new Moralis.Query("_User", { useMasterKey: true });
	const results = await query.find({ useMasterKey: true });
	return results;
});

