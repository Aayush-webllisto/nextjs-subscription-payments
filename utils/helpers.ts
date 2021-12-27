import { Price } from 'types';

export const getURL = () => {
  const url =
    process?.env?.URL && process.env.URL !== ''
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ''
      ? process.env.VERCEL_URL
      : 'http://localhost:3000';
  return url.includes('http') ? url : `https://${url}`;
};

export const postData = async ({ url, token, data }: { url: string; data?: { price: Price }; token: string }) => {debugger
  
  console.log('data,', data);
  localstorage.setItem('posturl',url)
  localstorage.setItem('posttoken',token)
  localstorage.setItem('postdata',data)

  debugger;
  const res: Response = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json', token }),
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });
  
  console.log('response,', res);

  if (!res.ok) {
    console.log('Error in postData', { url, token, data, res });

    throw Error(res.statusText);
  }

  return res.json();
};

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z'); // Unix epoch start.
  t.setSeconds(secs);
  return t;
};
