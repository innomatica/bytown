const popupStyle = `
<style>
  .popup-title {
    font-size:14px; 
    font-weight:600;
    padding:2px 0 8px 0;
  } 
  .popup-body {
    color:slategray;
    padding: 2px 0;
  }
</style>`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function buildPopUp(item: GisItem, layer: any) {
  // console.log(layer);
  let ret = '';
  // title
  if (item.popup.url && layer.feature.properties[item.popup.url]) {
    ret += `<a class="popup-title" href="${layer.feature.properties[item.popup.url]}" target="_blank">${layer.feature.properties[item.popup.title]}</a>`
  } else {
    ret += `<div class="popup-title">${layer.feature.properties[item.popup.title]}</div>`
  }
  // body
  for (const content of item.popup.contents) {
    if (layer.feature.properties[content]) {
      ret += `<div class="popup-body">${layer.feature.properties[content]}</div>`;
    }
  }
  // style
  ret += popupStyle;
  // console.log(ret);
  return ret;
}