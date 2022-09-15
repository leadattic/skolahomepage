// lang, 1=swedish 2=english
// btnstyle, 1=btns 2=text 3=icon

const allTheHtml = document.getElementById('html')
if (localStorage.getItem('lang')) { } else { localStorage.setItem('lang', 1) }
if (localStorage.getItem('style')) { } else { localStorage.setItem('style', 2) }

let lang = localStorage.getItem('lang')
let btnStyle = localStorage.getItem('style')

render()
function render() {
  if (lang === '1' && btnStyle === '2') {
    allTheHtml.innerHTML = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Skolahomepage</title>
<link rel="stylesheet" href="index.css">
</head>

<body background="placeholder.png" id='body'>

  <h2>
    <a href=testhref.html><big>
        <p>Schema</p></a></big>
    <a href=matematik.html> <big>
        <p>Matte</p>
      </big>
      <a href="engels.html"> <big>
          <p>Engelska</p>
        </big></a>
      <a href="sveddich.html"> <big>
          <p>Svenska</p>
        </big></a>
      <a href="SO.html"> <big>
          <p>SO</p>
        </big></a>
      <a href='kalkylator.html'><img src="images__1_-removebg-preview.png" width="50" height="42"> </a>
      <a href='https://skolfederation.lulea.se/wa/auth?authmech=Användarnamn%20och%20lösenord&location=https%3a%2f%2fskolfederation.lulea.se%2fwa%2fauth%2fsaml%2f%3fSAMLRequest%3dfVFLT4NAEP4rZO9lYVta3BQSbA82qUoKevBitjC1pMsu7ixW%252F708NKkHe5355nvNEkUtG5609qh28N4CWuezlgr5sIhIaxTXAivkStSA3BY8S%252B63nLkeb4y2utCSOAkiGFtptdIK2xpMBuajKuBpt43I0doGOaVohbFuq6pTW7sKLM1S2nMxmj5mOXHWnXilRE9zcXTS8gAlmGHuylaCcBHoWVDRmaa9TUqczToir4dwXnrejc8ELKZhUM4Ym4Wz%252FV744XxxuBEdDLGFjeqcKBsR5jE28cKJH%252BQ%252B437Ag%252BkLcdKfVLeVKiv1dr2C%252FQhCfpfn6WTM8QwGhwwdgMTL3iEfhM1FtddpxW%252BfJP63PWyW9IJ7FGr4Q0e2WadaVsWXk0ipzysDwkJEfELj8eTvw%252BNv%26RelayState%3dss%253Amem%253A6f249b4a3ab00d153eb61a16cc46fde5e0ad4b4f677e05f673eaeb7a9f7e17e0'
        target="blank_"><img
          src='unikum-removebg-preview.png'
          width=40 height=40></a>
      <a href='https://app.skolon.com/apps/my-collection' target="blank_"> <img
          src="skolon-logo-x2-removebg-preview.png"
          width="74" height="29"></a>
      <a href='https://www.office.com/' target="blank_"> <img
          src="Microsoft_Office_logo__2019_present_.svg-removebg-preview.png"
          width="40" height="40"></a>
      <a href='https://skolfederation.lulea.se/wa/auth/saml/?SAMLRequest=jVJdT%2BMwEPwrkd%2BTtGkDjdVWKlSnq8RHRQsPvKDF2VALxw7eDXD%2F%2FpyEk3o8VDxZGs%2FMzo52TlCbRq5aPtg7fGuROPqsjSXZfyxE6610QJqkhRpJspK71fWVzJKRbLxjp5wRR5LTCiBCz9pZEW3WC%2FE0VYgwHcNEAeYqz3Iossl0BlgUUMzgvJqoQqmqmp2J6AE9BeVCBKMgJ2pxY4nBcoBGWRaPZvE434%2FPZZ7JSfEoonXYRlvgXnVgbkimKb06U2GJvscT0xqEhDD9gBRCC2m3RCqi1b%2Bkl85SW6PfoX%2FXCu%2Fvro68AjchbkvdOdSuDGZJc2gGExreLAZFA9oxY8KYGhFtv8q70LbU9uV0b88DieTv%2FX4bb293e7Gcd%2Bay78Evf5yoRoYSGL4HmqfHdvPhLG5CkM1664xWf6JfztfAp3N2iC7jqqdK9mBJo%2BVQpzHu49IjMC4E%2BxZFuhxG%2Fn98y78%3D&RelayState=https%3A%2F%2Fsaml.studi.se%2Fmodule.php%2Fcore%2Fauthenticate.php%3Fas%3Dstudi-se-sp'
        target="blank_"> <img
          src='hamtning__2_-removebg-preview.png'
          width="80" height="40"></a>
      <a href="https://open.ugglo.se/sign-in" target="blank_"> <img
          src="ugglo-Icon-Round (1).png"
          width="50" height="50" <footer>
      </a>
        <hr>
        <a href="help.html" target="blank_">
          <small>Help / support</a> Credits: leadattic_ och Power_Utter <a href=changelogs.html target="blank_">
          Changelogs</a> DISCLAIMER: still under development<p>current version: v.0.10.2, <a href="https://github.com/leadattic/skolahomepage"> Source Code</a></p> <a
          href=old.html target=blank_><p id='oldVersionLink'>Do you want an older version?</p></a> </small>
        </h4>
        <!--<script src="alert.js"> </script> remove comment thingies if you want to execute it :)-->
        <h4>Click to increase:</h4>
        <h2 id="count-el">0</h2>
        <button id="increment-btn" onclick="increment()">Increase</button>
<button id="save-btn" onclick="reset()">Reset</button>
            <p id='save-el'></p>
        <script src="index.js"></script>
        </footer>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
</body>`
  } else if (lang === '2' && btnStyle === '2') {
    allTheHtml.innerHTML = `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Skolahomepage</title>
<link rel="stylesheet" href="index.css">
</head>

<body background="placeholder.png" id='body'>
  This should be in engish but its not :( wanna go back to svenska? <button onclick='change("lang", 1)'>yea</button><br>
  <small>psst, you might have to reload the page
  <h2>
    <a href=testhref.html><big>
        <p>Schema</p></a></big>
    <a href=matematik.html> <big>
        <p>Matte</p>
      </big>
      <a href="engels.html"> <big>
          <p>Engelska</p>
        </big></a>
      <a href="sveddich.html"> <big>
          <p>Svenska</p>
        </big></a>
      <a href="SO.html"> <big>
          <p>SO</p>
        </big></a>
      <a href='kalkylator.html'><img src="images__1_-removebg-preview.png" width="50" height="42"> </a>
      <a href='https://skolfederation.lulea.se/wa/auth?authmech=Användarnamn%20och%20lösenord&location=https%3a%2f%2fskolfederation.lulea.se%2fwa%2fauth%2fsaml%2f%3fSAMLRequest%3dfVFLT4NAEP4rZO9lYVta3BQSbA82qUoKevBitjC1pMsu7ixW%252F708NKkHe5355nvNEkUtG5609qh28N4CWuezlgr5sIhIaxTXAivkStSA3BY8S%252B63nLkeb4y2utCSOAkiGFtptdIK2xpMBuajKuBpt43I0doGOaVohbFuq6pTW7sKLM1S2nMxmj5mOXHWnXilRE9zcXTS8gAlmGHuylaCcBHoWVDRmaa9TUqczToir4dwXnrejc8ELKZhUM4Ym4Wz%252FV744XxxuBEdDLGFjeqcKBsR5jE28cKJH%252BQ%252B437Ag%252BkLcdKfVLeVKiv1dr2C%252FQhCfpfn6WTM8QwGhwwdgMTL3iEfhM1FtddpxW%252BfJP63PWyW9IJ7FGr4Q0e2WadaVsWXk0ipzysDwkJEfELj8eTvw%252BNv%26RelayState%3dss%253Amem%253A6f249b4a3ab00d153eb61a16cc46fde5e0ad4b4f677e05f673eaeb7a9f7e17e0'
        target="blank_"><img
          src='unikum-removebg-preview.png'
          width=40 height=40></a>
      <a href='https://app.skolon.com/apps/my-collection' target="blank_"> <img
          src="skolon-logo-x2-removebg-preview.png"
          width="74" height="29"></a>
      <a href='https://www.office.com/' target="blank_"> <img
          src="Microsoft_Office_logo__2019_present_.svg-removebg-preview.png"
          width="40" height="40"></a>
      <a href='https://skolfederation.lulea.se/wa/auth/saml/?SAMLRequest=jVJdT%2BMwEPwrkd%2BTtGkDjdVWKlSnq8RHRQsPvKDF2VALxw7eDXD%2F%2FpyEk3o8VDxZGs%2FMzo52TlCbRq5aPtg7fGuROPqsjSXZfyxE6610QJqkhRpJspK71fWVzJKRbLxjp5wRR5LTCiBCz9pZEW3WC%2FE0VYgwHcNEAeYqz3Iossl0BlgUUMzgvJqoQqmqmp2J6AE9BeVCBKMgJ2pxY4nBcoBGWRaPZvE434%2FPZZ7JSfEoonXYRlvgXnVgbkimKb06U2GJvscT0xqEhDD9gBRCC2m3RCqi1b%2Bkl85SW6PfoX%2FXCu%2Fvro68AjchbkvdOdSuDGZJc2gGExreLAZFA9oxY8KYGhFtv8q70LbU9uV0b88DieTv%2FX4bb293e7Gcd%2Bay78Evf5yoRoYSGL4HmqfHdvPhLG5CkM1664xWf6JfztfAp3N2iC7jqqdK9mBJo%2BVQpzHu49IjMC4E%2BxZFuhxG%2Fn98y78%3D&RelayState=https%3A%2F%2Fsaml.studi.se%2Fmodule.php%2Fcore%2Fauthenticate.php%3Fas%3Dstudi-se-sp'
        target="blank_"> <img
          src='hamtning__2_-removebg-preview.png'
          width="80" height="40"></a>
      <a href="https://open.ugglo.se/sign-in" target="blank_"> <img
          src="ugglo-Icon-Round (1).png"
          width="50" height="50" <footer>
      </a>
        <hr>
        <a href="help.html" target="blank_">
          <small>Help / support</a> Credits: leadattic_ och Power_Utter <a href=changelogs.html target="blank_">
          Changelogs</a> DISCLAIMER: still under development<p>current version: v.0.10.2, <a href="https://github.com/leadattic/skolahomepage"> Source Code</a></p> <a
          href=old.html target=blank_><p id='oldVersionLink'>Do you want an older version?</p></a> </small>
        </h4>
        <!--<script src="alert.js"> </script> remove comment thingies if you want to execute it :)-->
        <h4>Click to increase:</h4>
        <h2 id="count-el">0</h2>
        <button id="increment-btn" onclick="increment()">Increase</button>
<button id="save-btn" onclick="reset()">Reset</button>
            <p id='save-el'></p>
        <script src="index.js"></script>
        </footer>
  <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
</body>`}

}
function change(whatToChange, id) {
  if (whatToChange === 'lang') {
    if (id) { localStorage.setItem('lang', id) }
  } else if (whatToChange === 'btnstyle') { if (id) { localStorage.setItem('style', id) } }
  lang = localStorage.getItem('lang')
  btnStyle = localStorage.getItem('style')
  render()
}









