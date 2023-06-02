/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"VfPLxdcLlDY0T5Uy","label":"reddit","bookmarks":[{"id":"FTmh9zUeDP48bmXd","label":"r/startpages","url":"https://www.reddit.com/r/startpages/"},{"id":"VmrqrNeDDmwwb09r","label":"r/typescript","url":"https://www.reddit.com/r/typescript/"},{"id":"r58TqRrEJe3febRC","label":"r/reactjs","url":"https://www.reddit.com/r/reactjs/"}]},{"id":"ruUBdtMVDddF4gOb","label":"design tools","bookmarks":[{"id":"OoQpjFdHThZBtO54","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"oYWggFu87195RSLs","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"Bi4DCk62uPEZeb4b","label":"haikei","url":"https://app.haikei.app/"},{"id":"ZzgYgE2QtmoLoI1H","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"EQuCzdSmU3ADmk2J","label":"worth reading","bookmarks":[{"id":"Hzqly5roa5Xtbgad","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"SGb42gUlOmLMEvyu","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"z8Oo63SbRBFtKG9W","label":"react docs","url":"https://reactjs.org/docs/getting-started.html"},{"id":"fe5Hbnm3pEe87B0D","label":"New bookmark","url":""}]},{"id":"14zyGe4CQpGdbKth","label":"sources","bookmarks":[{"id":"DMUQiaX4gRUUSVLF","label":"icons","url":"https://feathericons.com/"},{"id":"ZBlG3kY8fgis8jhl","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"0HdS4F1kNibzhcQE","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"9yesvUGiLVlgryWa","label":"author","url":"https://prettycoffee.github.io/"}]},{"id":"j4gO9UI0xfLUtX6J","label":"Socials","bookmarks":[{"id":"6yd2Xl9FvUMkFjpM","label":"Twitter","url":"Twitter.com"},{"id":"0gamXa8hdjOOjALo","label":"Steam","url":"steam.com"},{"id":"vn4HEKIXJpi0UuaA","label":"YouTube","url":"youtube.com"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
