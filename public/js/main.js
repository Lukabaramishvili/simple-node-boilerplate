// jest won't error out on DOM calls.
// console.log(document.querySelector('p').innerHTML);

document.addEventListener('DOMContentLoaded', async () => {
  console.log('loaded');

  // new Date('21 Feb 2020 10:00:00 GMT-0500')
  const slot = Date.now();
  await postData('Test', slot);

  const reservations = await getData();

  const rootEl = document.getElementById('root');

  const els = reservations.map(rezz => {
    const el = document.createElement('div');
    el.innerText = `${rezz.name} ${new Date(rezz.slot).toLocaleString()}`;
    rootEl.appendChild(el);
    return el;
  });
});
