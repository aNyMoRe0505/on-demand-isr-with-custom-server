export default async function handler(req, res) {
  console.log('req.method', req.method);
  console.log('req.body', req.body);

  try {
    await res.unstable_revalidate('/');
    return res.status(200).send('Success!');
  } catch (error) {
    console.log(error);
    return res.status(400).send('fail!');
  }
}
