const d = document;
const n = navigator;
const ua = navigator.userAgent;

export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie|iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.ie() ||
          this.edge() ||
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera()
        );
      },
    };

  $id.innerHTML = `
  
        <ul>
            <li>User Agent: <b>${ua}</b></li>
            <li>Plataforma: <b>${
              isMobile.any() ? isMobile.any() : isDesktop.any()
            }</b></li>
            <li>Navegador: <b>${isBrowser.any()}</b></li>
        </ul>
  `;

  //   Contenido Exclusivo para chrome, prueba de validacion

  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
  }

  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga este contenido para Windows</mark></p>`;
  }

  if (isDesktop.mac()) {
    $id.innerHTML += `<p><mark>Descarga este contenido para Mac OS</mark></p>`;
  }
}
