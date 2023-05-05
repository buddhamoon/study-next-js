export default function handler(req, res) {
    console.info( req.body,req.query )
    if ( req.method === 'POST') {
      // res.status(200).send({ text: 'Hello' });
      res.status(200).json({ text: 'Hello' });
    } else {
      res.status(404).send({ 'errorMessage': '404' });
    }
  }