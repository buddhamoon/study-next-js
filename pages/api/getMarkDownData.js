import getDataTools from "../../tools/getDataTools";

export default async function handler(req, res) {
    
    if ( req.method === 'POST') {
      // res.status(200).send({ text: 'Hello' });
      const { fileName } = req.body;
      if (!fileName || typeof(fileName) !== "string") return res.status(404).send({ 'errorMessage': '参数异常' });
      const getDataMothod = new getDataTools();
      const getData = await getDataMothod.getMarkDownData(fileName);
      res.status(200).json({ text: getData });
    } else {
      // test
      res.status(404).send({ 'errorMessage': '404' });
    }
  }