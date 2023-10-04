// Copy text to clipboard
let text = args.queryParameters["text"]
if (text) {
  Pasteboard.copyString(decodeURIComponent(text))
  let alert = new Alert()
  alert.message = "Text copied to clipboard!"
  alert.presentAlert()
}
