const MongoClient = require("mongodb").MongoClient;
const uri =
	"mongodb+srv://ahaseko:aaseko100465@cluster0.hqm02.mongodb.net/<mydb>?retryWrites=true&w=majority";

module.exports = {
	index: (req, res) => {
		const client = new MongoClient(uri, { useNewUrlParser: true });
		const dbName = "data_portofolio_website";
		// funct to db
		async function loadDb() {
			try {
				await client.connect();

				const db = client.db(dbName);

				// use collections
				const col = db.collection("database");
				const myDoc = await col.find({}).toArray((err, result) => {
					console.log(result);
				});
				// get data

				res.send("oke");
				// res.send({ application: result });
				client.close();
			} catch (err) {
				console.log(err.stack);
			} finally {
				await client.close();
			}
		}
		loadDb().catch(console.dir);
	},
	update: (req, res) => {
		const client = new MongoClient(uri, { useNewUrlParser: true });
		const dbName = "data_portofolio_website_update";
		// funct to db
		async function loadDb() {
			try {
				await client.connect();

				const db = client.db(dbName);

				// use collections
				const col = db.collection("database");
				const myDoc = await col.find({}).toArray((err, result) => {
					console.log(result);
				});
				// get data

				res.send("oke");
				// res.send({ application: result });
				client.close();
			} catch (err) {
				console.log(err.stack);
			} finally {
				await client.close();
			}
		}
		loadDb().catch(console.dir);
	},
};
